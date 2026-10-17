import React from "react";
import { Metadata } from "next";
import { company } from "@/data/company";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Contact & Request a Quotation — LN Engineering Works",
  description:
    "Direct contact details for LN Engineering (L N Machineries Pvt. Ltd.): Head office in Rajsamand, Rajasthan, and South India sales offices in Ongole and Martur, Andhra Pradesh.",
};

interface ContactPageProps {
  searchParams: Promise<{
    machine?: string;
  }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialMachine = resolvedSearchParams?.machine || "";

  return (
    <div className="pt-32 sm:pt-40 pb-20 space-y-16 min-h-screen bg-[#101112]">
      {/* Top Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <Breadcrumbs items={[{ label: "Contact & Quotations" }]} />

        <div className="border-b border-[#202326] pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#191B1D] border border-[#202326] rounded-full text-xs text-[#E8E5DF]">
            <span className="w-2 h-2 rounded-full bg-[#C82032] animate-pulse"></span>
            <span className="font-mono text-[11px] uppercase tracking-wider">Direct Commercial & Technical Channels</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold uppercase text-white tracking-tight leading-tight">
            Contact & Request a Quotation
          </h1>

          <p className="text-sm sm:text-base text-[#A7ADB5] max-w-3xl leading-relaxed">
            Discuss machine pricing, custom trolley dimensions, track extensions, and site delivery with LN Engineering&apos;s technical sales team. All inquiries are reviewed by our senior machinery engineers.
          </p>
        </div>
      </div>

      {/* Main Contact Grid: Form on Left, Direct Contact Cards on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Quotation Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#191B1D] border border-[#202326] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#202326] pb-4 space-y-1">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#C82032] uppercase block">
                Machine Quotation Form
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-white tracking-tight">
                Submit Your Cutting Requirements
              </h2>
              <p className="text-xs text-[#A7ADB5]">
                Fields marked with <span className="text-[#C82032] font-bold">*</span> are required. Your details will only be used to prepare a technical proposal.
              </p>
            </div>

            <QuoteForm initialMachine={initialMachine} />
          </div>

          {/* Right Column: Direct Verified Contact Touchpoints (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Head Office Card */}
            <div className="bg-[#191B1D] border border-[#202326] rounded-2xl p-6 space-y-4 text-xs shadow-lg">
              <div className="flex items-center justify-between border-b border-[#202326] pb-3">
                <span className="font-mono text-[11px] font-semibold text-[#C82032] uppercase tracking-wider">
                  Head Office & Manufacturing Works
                </span>
                <span className="w-2 h-2 rounded-full bg-[#25D366]" title="Operating Plant"></span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold uppercase text-white mb-1">
                  {company.legalName}
                </h3>
                <p className="text-[#F5F5F5] leading-relaxed">
                  {company.address.full}
                </p>
              </div>

              <div className="pt-2 border-t border-[#202326] space-y-3">
                <div>
                  <span className="font-mono text-[#A7ADB5] uppercase text-[10px] font-semibold block">
                    Direct Telephone:
                  </span>
                  <div className="space-y-1 mt-0.5">
                    <a
                      href={`tel:${company.phones[0].number}`}
                      className="text-white hover:text-[#C82032] font-bold block text-sm font-mono transition-colors"
                    >
                      {company.phones[0].display}
                    </a>
                    <a
                      href={`tel:${company.phones[1].number}`}
                      className="text-[#E8E5DF] hover:text-[#C82032] block font-mono transition-colors"
                    >
                      {company.phones[1].display}
                    </a>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[#A7ADB5] uppercase text-[10px] font-semibold block">
                    Official Email Channels:
                  </span>
                  <div className="space-y-1 mt-0.5">
                    <a
                      href={`mailto:${company.emails[0].address}`}
                      className="text-white hover:underline block font-medium transition-colors"
                    >
                      {company.emails[0].address}
                    </a>
                    <a
                      href={`mailto:${company.emails[1].address}`}
                      className="text-[#A7ADB5] hover:underline block transition-colors"
                    >
                      {company.emails[1].address}
                    </a>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[#A7ADB5] uppercase text-[10px] font-semibold block">
                    Instant WhatsApp:
                  </span>
                  <a
                    href={`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(company.whatsapp.defaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-1 text-[#25D366] hover:underline font-semibold"
                  >
                    <span>Connect via WhatsApp (+91 94136 38727) &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* South India Sales Offices (Documented in Catalogue Page 16) */}
            <div className="bg-[#191B1D] border border-[#202326] rounded-2xl p-6 space-y-4 text-xs shadow-lg">
              <span className="font-mono text-[11px] font-semibold text-[#C82032] uppercase tracking-wider block border-b border-[#202326] pb-3">
                South India Regional Sales Offices
              </span>

              {/* Ongole */}
              <div className="space-y-1.5 border-b border-[#202326] pb-3.5">
                <span className="font-display text-base font-semibold uppercase text-white block">
                  {company.regionalContacts[0].region}
                </span>
                <p className="text-[#A7ADB5] text-[11px] leading-relaxed">
                  {company.regionalContacts[0].address}
                </p>
                <div className="pt-1">
                  <span className="text-[#6B7280]">Representative: </span>
                  <span className="text-white font-medium">{company.regionalContacts[0].contactPerson}</span>
                  {" • "}
                  <a
                    href={`tel:${company.regionalContacts[0].phone}`}
                    className="text-[#C82032] hover:underline font-mono font-bold"
                  >
                    {company.regionalContacts[0].phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Martur */}
              <div className="space-y-1.5">
                <span className="font-display text-base font-semibold uppercase text-white block">
                  {company.regionalContacts[1].region}
                </span>
                <p className="text-[#A7ADB5] text-[11px] leading-relaxed">
                  {company.regionalContacts[1].address}
                </p>
                <div className="pt-1">
                  <span className="text-[#6B7280]">Representative: </span>
                  <span className="text-white font-medium">{company.regionalContacts[1].contactPerson}</span>
                  {" • "}
                  <a
                    href={`tel:${company.regionalContacts[1].phone}`}
                    className="text-[#C82032] hover:underline font-mono font-bold"
                  >
                    {company.regionalContacts[1].phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Catalogue Download Shortcut */}
            <div className="bg-[#101112] border border-[#202326] p-5 rounded-2xl space-y-2 text-xs">
              <span className="font-display text-base font-semibold uppercase text-white block tracking-wide">
                Need Technical Catalogues Immediately?
              </span>
              <p className="text-[#A7ADB5] text-[11px] leading-relaxed">
                Download the complete 3.6 MB web catalogue or 236 MB master edition with detailed electrical ratings, motor configurations, and footprint layouts.
              </p>
              <div className="pt-1 flex flex-col gap-1.5">
                <a
                  href="/documents/ln-engineering-catalogue-optimized.pdf"
                  download
                  className="text-[#C82032] hover:underline font-medium inline-flex items-center gap-1"
                >
                  <span>Download Web Catalogue (3.6 MB PDF) &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
