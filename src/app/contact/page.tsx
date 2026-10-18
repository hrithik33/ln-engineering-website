import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { company } from "@/data/company";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ModernContactForm from "@/components/forms/ModernContactForm";

export const metadata: Metadata = {
  title: "Contact LN Engineering — Stone Processing Machinery & Quotations",
  description:
    "Connect with LN Engineering (L N Machineries Pvt. Ltd.) for high-precision mono wire saws, multiwire gangsaws, CNC wire profilers, and diamond wire rope. Head office and plant in Rajsamand, Rajasthan, with regional sales hubs in Ongole and Martur.",
  alternates: {
    canonical: "https://www.gangsawmachines.com/contact",
  },
  openGraph: {
    title: "Contact LN Engineering — Let's Build Something Precise",
    description:
      "Direct technical and commercial sales contact for LN Engineering stone processing machinery. Head plant in Rajsamand, Rajasthan.",
    url: "https://www.gangsawmachines.com/contact",
    siteName: "LN Engineering",
    images: ["/images/about/precision-stone-processing-machine.webp"],
    locale: "en_IN",
    type: "website",
  },
};

interface ContactPageProps {
  searchParams: Promise<{
    machine?: string;
  }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialMachine = resolvedSearchParams?.machine || "";

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "LN Engineering Contact & Quotation Desk",
    url: "https://www.gangsawmachines.com/contact",
    description:
      "Request technical proposals, stone machinery quotations, and connect with LN Engineering senior machine planners.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: company.legalName,
      alternateName: company.name,
      telephone: company.phones[0].number,
      email: company.emails[0].address,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.pincode,
        addressCountry: "IN",
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#0A0B0D] text-white selection:bg-[#C82032] selection:text-white">
      {/* ContactPage Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ========================================================================= */}
      {/* HERO SECTION — Cinematic Industrial Banner + Oversized Background Typography */}
      {/* ========================================================================= */}
      <header className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-white/10 bg-[#0E1013]">
        {/* Cinematic Industrial Background Image Banner (treated darkly) */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/about/precision-stone-processing-machine.webp"
            alt="LN Engineering precision manufacturing floor and heavy gantry machinery"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-15 filter grayscale contrast-125"
          />
          {/* Deep dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D]/85 via-[#0E1013]/90 to-[#0A0B0D]" />
          {/* Subtle industrial red glow aura */}
          <div
            aria-hidden="true"
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-[#C82032]/15 blur-[140px] rounded-full pointer-events-none"
          />
        </div>

        {/* Giant Low-Contrast Background Typography: CONTACT */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] sm:text-[18vw] font-black uppercase tracking-tighter text-white/[0.03] select-none pointer-events-none font-display z-0 leading-none"
        >
          CONTACT
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />

          <div className="space-y-4 max-w-3xl">
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs">
              <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#E8E5DF] font-medium">
                CONTACT LN ENGINEERING
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.05]">
              LET&apos;S BUILD SOMETHING PRECISE.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#A7ADB5] leading-relaxed">
              Connect with our team for stone-processing machinery, product enquiries, technical support, and service assistance.
            </p>
          </div>

          {/* Value Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-[#A7ADB5]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
              <span>Direct Machinery Engineers</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              <span>Response Within 24 Hours</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>India & Global Export Support</span>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MAIN TWO-COLUMN SECTION — Contact Cards (Left) & Enquiry Form (Right) */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-20">
        {/* Subtle grid pattern background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* --------------------------------------------------------------------- */}
            {/* LEFT COLUMN: Glass-style Outlined Contact Cards (5 Cols) */}
            {/* --------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Card 1: Call us */}
              <div className="group relative bg-[#131518]/90 hover:bg-[#181B1F] border border-white/10 hover:border-[#EF4444]/40 rounded-2xl p-6 transition-all duration-300 shadow-xl backdrop-blur-md">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#EF4444]/40 group-hover:bg-[#C82032]/10 flex items-center justify-center text-white group-hover:text-[#EF4444] transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href={`tel:${company.phones[0].number}`}
                    aria-label={`Call ${company.phones[0].display}`}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors"
                  >
                    <span className="text-sm font-sans">&nearr;</span>
                  </a>
                </div>

                <div className="mt-4 space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EF4444] font-semibold block">
                    Call us
                  </span>
                  <p className="text-xs text-[#A7ADB5]">
                    Direct phone lines for technical sales, spares, and plant operations.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase">Primary / Sales</span>
                    <a
                      href={`tel:${company.phones[0].number}`}
                      className="font-mono text-sm font-semibold text-white hover:text-[#EF4444] transition-colors"
                    >
                      {company.phones[0].display}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase">Plant Operations</span>
                    <a
                      href={`tel:${company.phones[1].number}`}
                      className="font-mono text-sm text-[#E8E5DF] hover:text-[#EF4444] transition-colors"
                    >
                      {company.phones[1].display}
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Email us */}
              <div className="group relative bg-[#131518]/90 hover:bg-[#181B1F] border border-white/10 hover:border-[#EF4444]/40 rounded-2xl p-6 transition-all duration-300 shadow-xl backdrop-blur-md">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#EF4444]/40 group-hover:bg-[#C82032]/10 flex items-center justify-center text-white group-hover:text-[#EF4444] transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <a
                    href={`mailto:${company.emails[0].address}`}
                    aria-label={`Send email to ${company.emails[0].address}`}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors"
                  >
                    <span className="text-sm font-sans">&nearr;</span>
                  </a>
                </div>

                <div className="mt-4 space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EF4444] font-semibold block">
                    Email us
                  </span>
                  <p className="text-xs text-[#A7ADB5]">
                    Send drawings, project RFQs, and commercial quotations.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase">General & RFQ</span>
                    <a
                      href={`mailto:${company.emails[0].address}`}
                      className="font-mono text-xs sm:text-sm font-semibold text-white hover:text-[#EF4444] transition-colors break-all"
                    >
                      {company.emails[0].address}
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase">Executive Plant Desk</span>
                    <a
                      href={`mailto:${company.emails[1].address}`}
                      className="font-mono text-xs sm:text-sm text-[#E8E5DF] hover:text-[#EF4444] transition-colors break-all"
                    >
                      {company.emails[1].address}
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Visit us */}
              <div className="group relative bg-[#131518]/90 hover:bg-[#181B1F] border border-white/10 hover:border-[#EF4444]/40 rounded-2xl p-6 transition-all duration-300 shadow-xl backdrop-blur-md">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#EF4444]/40 group-hover:bg-[#C82032]/10 flex items-center justify-center text-white group-hover:text-[#EF4444] transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <a
                    href={company.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View LN Engineering on Google Maps"
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors"
                  >
                    <span className="text-sm font-sans">&nearr;</span>
                  </a>
                </div>

                <div className="mt-4 space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#EF4444] font-semibold block">
                    Visit us
                  </span>
                  <h3 className="font-display text-base font-bold uppercase text-white">
                    {company.legalName}
                  </h3>
                  <p className="text-xs text-[#A7ADB5] leading-relaxed pt-1">
                    {company.address.full}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">
                    Factory &amp; Head Office
                  </span>
                  <a
                    href={company.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#EF4444] hover:underline"
                  >
                    <span>Get Directions &nearr;</span>
                  </a>
                </div>
              </div>

              {/* Card 4: South India Regional Touchpoints */}
              <div className="bg-[#101215]/80 border border-white/10 rounded-2xl p-5 space-y-3.5 backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                  <span className="font-mono text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    South India Sales Hubs
                  </span>
                  <span className="text-[10px] font-mono text-[#EF4444] bg-[#EF4444]/10 border border-[#EF4444]/20 px-2 py-0.5 rounded">
                    Field Representatives
                  </span>
                </div>

                {/* Ongole */}
                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-white font-semibold">Ongole, Andhra Pradesh</span>
                    <a
                      href={`tel:${company.regionalContacts[0].phone}`}
                      className="text-[#EF4444] hover:underline font-mono"
                    >
                      {company.regionalContacts[0].phoneDisplay}
                    </a>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Rep: {company.regionalContacts[0].contactPerson} • {company.regionalContacts[0].address}
                  </p>
                </div>

                {/* Martur */}
                <div className="space-y-1 text-xs pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-white font-semibold">Martur, Bapatla District</span>
                    <a
                      href={`tel:${company.regionalContacts[1].phone}`}
                      className="text-[#EF4444] hover:underline font-mono"
                    >
                      {company.regionalContacts[1].phoneDisplay}
                    </a>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Rep: {company.regionalContacts[1].contactPerson} • {company.regionalContacts[1].address}
                  </p>
                </div>
              </div>

            </div>

            {/* --------------------------------------------------------------------- */}
            {/* RIGHT COLUMN: Modern Contact Form (7 Cols) */}
            {/* --------------------------------------------------------------------- */}
            <div className="lg:col-span-7">
              <ModernContactForm initialMachine={initialMachine} />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LOCATION MAP SECTION — Inspired by Reference 1 */}
      {/* ========================================================================= */}
      <section className="relative py-16 border-t border-white/10 bg-[#0C0E11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#EF4444] font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                <span>Head Office &amp; Manufacturing Plant</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
                FIND US
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-xl leading-relaxed">
                {company.address.street}, {company.address.city} ({company.address.district}), {company.address.state}, {company.address.country} - {company.address.pincode}
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href={company.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-white/[0.05] hover:bg-[#C82032] border border-white/15 hover:border-[#C82032] rounded-xl transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]"
              >
                <span>GET DIRECTIONS</span>
                <span className="text-sm font-sans">&nearr;</span>
              </a>
            </div>
          </div>

          {/* Map Frame */}
          <div className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#141517] group">
            <iframe
              title="LN Engineering Manufacturing Works Location Map in Rajsamand"
              src="https://maps.google.com/maps?q=LN+Engineering+Mokhampura+Rajsamand+Rajasthan+313326&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full border-0 filter grayscale contrast-125 opacity-85 group-hover:opacity-100 group-hover:filter-none transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 pointer-events-none">
              <div className="bg-[#0A0B0D]/90 backdrop-blur-md border border-white/15 p-4 rounded-xl max-w-md shadow-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                    Operating Heavy Engineering Facility
                  </span>
                </div>
                <h4 className="font-display text-sm font-bold uppercase text-white">
                  {company.legalName}
                </h4>
                <p className="text-[11px] text-[#A7ADB5] mt-0.5">
                  National Highway 8, Mokhampura, Rajsamand (Rajasthan)
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SOCIAL & CONNECT SECTION — Inspired by Reference 1 */}
      {/* ========================================================================= */}
      <section className="relative py-16 border-t border-white/10 bg-[#0A0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          
          <div className="space-y-1">
            <span className="font-mono text-xs font-semibold text-[#EF4444] uppercase tracking-widest block">
              Direct Communication Channels
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
              CONNECT WITH US
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-2xl leading-relaxed">
              Stay connected through official communication channels, machinery installation updates, and technical documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(company.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-[#121417] hover:bg-[#16181C] border border-white/10 hover:border-[#25D366]/50 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg hover:shadow-[#25D366]/10"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#25D366]/50 group-hover:bg-[#25D366]/10 flex items-center justify-center text-white group-hover:text-[#25D366] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.78 14.15c-.24.68-1.39 1.3-1.92 1.38-.49.08-1.12.11-3.64-.93-3.08-1.28-5.07-4.41-5.22-4.61-.15-.2-1.24-1.65-1.24-3.14s.78-2.23 1.06-2.52c.28-.29.61-.36.81-.36.2 0 .41 0 .59.01.19.01.44-.07.69.52.25.6.86 2.08.93 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.17-.32.39-.46.52-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.37 2.49 1.52.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.71-.15.29.1.84.4 1.45.7.61.3 1.02.45 1.17.7.15.25.15 1.45-.09 2.13z"/>
                  </svg>
                </div>
                <span className="text-zinc-500 group-hover:text-white transition-colors text-sm font-sans">&nearr;</span>
              </div>
              <div>
                <span className="font-display text-sm font-bold uppercase text-white block">
                  WhatsApp Direct
                </span>
                <span className="font-mono text-xs text-[#25D366] font-semibold block mt-0.5">
                  {company.whatsapp.display}
                </span>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Instant technical proposals and quotation chat.
                </p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-[#121417] hover:bg-[#16181C] border border-white/10 hover:border-blue-500/50 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 flex items-center justify-center text-white group-hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </div>
                <span className="text-zinc-500 group-hover:text-white transition-colors text-sm font-sans">&nearr;</span>
              </div>
              <div>
                <span className="font-display text-sm font-bold uppercase text-white block">
                  Official Facebook
                </span>
                <span className="font-mono text-xs text-blue-400 font-semibold block mt-0.5">
                  @LNEngineeringINDIA
                </span>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Machine installations, cutting trials &amp; trade updates.
                </p>
              </div>
            </a>

            {/* Twitter / X */}
            <a
              href={company.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-[#121417] hover:bg-[#16181C] border border-white/10 hover:border-white/40 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg hover:shadow-white/5"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-white/40 group-hover:bg-white/10 flex items-center justify-center text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="text-zinc-500 group-hover:text-white transition-colors text-sm font-sans">&nearr;</span>
              </div>
              <div>
                <span className="font-display text-sm font-bold uppercase text-white block">
                  X / Twitter
                </span>
                <span className="font-mono text-xs text-zinc-300 font-semibold block mt-0.5">
                  @LNEngineeringINDIA
                </span>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Industry engineering news and international stone announcements.
                </p>
              </div>
            </a>

            {/* Product Catalogue */}
            <a
              href="/documents/ln-engineering-catalogue-optimized.pdf"
              download
              className="group p-5 bg-[#121417] hover:bg-[#16181C] border border-white/10 hover:border-[#EF4444]/50 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg hover:shadow-[#EF4444]/10"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#EF4444]/50 group-hover:bg-[#C82032]/10 flex items-center justify-center text-white group-hover:text-[#EF4444] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="text-zinc-500 group-hover:text-white transition-colors text-sm font-sans">&nearr;</span>
              </div>
              <div>
                <span className="font-display text-sm font-bold uppercase text-white block">
                  Product Catalogue
                </span>
                <span className="font-mono text-xs text-[#EF4444] font-semibold block mt-0.5">
                  PDF Download (3.6 MB)
                </span>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Complete technical specifications, motor power &amp; dimensions.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}
