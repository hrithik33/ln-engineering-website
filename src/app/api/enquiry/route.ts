import { NextResponse } from "next/server";
import {
  saveLeadLocally,
  dispatchEmail,
  dispatchWebhook,
  checkDuplicate,
  recordSubmission,
  StoredEnquiry,
} from "@/lib/leads";

function sanitize(input?: string): string {
  if (!input) return "";
  return input
    .replace(/[<>]/g, "") // Strip dangerous HTML tags
    .trim();
}

export async function POST(request: Request) {
  try {
    const rawData = await request.json();

    // 1. Anti-Spam Honeypot Verification
    if (rawData.botField || rawData.website) {
      // Bot detected via hidden honeypot field
      return NextResponse.json(
        { error: "Invalid submission detected." },
        { status: 400 }
      );
    }

    // 2. Client submission timing check (if client provided timestamp)
    if (rawData._formLoadedAt) {
      const elapsed = Date.now() - Number(rawData._formLoadedAt);
      if (elapsed < 1200) {
        // Form submitted faster than humanly possible (under 1.2s)
        return NextResponse.json(
          { error: "Submission too rapid. Please try again." },
          { status: 400 }
        );
      }
    }

    // 3. Sanitization
    const name = sanitize(rawData.name);
    const companyName = sanitize(rawData.companyName);
    const email = sanitize(rawData.email);
    const phone = sanitize(rawData.phone);
    const countryLocation = sanitize(rawData.countryLocation);
    const machineInterest = sanitize(rawData.machineInterest) || "General Stone Machinery";
    const stoneType = sanitize(rawData.stoneType) || "Granite";
    const productionRequirement = sanitize(rawData.productionRequirement);
    const message = sanitize(rawData.message);

    // 4. Strict Validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Please provide your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!phone && !email) {
      return NextResponse.json(
        { error: "Please provide either a telephone number or work email address." },
        { status: 400 }
      );
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    if (phone && phone.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { error: "Please enter a valid telephone number with area/country code." },
        { status: 400 }
      );
    }

    // 5. Duplicate Submission Check (Within 5 minutes for same contact & machine)
    const primaryContact = phone || email;
    const existingRef = checkDuplicate(primaryContact, machineInterest);
    if (existingRef) {
      return NextResponse.json(
        {
          duplicate: true,
          referenceId: existingRef,
          message: `An inquiry for ${machineInterest} was recently logged under Reference ID ${existingRef}. Our engineering team is currently reviewing your project.`,
        },
        { status: 200 }
      );
    }

    // 6. Generate Reference ID & Construct Record
    const referenceId = `LN-ENQ-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const enquiryRecord: StoredEnquiry = {
      referenceId,
      timestamp,
      name,
      companyName,
      email,
      phone,
      countryLocation,
      machineInterest,
      stoneType,
      productionRequirement,
      message,
      deliveryStatus: {
        storedLocally: false,
        emailDispatched: false,
        webhookDispatched: false,
      },
    };

    // 7. SMTP Email Dispatch
    const emailRes = await dispatchEmail(enquiryRecord);
    enquiryRecord.deliveryStatus.emailDispatched = emailRes.success;
    if (!emailRes.success) {
      enquiryRecord.deliveryStatus.emailError = emailRes.error;
    }

    // 8. Webhook Dispatch
    const webhookRes = await dispatchWebhook(enquiryRecord);
    enquiryRecord.deliveryStatus.webhookDispatched = webhookRes.success;
    if (!webhookRes.success) {
      enquiryRecord.deliveryStatus.webhookError = webhookRes.error;
    }

    // 9. Persistent Local Storage with full audit record
    enquiryRecord.deliveryStatus.storedLocally = true;
    const stored = await saveLeadLocally(enquiryRecord);
    if (!stored) {
      enquiryRecord.deliveryStatus.storedLocally = false;
    }

    // 10. Record in-memory for duplicate throttle
    recordSubmission(primaryContact, machineInterest, referenceId);

    // List of missing production configurations for admin awareness
    const pendingConfigs: string[] = [];
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      pendingConfigs.push("SMTP_EMAIL_NOT_CONFIGURED");
    }
    if (!process.env.WEBHOOK_URL) {
      pendingConfigs.push("WEBHOOK_NOT_CONFIGURED");
    }

    return NextResponse.json({
      success: true,
      referenceId,
      timestamp,
      delivery: {
        storedLocally: stored,
        emailDispatched: enquiryRecord.deliveryStatus.emailDispatched,
        webhookDispatched: enquiryRecord.deliveryStatus.webhookDispatched,
        pendingConfiguration: pendingConfigs,
      },
      message: "Quotation request successfully logged in the LN Engineering sales queue.",
    });
  } catch (error) {
    console.error("[ENQUIRY API ERROR]:", error);
    return NextResponse.json(
      { error: "Internal processing error. Please contact sales via telephone or WhatsApp." },
      { status: 500 }
    );
  }
}
