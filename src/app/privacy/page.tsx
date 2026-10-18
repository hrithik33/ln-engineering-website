import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Notice & Data Usage Policy — LN Engineering",
  description:
    "Data protection policy, enquiry processing practices, and commercial confidentiality standards for LN Engineering (L N Machineries Pvt. Ltd.).",
  alternates: {
    canonical: "https://www.gangsawmachines.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 sm:pt-40 pb-20 min-h-screen bg-[#0A0B0D] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
        <Breadcrumbs items={[{ label: "Privacy Notice" }]} />

        <div className="border-b border-white/10 pb-8 space-y-3">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#EF4444] uppercase block">
            Commercial Data Governance
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Privacy Notice &amp; Data Usage
          </h1>
          <p className="text-sm text-[#A7ADB5] leading-relaxed">
            Effective Date: October 2026 • Published by {company.legalName} ({company.name})
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#A7ADB5] leading-relaxed">
          <section className="space-y-3 bg-[#131518] border border-white/10 p-6 rounded-2xl">
            <h2 className="font-display text-lg font-bold uppercase text-white tracking-wide">
              1. Information We Collect
            </h2>
            <p>
              LN Engineering collects only the professional business information voluntarily submitted through our website enquiry forms, email channels, and direct phone lines. This includes:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-300 font-mono text-xs">
              <li>Full Name &amp; Designation</li>
              <li>Company / Enterprise Name</li>
              <li>Business Email Address &amp; Contact Telephone Number</li>
              <li>Machinery Requirements, Stone Varieties &amp; Cutting Specifications</li>
              <li>Installation Site Location &amp; Country</li>
            </ul>
          </section>

          <section className="space-y-3 bg-[#131518] border border-white/10 p-6 rounded-2xl">
            <h2 className="font-display text-lg font-bold uppercase text-white tracking-wide">
              2. How We Use Your Commercial Data
            </h2>
            <p>
              Your contact details and cutting requirements are used solely by LN Engineering technical sales engineers to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-300 font-mono text-xs">
              <li>Review your technical stone cutting parameters and block sizing</li>
              <li>Prepare and issue formal engineering proposals, GA drawings, and price quotations</li>
              <li>Coordinate after-sales service, spare parts dispatch, and field commissioning</li>
              <li>Provide direct WhatsApp or telephonic technical consultations upon request</li>
            </ul>
          </section>

          <section className="space-y-3 bg-[#131518] border border-white/10 p-6 rounded-2xl">
            <h2 className="font-display text-lg font-bold uppercase text-white tracking-wide">
              3. Strict Industrial Confidentiality
            </h2>
            <p>
              LN Engineering enforces strict industrial confidentiality. We <strong className="text-white">never sell, rent, lease, or monetize</strong> your business contact information or stone cutting project parameters to third parties or marketing networks. Information is handled strictly internally within our Rajsamand manufacturing works and designated regional sales offices.
            </p>
          </section>

          <section className="space-y-3 bg-[#131518] border border-white/10 p-6 rounded-2xl">
            <h2 className="font-display text-lg font-bold uppercase text-white tracking-wide">
              4. Data Retention &amp; Your Rights
            </h2>
            <p>
              Commercial enquiry records are retained for historical proposal references and machinery warranty tracking. You may at any time request the review, update, or deletion of your contact records from our sales databases by contacting our compliance desk.
            </p>
          </section>

          <section className="space-y-3 bg-[#131518] border border-white/10 p-6 rounded-2xl">
            <h2 className="font-display text-lg font-bold uppercase text-white tracking-wide">
              5. Contact Our Data Compliance Desk
            </h2>
            <p>
              For data protection inquiries or to update your business preferences, please write to us at:
            </p>
            <div className="pt-2 font-mono text-xs text-white space-y-1">
              <div>Email: <a href="mailto:info@gangsawmachines.com" className="text-[#EF4444] hover:underline">info@gangsawmachines.com</a></div>
              <div>Postal: {company.address.full}</div>
              <div>Telephone: {company.phones[0].display}</div>
            </div>
          </section>

          <div className="pt-4 flex items-center justify-between border-t border-white/10 text-xs font-mono">
            <Link href="/contact" className="text-[#EF4444] hover:underline">
              &larr; Return to Contact Desk
            </Link>
            <Link href="/" className="text-zinc-400 hover:text-white">
              Homepage &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
