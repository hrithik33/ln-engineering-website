"use client";

import React, { useState, useEffect } from "react";
import { company } from "@/data/company";

interface ModernContactFormProps {
  initialMachine?: string;
  className?: string;
}

export default function ModernContactForm({ initialMachine, className = "" }: ModernContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    enquiryType: initialMachine ? "Machinery quotation" : "Product enquiry",
    machineInterest: initialMachine || "",
    message: initialMachine
      ? `I would like to request technical specifications, commercial pricing, and delivery timeline for the ${initialMachine}.`
      : "",
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

  // Update formData if initialMachine changes dynamically
  useEffect(() => {
    if (initialMachine) {
      setFormData((prev) => ({
        ...prev,
        machineInterest: initialMachine,
        enquiryType: "Machinery quotation",
        message:
          !prev.message || prev.message.startsWith("I would like to request technical specifications")
            ? `I would like to request technical specifications, commercial pricing, and delivery timeline for the ${initialMachine}.`
            : prev.message,
      }));
    }
  }, [initialMachine]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleMachineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({
      ...prev,
      machineInterest: val,
      enquiryType: val ? "Machinery quotation" : prev.enquiryType,
      message:
        !prev.message || prev.message.startsWith("I would like to request technical specifications")
          ? val
            ? `I would like to request technical specifications, commercial pricing, and delivery timeline for the ${val}.`
            : ""
          : prev.message,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      setStatus("error");
      return;
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    if (formData.phone.trim() && formData.phone.replace(/\D/g, "").length < 7) {
      setErrorMessage("Please enter a valid phone number (minimum 7 digits).");
      setStatus("error");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setErrorMessage("Please enter your message or project requirements (minimum 5 characters).");
      setStatus("error");
      return;
    }

    try {
      const payload = {
        name: formData.name.trim(),
        companyName: formData.companyName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        enquiryType: formData.enquiryType,
        machineInterest: formData.machineInterest || initialMachine || "General Stone Machinery",
        message: formData.message.trim(),
        botField: formData.botField,
        _formLoadedAt: formLoadedAt,
      };

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit enquiry. Please try again.");
      }

      if (result.duplicate) {
        setReferenceId(result.referenceId);
        setStatus("duplicate");
        return;
      }

      setReferenceId(result.referenceId || "LN-ENQ-SUCCESS");
      setEmailDispatched(Boolean(result.delivery?.emailDispatched));
      setStatus("success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again or use direct WhatsApp.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `*LN Engineering Enquiry*\n*Ref ID:* ${referenceId || "Direct Web Lead"}\n*Name:* ${formData.name || "Customer"}\n*Company:* ${formData.companyName || "N/A"}\n*Machine Interest:* ${formData.machineInterest || "General Stone Machinery"}\n*Enquiry Type:* ${formData.enquiryType}\n*Email:* ${formData.email || "N/A"}\n*Phone:* ${formData.phone || "N/A"}\n*Message:* ${formData.message || "Please provide machinery quotation."}`;
    return encodeURIComponent(text);
  };

  if (status === "success") {
    return (
      <div className="bg-[#121417] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center space-y-6 shadow-2xl animate-fadeIn">
        <div className="w-16 h-16 bg-[#C82032]/10 text-[#EF4444] border border-[#EF4444]/30 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-[#EF4444]/10">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-[#EF4444] uppercase font-mono block">
            Enquiry Successfully Dispatched
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Thank You, {formData.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-md mx-auto leading-relaxed">
            Your enquiry has been logged in our sales desk under Reference ID:{" "}
            <code className="text-white bg-[#0A0B0D] border border-white/15 px-2.5 py-1 rounded-md font-mono text-xs inline-block mt-1 font-bold">
              {referenceId}
            </code>
          </p>
        </div>

        <div className="bg-[#0A0B0D] p-5 rounded-xl text-left text-xs space-y-2.5 max-w-md mx-auto border border-white/10">
          <div className="text-zinc-400 uppercase tracking-wider font-semibold text-[10px] font-mono flex items-center justify-between border-b border-white/5 pb-2">
            <span>Enquiry Overview</span>
            <span className="text-[#EF4444] font-bold">{formData.enquiryType}</span>
          </div>
          <div className="text-white font-medium truncate">
            {formData.companyName ? `${formData.companyName} • ` : ""}{formData.name}
          </div>
          {formData.machineInterest && (
            <div className="text-zinc-300 text-[11px] font-mono flex items-center gap-1.5 pt-0.5">
              <span className="text-[#EF4444]">Machine Model:</span>
              <span className="text-white font-semibold">{formData.machineInterest}</span>
            </div>
          )}
          <div className="text-[#A7ADB5] font-mono text-[11px]">
            {formData.email} {formData.phone ? `• ${formData.phone}` : ""}
          </div>
          {emailDispatched ? (
            <div className="text-[#25D366] text-[11px] pt-1.5 flex items-center gap-1.5 border-t border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
              <span>Direct notification dispatched to LN Engineering sales engineers.</span>
            </div>
          ) : (
            <div className="text-zinc-400 text-[11px] pt-1.5 flex items-center gap-1.5 border-t border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Logged in factory sales registry. Direct engineer review within 1 business day.</span>
            </div>
          )}
        </div>

        <p className="text-xs text-[#A7ADB5] max-w-md mx-auto leading-relaxed">
          Our engineering team at the Rajsamand manufacturing works will review your project details and prepare a technical proposal.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${company.whatsapp.number}?text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl transition-colors shadow-lg shadow-[#25D366]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            <span>Forward to WhatsApp &rarr;</span>
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
                enquiryType: "Product enquiry",
                machineInterest: "",
                message: "",
                botField: "",
              });
            }}
            className="w-full sm:w-auto px-5 py-3.5 text-xs font-medium text-[#A7ADB5] hover:text-white border border-white/10 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div className="bg-[#121417] border border-amber-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center space-y-6 shadow-2xl animate-fadeIn">
        <div className="w-16 h-16 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full mx-auto flex items-center justify-center">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-mono block">
            Recent Enquiry Under Review
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight">We Already Have Your Details</h3>
          <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-md mx-auto leading-relaxed">
            An inquiry for <strong className="text-white">{formData.machineInterest || formData.enquiryType}</strong> was recently submitted under Reference ID:{" "}
            <code className="text-white bg-[#0A0B0D] border border-white/10 px-2.5 py-1 rounded-md font-mono text-xs inline-block mt-1 font-bold">
              {referenceId}
            </code>
          </p>
        </div>

        <p className="text-xs text-[#A7ADB5] max-w-md mx-auto leading-relaxed">
          Our engineering team is currently reviewing your project details. If your request is urgent, please connect directly with our technical sales desk via WhatsApp.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${company.whatsapp.number}?text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            <span>Connect on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="w-full sm:w-auto px-5 py-3.5 text-xs font-medium text-[#A7ADB5] hover:text-white border border-white/10 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Edit Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-[#121417]/95 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl space-y-6 ${className}`}>
      {/* Form Panel Header */}
      <div className="space-y-1.5 border-b border-white/5 pb-5">
        <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
          SEND US AN ENQUIRY
        </h2>
        <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
          Tell us about your stone slicing or processing machinery requirements. Our engineering desk will prepare a technical proposal and quotation.
        </p>
      </div>

      {/* Selected Model Indicator Banner */}
      {formData.machineInterest && (
        <div className="p-3.5 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse shrink-0" />
            <div>
              <span className="text-zinc-400 font-mono text-[11px] block">Quotation Requested For:</span>
              <span className="text-white font-semibold font-display uppercase tracking-wide">
                {formData.machineInterest}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                machineInterest: "",
                message: "",
              }))
            }
            className="text-[11px] font-mono text-zinc-400 hover:text-white underline ml-3 shrink-0"
          >
            Clear / Select Other
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Anti-spam honeypot */}
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

        {/* Error Notice */}
        {status === "error" && (
          <div className="p-4 bg-red-950/40 border border-red-700/60 rounded-xl text-red-200 text-xs flex items-start gap-3">
            <svg className="w-5 h-5 flex-shrink-0 text-[#EF4444] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div className="space-y-1">
              <span className="font-semibold block text-white">Please check your entries:</span>
              <p>{errorMessage}</p>
            </div>
          </div>
        )}

        {/* 1. Full name & 2. Company name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
              Full Name <span className="text-[#EF4444]">*</span>
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
              className="w-full bg-[#0A0B0D] border border-white/10 hover:border-white/20 focus:border-[#C82032] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors placeholder:text-zinc-600"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-2">
              Company Name <span className="text-zinc-600 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              autoComplete="organization"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Precision Stone Works Ltd."
              className="w-full bg-[#0A0B0D] border border-white/10 hover:border-white/20 focus:border-[#C82032] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors placeholder:text-zinc-600"
            />
          </div>
        </div>

        {/* 3. Email address & 4. Phone number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
              Email Address <span className="text-[#EF4444]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full bg-[#0A0B0D] border border-white/10 hover:border-white/20 focus:border-[#C82032] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors placeholder:text-zinc-600"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-2">
              Phone Number <span className="text-zinc-600 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 94136 38727"
              className="w-full bg-[#0A0B0D] border border-white/10 hover:border-white/20 focus:border-[#C82032] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors placeholder:text-zinc-600"
            />
          </div>
        </div>

        {/* 5. Enquiry Type & 6. Machine Model Interest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="enquiryType" className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
              Enquiry Type <span className="text-[#EF4444]">*</span>
            </label>
            <div className="relative">
              <select
                id="enquiryType"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className="w-full bg-[#0A0B0D] border border-white/10 hover:border-white/20 focus:border-[#C82032] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors appearance-none pr-10"
              >
                <option value="Machinery quotation">Machinery quotation</option>
                <option value="Product enquiry">Product enquiry</option>
                <option value="Technical support">Technical support</option>
                <option value="Service request">Service request</option>
                <option value="Spare parts">Spare parts</option>
                <option value="Tooling & Consumables">Tooling &amp; Consumables</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-zinc-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="machineInterest" className="block text-xs font-mono uppercase tracking-wider text-[#A7ADB5] mb-2">
              Machine Model Interest <span className="text-zinc-600 font-normal lowercase">(optional)</span>
            </label>
            <div className="relative">
              <select
                id="machineInterest"
                name="machineInterest"
                value={formData.machineInterest}
                onChange={handleMachineChange}
                className="w-full bg-[#0A0B0D] border border-white/10 hover:border-white/20 focus:border-[#C82032] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors appearance-none pr-10"
              >
                <option value="">General Stone Machinery / Unspecified</option>
                <optgroup label="Mono Wire Saw Machines">
                  <option value="LN 2500 Mono Wire Saw">LN 2500 Mono Wire Saw (Base)</option>
                  <option value="LN 2500 PRO Mono Wire Saw">LN 2500 PRO Mono Wire Saw (PLC)</option>
                  <option value="LN 2500 PROMAXX Mono Wire Saw">LN 2500 PROMAXX Mono Wire Saw (Flagship + IoT)</option>
                </optgroup>
                <optgroup label="Multiwire Gangsaw Machines">
                  <option value="LN 6 Wire Multiwire Saw">LN 6 Wire Multiwire Gangsaw (Thick Slab)</option>
                  <option value="LN 12 Wire Multiwire Saw">LN 12 Wire Multiwire Gangsaw (Commercial Benchmark)</option>
                  <option value="LN 22 Wire Multiwire Saw">LN 22 Wire Multiwire Gangsaw (High Yield Flagship)</option>
                </optgroup>
                <optgroup label="CNC Wire Profile Machines">
                  <option value="LN HORI 2100">LN HORI 2100 (Arc Cutting up to 20 Ft)</option>
                  <option value="LN CNC 2100 PROMAXX">LN CNC 2100 PROMAXX (Siemens CNC Contouring)</option>
                </optgroup>
                <optgroup label="Diamond Wire Rope & Tooling">
                  <option value="LN Diamond Wire Rope">LN Diamond Wire Rope (35 Beads/M)</option>
                  <option value="LN Diamond Wire Rope (Granite Sintered)">LN Diamond Wire Rope (Granite Sintered)</option>
                  <option value="LN Diamond Wire Rope (Marble Electroplated)">LN Diamond Wire Rope (Marble Electroplated)</option>
                  <option value="LN Diamond Wire Rope (Multiwire Thin Kerf)">LN Diamond Wire Rope (Multiwire Thin Kerf)</option>
                </optgroup>
                <optgroup label="Plant & Custom Engineering">
                  <option value="Turnkey Stone Processing Line">Turnkey Stone Processing Line</option>
                  <option value="Custom 50-Tonne Revolving Trolley">Custom 50-Tonne Revolving Trolley</option>
                </optgroup>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-zinc-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
            Message <span className="text-[#EF4444]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your cutting requirements, stone variety (granite/marble), production targets, or required machinery parameters..."
            className="w-full bg-[#0A0B0D] border border-white/10 hover:border-white/20 focus:border-[#C82032] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C82032] transition-colors resize-y placeholder:text-zinc-600"
          ></textarea>
        </div>

        {/* Prominent Red Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full min-h-[48px] py-4 px-8 bg-[#C82032] hover:bg-[#D92639] disabled:bg-zinc-700 disabled:cursor-not-allowed text-white font-sans font-bold text-xs uppercase tracking-[0.16em] rounded-xl shadow-xl shadow-[#C82032]/25 hover:shadow-[#C82032]/40 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121417]"
          >
            {status === "submitting" ? (
              <>
                <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>SENDING ENQUIRY...</span>
              </>
            ) : (
              <span>SEND ENQUIRY</span>
            )}
          </button>
        </div>

        <p className="text-[11px] text-zinc-500 text-center leading-relaxed max-w-lg mx-auto">
          By submitting this form, you consent to LN Engineering collecting and using your business contact details solely to respond to your enquiry, prepare technical proposals, and provide product information. Your details will not be shared with third parties. For questions about your data, contact{" "}
          <a href="mailto:info@gangsawmachines.com" className="text-zinc-400 hover:text-white underline">info@gangsawmachines.com</a>.
        </p>
      </form>
    </div>
  );
}
