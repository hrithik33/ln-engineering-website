"use client";

import React, { useState, useEffect } from "react";
import { company, stoneTypes } from "@/data/company";

interface QuoteFormProps {
  initialMachine?: string;
  onSuccess?: () => void;
  className?: string;
}

function normalizeMachine(raw?: string): string {
  if (!raw) return "LN 2500";
  const n = raw.trim().toLowerCase();
  if (n.includes("6") && n.includes("wire")) return "LN 6 Wire";
  if (n.includes("12") && n.includes("wire")) return "LN 12 Wire (Standard)";
  if (n.includes("22") && n.includes("wire")) return "LN 22 Wire";
  if (n.includes("promaxx") && n.includes("2500")) return "LN 2500 PROMAXX";
  if (n.includes("pro") && n.includes("2500")) return "LN 2500 PRO";
  if (n.includes("2500")) return "LN 2500";
  if (n.includes("hori")) return "LN HORI 2100";
  if (n.includes("cnc")) return "LN CNC 2100 PROMAXX";
  if (n.includes("rope") || n.includes("diamond")) return "LN Diamond Wire Rope";
  return raw;
}

export default function QuoteForm({ initialMachine, onSuccess, className = "" }: QuoteFormProps) {
  const normalizedInitial = normalizeMachine(initialMachine);

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    countryLocation: "",
    machineInterest: normalizedInitial,
    stoneType: "Granite",
    productionRequirement: "",
    message: "",
    botField: "", // Anti-spam honeypot
  });

  const [formLoadedAt, setFormLoadedAt] = useState<number>(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "duplicate" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [emailDispatched, setEmailDispatched] = useState<boolean>(false);

  useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  // Update machineInterest if initialMachine changes via URL
  useEffect(() => {
    if (initialMachine) {
      setFormData((prev) => ({
        ...prev,
        machineInterest: normalizeMachine(initialMachine),
      }));
    }
  }, [initialMachine]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Client-side quick validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      setStatus("error");
      return;
    }

    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage("Please provide either a telephone number or work email address.");
      setStatus("error");
      return;
    }

    if (formData.phone.trim() && formData.phone.replace(/\D/g, "").length < 7) {
      setErrorMessage("Please enter a valid telephone number with area/country code.");
      setStatus("error");
      return;
    }

    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid work email address.");
      setStatus("error");
      return;
    }

    try {
      const payload = {
        ...formData,
        _formLoadedAt: formLoadedAt,
      };

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit enquiry.");
      }

      if (result.duplicate) {
        setReferenceId(result.referenceId);
        setStatus("duplicate");
        return;
      }

      setReferenceId(result.referenceId || "LN-ENQ-SUCCESS");
      setEmailDispatched(Boolean(result.delivery?.emailDispatched));
      setStatus("success");
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again or use direct WhatsApp.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Machine Quotation Request*\n*Name:* ${formData.name || "Customer"}\n*Company:* ${formData.companyName || "N/A"}\n*Phone:* ${formData.phone || "N/A"}\n*Location:* ${formData.countryLocation || "N/A"}\n*Machine of Interest:* ${formData.machineInterest}\n*Stone Type:* ${formData.stoneType}\n*Production Requirement:* ${formData.productionRequirement || "Standard"}\n*Notes:* ${formData.message || "Please provide commercial pricing and specifications."}`;
    return encodeURIComponent(text);
  };

  if (status === "success") {
    return (
      <div className="bg-[#151719] border border-white/10 rounded-2xl p-8 text-center space-y-5 animate-fadeIn">
        <div className="w-14 h-14 bg-[#C82032]/10 text-[#EF4444] border border-[#EF4444]/30 rounded-full mx-auto flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-[#EF4444] uppercase font-mono block">
            Quotation Request Successfully Registered
          </span>
          <h3 className="text-2xl font-semibold text-white">Thank You, {formData.name}</h3>
          <p className="text-sm text-[#A7ADB5] max-w-md mx-auto">
            Your quotation request for <strong className="text-white">{formData.machineInterest}</strong> has been logged under Reference ID:{" "}
            <code className="text-white bg-[#101112] border border-white/10 px-2 py-0.5 rounded font-mono text-xs">{referenceId}</code>.
          </p>
        </div>

        <div className="bg-[#101112] p-4 rounded-xl text-left text-xs space-y-1.5 max-w-md mx-auto border border-white/10">
          <div className="text-zinc-400 uppercase tracking-wider font-semibold text-[10px] font-mono">
            Submitted Specifications Summary
          </div>
          <div className="text-white font-medium">{formData.machineInterest} • {formData.stoneType}</div>
          <div className="text-[#A7ADB5]">Contact: {formData.phone || formData.email} • {formData.countryLocation}</div>
          {emailDispatched && (
            <div className="text-[#25D366] text-[11px] pt-1">
              ✓ Instant email alert dispatched to LN Engineering sales desk.
            </div>
          )}
        </div>

        <p className="text-xs text-[#A7ADB5] max-w-md mx-auto leading-relaxed">
          Our senior technical machine planners in Rajsamand will review your block dimensions and stone type, delivering a formal technical proposal within 24 business hours.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/${company.whatsapp.number}?text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            <span>Forward to WhatsApp Directly &rarr;</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                companyName: "",
                email: "",
                phone: "",
                countryLocation: "",
                machineInterest: normalizedInitial,
                stoneType: "Granite",
                productionRequirement: "",
                message: "",
                botField: "",
              });
            }}
            className="px-4 py-3 text-xs font-medium text-[#A7ADB5] hover:text-white border border-white/10 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div className="bg-[#151719] border border-amber-500/30 rounded-2xl p-8 text-center space-y-5 animate-fadeIn">
        <div className="w-14 h-14 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full mx-auto flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-mono block">
            Existing Request Already In Review
          </span>
          <h3 className="text-2xl font-semibold text-white">We Already Have Your Parameters</h3>
          <p className="text-sm text-[#A7ADB5] max-w-md mx-auto">
            A quotation request for <strong className="text-white">{formData.machineInterest}</strong> was recently submitted under Reference ID:{" "}
            <code className="text-white bg-[#101112] border border-white/10 px-2 py-0.5 rounded font-mono text-xs">{referenceId}</code>.
          </p>
        </div>

        <p className="text-xs text-[#A7ADB5] max-w-md mx-auto leading-relaxed">
          Our engineering department is currently evaluating your technical configuration. If you need an immediate revision or rush delivery quote, please connect with our engineers via WhatsApp directly.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/${company.whatsapp.number}?text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            <span>Connect via WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-4 py-3 text-xs font-medium text-[#A7ADB5] hover:text-white border border-white/10 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Edit Parameters
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      {/* Invisible Anti-Spam Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="botField">Do not fill this field</label>
        <input
          type="text"
          id="botField"
          name="botField"
          tabIndex={-1}
          autoComplete="off"
          value={formData.botField}
          onChange={handleChange}
        />
      </div>

      {status === "error" && (
        <div className="p-4 bg-red-950/40 border border-red-700/60 rounded-xl text-red-200 text-xs flex items-start gap-3">
          <svg className="w-5 h-5 flex-shrink-0 text-[#EF4444] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <span className="font-semibold block text-white">Submission Notice:</span>
            <span>{errorMessage}</span>
            <div className="mt-2">
              <a
                href={`https://wa.me/${company.whatsapp.number}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>Send details via WhatsApp instead &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-white mb-1.5">
            Full Name <span className="text-[#EF4444] font-bold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Patel / John Meyer"
            className="w-full bg-[#101112] border border-white/10 focus:border-[#C82032] text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="companyName" className="block text-xs font-medium text-white mb-1.5">
            Company / Processing Plant Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            autoComplete="organization"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Royal Granites Pvt. Ltd."
            className="w-full bg-[#101112] border border-white/10 focus:border-[#C82032] text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-white mb-1.5">
            Work Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full bg-[#101112] border border-white/10 focus:border-[#C82032] text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-white mb-1.5">
            Telephone / WhatsApp Number <span className="text-[#EF4444] font-bold">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 94136 38727"
            className="w-full bg-[#101112] border border-white/10 focus:border-[#C82032] text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Country / Location */}
        <div>
          <label htmlFor="countryLocation" className="block text-xs font-medium text-white mb-1.5">
            Delivery Country &amp; City <span className="text-[#EF4444] font-bold">*</span>
          </label>
          <input
            type="text"
            id="countryLocation"
            name="countryLocation"
            required
            value={formData.countryLocation}
            onChange={handleChange}
            placeholder="e.g. Ongole, AP / Cairo, Egypt / Baku"
            className="w-full bg-[#101112] border border-white/10 focus:border-[#C82032] text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors"
          />
        </div>

        {/* Machine of Interest */}
        <div>
          <label htmlFor="machineInterest" className="block text-xs font-medium text-white mb-1.5">
            Machine Model of Interest <span className="text-[#EF4444] font-bold">*</span>
          </label>
          <select
            id="machineInterest"
            name="machineInterest"
            value={formData.machineInterest}
            onChange={handleChange}
            className="w-full bg-[#101112] border border-white/10 focus:border-[#C82032] text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors"
          >
            <optgroup label="Mono Wire Saw Machines">
              <option value="LN 2500">LN 2500 (20 HP • 2500mm Dual Flywheel • Dressing)</option>
              <option value="LN 2500 PRO">LN 2500 PRO (25 HP • 7&quot; PLC • Dressing &amp; Slicing)</option>
              <option value="LN 2500 PROMAXX">LN 2500 PROMAXX (25 HP • IoT Telemetry • Pillar Bellows)</option>
            </optgroup>
            <optgroup label="Multiwire Saw Machines">
              <option value="LN 6 Wire">LN 6 Wire (40 HP • Thick Slab 50-100mm)</option>
              <option value="LN 12 Wire (Standard)">LN 12 Wire (Standard 60 HP • 20-40mm Slabs)</option>
              <option value="LN 12 Wire (Thick Slabs)">LN 12 Wire (Thick Slabs 75 HP • 50-100mm)</option>
              <option value="LN 22 Wire">LN 22 Wire (100 HP • Flagship Slab Accuracy Master)</option>
            </optgroup>
            <optgroup label="CNC Wire Profile Machines">
              <option value="LN HORI 2100">LN HORI 2100 (20 HP • Horizontal &amp; Vertical Arc up to 20ft)</option>
              <option value="LN CNC 2100 PROMAXX">LN CNC 2100 PROMAXX (25 HP • Genuine Siemens CNC)</option>
            </optgroup>
            <optgroup label="Consumables &amp; Tooling">
              <option value="LN Diamond Wire Rope">LN Diamond Wire Rope (35 Beads/M • 11.5mm Core)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Stone Type */}
        <div>
          <label htmlFor="stoneType" className="block text-xs font-medium text-white mb-1.5">
            Primary Natural Stone Type
          </label>
          <select
            id="stoneType"
            name="stoneType"
            value={formData.stoneType}
            onChange={handleChange}
            className="w-full bg-[#101112] border border-white/10 focus:border-[#C82032] text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors"
          >
            {stoneTypes.map((stone) => (
              <option key={stone} value={stone}>{stone}</option>
            ))}
            <option value="Other Stone / Composite">Other Hard Stone / Quartzite</option>
          </select>
        </div>

        {/* Production Requirements */}
        <div>
          <label htmlFor="productionRequirement" className="block text-xs font-medium text-white mb-1.5">
            Expected Production Output / Thickness
          </label>
          <input
            type="text"
            id="productionRequirement"
            name="productionRequirement"
            value={formData.productionRequirement}
            onChange={handleChange}
            placeholder="e.g. 20mm slabs, 10 blocks/day, squaring only"
            className="w-full bg-[#101112] border border-white/10 focus:border-[#C82032] text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-white mb-1.5">
          Detailed Machine Specifications or Project Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Specify rail track extension requirements, custom trolley turntable size, voltage/frequency, or delivery port..."
          className="w-full bg-[#101112] border border-white/10 focus:border-[#C82032] text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors resize-y"
        ></textarea>
      </div>

      {/* Privacy Notice Banner */}
      <div className="flex items-center gap-2.5 p-3.5 bg-[#101112] border border-white/10 rounded-xl text-xs text-[#A7ADB5]">
        <svg className="w-4 h-4 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
        </svg>
        <span>
          <strong className="text-white">Confidentiality Guarantee:</strong> Your cutting specifications and contact details are treated with strict industrial confidentiality and used solely by LN Engineering to prepare your technical quotation.
        </span>
      </div>

      {/* Submit Button & Direct WhatsApp Alternative */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto min-h-[44px] px-8 py-3.5 bg-[#C82032] hover:bg-[#D92639] disabled:bg-[#4A4E52] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-xl shadow-lg transition-all duration-150 flex items-center justify-center gap-2 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C82032]"
        >
          {status === "submitting" ? (
            <>
              <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Processing Technical Quotation...</span>
            </>
          ) : (
            <span>Submit Quotation Request &rarr;</span>
          )}
        </button>

        <a
          href={`https://wa.me/${company.whatsapp.number}?text=${generateWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#25D366] hover:text-[#1ebe5d] font-mono inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#25D366]"
        >
          <span>Prefer direct chat? Send via WhatsApp &rarr;</span>
        </a>
      </div>
    </form>
  );
}
