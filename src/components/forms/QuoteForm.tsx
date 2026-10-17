"use client";

import React, { useState } from "react";
import { company, stoneTypes } from "@/data/company";
import { getAllProducts } from "@/data/products";

interface QuoteFormProps {
  initialMachine?: string;
  onSuccess?: () => void;
  className?: string;
}

export default function QuoteForm({ initialMachine, onSuccess, className = "" }: QuoteFormProps) {
  const products = getAllProducts();

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    countryLocation: "",
    machineInterest: initialMachine || products[0]?.name || "Mono Wire Saw Machine",
    stoneType: "Granite",
    productionRequirement: "",
    message: "",
    botField: "", // Anti-spam honeypot
  });

  const [formLoadedAt, setFormLoadedAt] = useState<number>(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "duplicate" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  React.useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

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
      setStatus("success");
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again or use direct WhatsApp.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Machine Enquiry*\n*Name:* ${formData.name}\n*Company:* ${formData.companyName || "N/A"}\n*Phone:* ${formData.phone}\n*Location:* ${formData.countryLocation}\n*Machine:* ${formData.machineInterest}\n*Stone:* ${formData.stoneType}\n*Details:* ${formData.productionRequirement || formData.message || "Requesting pricing & specs"}`;
    return encodeURIComponent(text);
  };

  if (status === "success") {
    return (
      <div className="bg-[#191B1D] border border-[#202326] rounded-lg p-8 text-center space-y-5 animate-fadeIn">
        <div className="w-14 h-14 bg-[#C82032]/10 text-[#C82032] rounded-full mx-auto flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-[#C82032] uppercase">
            Enquiry Successfully Queued
          </span>
          <h3 className="text-2xl font-semibold text-white">Thank You, {formData.name}</h3>
          <p className="text-sm text-[#A7ADB5] max-w-md mx-auto">
            Your quotation request for <strong className="text-white">{formData.machineInterest}</strong> has been logged under Reference ID:{" "}
            <code className="text-[#E8E5DF] bg-[#202326] px-2 py-0.5 rounded font-mono text-xs">{referenceId}</code>.
          </p>
        </div>

        <div className="bg-[#151719] p-4 rounded text-left text-xs space-y-1.5 max-w-md mx-auto border border-[#202326]">
          <div className="text-[#6B7280] uppercase tracking-wider font-semibold text-[10px]">Submitted Specification</div>
          <div className="text-white font-medium">{formData.machineInterest} • {formData.stoneType}</div>
          <div className="text-[#A7ADB5]">Contact: {formData.phone || formData.email} • {formData.countryLocation}</div>
        </div>

        <p className="text-xs text-[#A7ADB5]">
          Our senior technical engineer will review your cutting requirements and deliver a formal quotation within 24 business hours.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/${company.whatsapp.number}?text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded transition-colors"
          >
            <span>Send Direct via WhatsApp</span>
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
                machineInterest: initialMachine || products[0]?.name || "Mono Wire Saw Machine",
                stoneType: "Granite",
                productionRequirement: "",
                message: "",
                botField: "",
              });
            }}
            className="px-4 py-2 text-xs font-medium text-[#A7ADB5] hover:text-white border border-[#202326] rounded"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div className="bg-[#191B1D] border border-[#202326] rounded-lg p-8 text-center space-y-5 animate-fadeIn">
        <div className="w-14 h-14 bg-amber-500/10 text-amber-400 rounded-full mx-auto flex items-center justify-center">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
            Active Enquiry Already in Review
          </span>
          <h3 className="text-2xl font-semibold text-white">We Already Have Your Request</h3>
          <p className="text-sm text-[#A7ADB5] max-w-md mx-auto">
            A quotation request for <strong className="text-white">{formData.machineInterest}</strong> was recently submitted under Reference ID:{" "}
            <code className="text-[#E8E5DF] bg-[#202326] px-2 py-0.5 rounded font-mono text-xs">{referenceId}</code>.
          </p>
        </div>

        <p className="text-xs text-[#A7ADB5]">
          To avoid duplicate proposals, our engineering department is already reviewing your technical parameters. If you need immediate revision, please connect via WhatsApp or telephone directly.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/${company.whatsapp.number}?text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded transition-colors"
          >
            <span>Chat on WhatsApp Directly</span>
          </a>

          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-4 py-2 text-xs font-medium text-[#A7ADB5] hover:text-white border border-[#202326] rounded"
          >
            Edit Enquiry Details
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
        <div className="p-4 bg-red-900/30 border border-red-700/60 rounded text-red-200 text-xs flex items-start gap-3">
          <svg className="w-5 h-5 flex-shrink-0 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <span className="font-semibold block">Submission Error:</span>
            <span>{errorMessage}</span>
            <div className="mt-2">
              <a
                href={`https://wa.me/${company.whatsapp.number}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-medium inline-block"
              >
                Send directly via WhatsApp instead &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-[#F5F5F5] mb-1">
            Full Name <span className="text-[#C82032]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Patel / John Meyer"
            className="w-full bg-[#151719] border border-[#202326] focus:border-[#C82032] text-white rounded px-3 py-2 text-sm focus:outline-none transition-colors"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="companyName" className="block text-xs font-medium text-[#F5F5F5] mb-1">
            Company / Processing Plant Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Royal Granites Pvt. Ltd."
            className="w-full bg-[#151719] border border-[#202326] focus:border-[#C82032] text-white rounded px-3 py-2 text-sm focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[#F5F5F5] mb-1">
            Work Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full bg-[#151719] border border-[#202326] focus:border-[#C82032] text-white rounded px-3 py-2 text-sm focus:outline-none transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-[#F5F5F5] mb-1">
            Telephone / Mobile Number <span className="text-[#C82032]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full bg-[#151719] border border-[#202326] focus:border-[#C82032] text-white rounded px-3 py-2 text-sm focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Country / Location */}
        <div>
          <label htmlFor="countryLocation" className="block text-xs font-medium text-[#F5F5F5] mb-1">
            Country & City / Processing Hub <span className="text-[#C82032]">*</span>
          </label>
          <input
            type="text"
            id="countryLocation"
            name="countryLocation"
            required
            value={formData.countryLocation}
            onChange={handleChange}
            placeholder="e.g. Ongole, AP, India or Cairo, Egypt"
            className="w-full bg-[#151719] border border-[#202326] focus:border-[#C82032] text-white rounded px-3 py-2 text-sm focus:outline-none transition-colors"
          />
        </div>

        {/* Machine of Interest */}
        <div>
          <label htmlFor="machineInterest" className="block text-xs font-medium text-[#F5F5F5] mb-1">
            Machine Model of Interest <span className="text-[#C82032]">*</span>
          </label>
          <select
            id="machineInterest"
            name="machineInterest"
            value={formData.machineInterest}
            onChange={handleChange}
            className="w-full bg-[#151719] border border-[#202326] focus:border-[#C82032] text-white rounded px-3 py-2 text-sm focus:outline-none transition-colors"
          >
            <optgroup label="Mono Wire Saw Machines">
              <option value="LN 2500">LN 2500 (20 HP • Dressing)</option>
              <option value="LN 2500 PRO">LN 2500 PRO (25 HP • PLC • Slab Cut)</option>
              <option value="LN 2500 PROMAXX">LN 2500 PROMAXX (25 HP • IoT • Bellows)</option>
            </optgroup>
            <optgroup label="Multiwire Saw Machines">
              <option value="LN 6 Wire">LN 6 Wire (40 HP • Thick Slab 50-100mm)</option>
              <option value="LN 12 Wire (Standard)">LN 12 Wire (60 HP • 20-40mm Slabs)</option>
              <option value="LN 12 Wire (Thick Slabs)">LN 12 Wire (75 HP • Thick Slabs 50-100mm)</option>
              <option value="LN 22 Wire">LN 22 Wire (100 HP • Slab Accuracy Master)</option>
            </optgroup>
            <optgroup label="CNC Wire Profile Machines">
              <option value="LN HORI 2100">LN HORI 2100 (20 HP • Horizontal/Vertical Arc)</option>
              <option value="LN CNC 2100 PROMAXX">LN CNC 2100 PROMAXX (25 HP • Siemens CNC)</option>
            </optgroup>
            <optgroup label="Consumables">
              <option value="LN Diamond Wire Rope">LN Diamond Wire Rope (35 Beads/M • 11.5mm)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Stone Type */}
        <div>
          <label htmlFor="stoneType" className="block text-xs font-medium text-[#F5F5F5] mb-1">
            Primary Natural Stone Type
          </label>
          <select
            id="stoneType"
            name="stoneType"
            value={formData.stoneType}
            onChange={handleChange}
            className="w-full bg-[#151719] border border-[#202326] focus:border-[#C82032] text-white rounded px-3 py-2 text-sm focus:outline-none transition-colors"
          >
            {stoneTypes.map((stone) => (
              <option key={stone} value={stone}>{stone}</option>
            ))}
            <option value="Other Stone / Composite">Other Stone / Composite</option>
          </select>
        </div>

        {/* Production Requirements */}
        <div>
          <label htmlFor="productionRequirement" className="block text-xs font-medium text-[#F5F5F5] mb-1">
            Expected Production Output / Thickness
          </label>
          <input
            type="text"
            id="productionRequirement"
            name="productionRequirement"
            value={formData.productionRequirement}
            onChange={handleChange}
            placeholder="e.g. 20mm slabs, 15 blocks/day, dressing only"
            className="w-full bg-[#151719] border border-[#202326] focus:border-[#C82032] text-white rounded px-3 py-2 text-sm focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#F5F5F5] mb-1">
          Detailed Machine Specifications or Project Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Specify delivery destination, site power conditions, custom trolley needs, or wire requirements..."
          className="w-full bg-[#151719] border border-[#202326] focus:border-[#C82032] text-white rounded px-3 py-2 text-sm focus:outline-none transition-colors resize-y"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#C82032] hover:bg-[#E02D40] disabled:bg-[#4A4E52] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-xl shadow-lg transition-all duration-150 flex items-center justify-center gap-2 active:scale-95"
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

        <span className="text-[11px] text-[#6B7280]">
          * No obligation. Verified direct engineering response.
        </span>
      </div>
    </form>
  );
}
