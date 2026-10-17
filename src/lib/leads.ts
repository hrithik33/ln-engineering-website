import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export interface StoredEnquiry {
  referenceId: string;
  timestamp: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  countryLocation: string;
  machineInterest: string;
  stoneType: string;
  productionRequirement: string;
  message: string;
  deliveryStatus: {
    storedLocally: boolean;
    emailDispatched: boolean;
    webhookDispatched: boolean;
    emailError?: string;
    webhookError?: string;
  };
}

// In-memory sliding window for duplicate prevention (5 minutes)
const recentSubmissions = new Map<string, { referenceId: string; timestamp: number }>();
const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;

function cleanupOldSubmissions() {
  const now = Date.now();
  for (const [key, value] of recentSubmissions.entries()) {
    if (now - value.timestamp > DUPLICATE_WINDOW_MS) {
      recentSubmissions.delete(key);
    }
  }
}

export function checkDuplicate(contact: string, machine: string): string | null {
  cleanupOldSubmissions();
  const normalizedKey = `${contact.trim().toLowerCase()}_${machine.trim().toLowerCase()}`;
  const existing = recentSubmissions.get(normalizedKey);
  return existing ? existing.referenceId : null;
}

export function recordSubmission(contact: string, machine: string, referenceId: string) {
  const normalizedKey = `${contact.trim().toLowerCase()}_${machine.trim().toLowerCase()}`;
  recentSubmissions.set(normalizedKey, { referenceId, timestamp: Date.now() });
}

// Persistent Storage in data/enquiries.jsonl
export async function saveLeadLocally(enquiry: StoredEnquiry): Promise<boolean> {
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, "enquiries.jsonl");
    const line = JSON.stringify(enquiry) + "\n";
    await fs.promises.appendFile(filePath, line, "utf-8");
    return true;
  } catch (err) {
    console.error("[LEADS STORAGE ERROR] Failed to write lead to disk:", err);
    return false;
  }
}

// Email Dispatch via Nodemailer (SMTP)
export async function dispatchEmail(enquiry: StoredEnquiry): Promise<{ success: boolean; error?: string }> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true";
  const recipient = process.env.SALES_EMAIL_RECIPIENT || "info@gangsawmachines.com, lnrajsamand@gmail.com";
  const from = process.env.SMTP_FROM || `"LN Engineering Web Portal" <${user || "leads@gangsawmachines.com"}>`;

  if (!host || !user || !pass) {
    return {
      success: false,
      error: "SMTP credentials not configured in environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS).",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const mailOptions = {
      from,
      to: recipient,
      replyTo: enquiry.email || undefined,
      subject: `[New Quotation Enquiry] ${enquiry.machineInterest} — Ref: ${enquiry.referenceId}`,
      text: `NEW MACHINERY QUOTATION INQUIRY
===========================================
Reference ID: ${enquiry.referenceId}
Timestamp:    ${enquiry.timestamp}

CONTACT DETAILS
-------------------------------------------
Name:         ${enquiry.name}
Company:      ${enquiry.companyName || "N/A"}
Email:        ${enquiry.email || "N/A"}
Phone:        ${enquiry.phone}
Location:     ${enquiry.countryLocation}

SPECIFICATIONS
-------------------------------------------
Machine:      ${enquiry.machineInterest}
Stone Type:   ${enquiry.stoneType}
Requirements: ${enquiry.productionRequirement || "N/A"}

MESSAGE / NOTES
-------------------------------------------
${enquiry.message || "No additional message provided."}
===========================================
Sent from LN Engineering Official Website
`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 8px;">
  <div style="background-color: #151719; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
    <h2 style="color: #ffffff; margin: 0; font-size: 18px;">LN Engineering — New Machine Enquiry</h2>
    <span style="color: #C41E2A; font-weight: bold; font-size: 12px;">Reference: ${enquiry.referenceId}</span>
  </div>

  <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 8px; font-weight: bold; width: 140px; color: #555;">Full Name:</td>
      <td style="padding: 8px; color: #111;">${enquiry.name}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 8px; font-weight: bold; color: #555;">Company:</td>
      <td style="padding: 8px; color: #111;">${enquiry.companyName || "N/A"}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 8px; font-weight: bold; color: #555;">Phone / Mobile:</td>
      <td style="padding: 8px; color: #111;"><a href="tel:${enquiry.phone}">${enquiry.phone}</a></td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
      <td style="padding: 8px; color: #111;"><a href="mailto:${enquiry.email}">${enquiry.email || "N/A"}</a></td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 8px; font-weight: bold; color: #555;">Location:</td>
      <td style="padding: 8px; color: #111;">${enquiry.countryLocation}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eee; background-color: #fbfbfb;">
      <td style="padding: 8px; font-weight: bold; color: #C41E2A;">Machine Model:</td>
      <td style="padding: 8px; font-weight: bold; color: #111;">${enquiry.machineInterest}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 8px; font-weight: bold; color: #555;">Stone Type:</td>
      <td style="padding: 8px; color: #111;">${enquiry.stoneType}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eee;">
      <td style="padding: 8px; font-weight: bold; color: #555;">Requirements:</td>
      <td style="padding: 8px; color: #111;">${enquiry.productionRequirement || "N/A"}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold; color: #555; vertical-align: top;">Notes / Message:</td>
      <td style="padding: 8px; color: #111;">${enquiry.message || "N/A"}</td>
    </tr>
  </table>

  <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee; font-size: 11px; color: #888; text-align: center;">
    Logged at ${enquiry.timestamp} • LN Engineering (L N Machineries Pvt. Ltd.), Rajsamand, India
  </div>
</div>
`,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to send email via SMTP.";
    console.error("[SMTP DISPATCH ERROR]:", errorMsg);
    return { success: false, error: errorMsg };
  }
}

// Webhook Dispatch (CRM, Slack, Zapier)
export async function dispatchWebhook(enquiry: StoredEnquiry): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = process.env.WEBHOOK_URL;
  if (!webhookUrl) {
    return { success: false, error: "WEBHOOK_URL not configured." };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "new_enquiry",
        data: enquiry,
      }),
    });

    if (!res.ok) {
      throw new Error(`Webhook returned status ${res.status}`);
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Webhook dispatch failed.";
    console.error("[WEBHOOK ERROR]:", errorMsg);
    return { success: false, error: errorMsg };
  }
}
