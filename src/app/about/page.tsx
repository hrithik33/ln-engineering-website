import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { company, timeline, verifiedCredentials, geographicalPresence, companyDiscrepancies } from "@/data/company";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import IndustrialTrustSection from "@/components/sections/IndustrialTrustSection";
import EnquiryBanner from "@/components/sections/EnquiryBanner";

export const metadata: Metadata = {
  title: "About Us — History, Manufacturing Plant & Global Presence | LN Engineering",
  description:
    "Learn about LN Engineering (L N Machineries Pvt. Ltd.): Founded in Rajsamand, Rajasthan. Three decades of precision stone machinery development, verified ZED certifications, and global footprint across India, Egypt, Azerbaijan, and Nepal.",
  alternates: {
    canonical: "https://www.gangsawmachines.com/about",
  },
  openGraph: {
    title: "About Us — History, Manufacturing Plant & Global Presence | LN Engineering",
    description:
      "Three decades of precision stone machinery manufacturing, verified ZED certifications, and global export reach.",
    url: "https://www.gangsawmachines.com/about",
    siteName: "LN Engineering",
    images: ["/images/about/precision-stone-processing-machine.webp"],
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 sm:pt-40 pb-20 space-y-20 min-h-screen bg-[#101112]">
      {/* Top Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        <div className="border-b border-[#202326] pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#191B1D] border border-[#202326] rounded-full text-xs text-[#E8E5DF]">
            <span className="w-2 h-2 rounded-full bg-[#C82032] animate-pulse"></span>
            <span className="font-mono text-[11px] uppercase tracking-wider">Corporate Profile & Verified History</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold uppercase text-white tracking-tight leading-tight">
            About LN Engineering
          </h1>

          <p className="text-sm sm:text-base text-[#A7ADB5] max-w-3xl leading-relaxed">
            Headquartered in Rajsamand, Rajasthan — the stone capital of India — LN Engineering (L N Machineries Pvt. Ltd.) stands as an indigenous leader in precision stone processing technology, manufacturing robust diamond wire saws for the global stone industry.
          </p>
        </div>
      </div>

      {/* =====================================================================
          COMPANY PROFILE & ACCURACY MASTER STANDARD (Reference Layout Split)
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Authentic Machine Poster Card with Overlays */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-full min-h-[460px] rounded-xl overflow-hidden border border-[#202326] bg-[#0E1012] group shadow-2xl">
              <Image
                src="/images/about/precision-stone-processing-machine.webp"
                alt="Genuine LN Engineering multiwire stone-cutting machine slicing a large natural stone block on an industrial rail trolley with water coolant"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/80 pointer-events-none" />

              {/* Top Overlay Branding */}
              <div className="absolute top-0 left-0 right-0 p-6 sm:p-8 space-y-1">
                <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-widest text-[#EF4444] uppercase block">
                  Precision Stone Engineering
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight drop-shadow-md">
                  Accuracy Master
                </h2>
                <p className="text-[11px] font-mono text-[#E8E5DF] tracking-wider uppercase">
                  LN Engineering • Rajsamand Works
                </p>
              </div>

              {/* Bottom Overlay Action Button */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
                <Link
                  href="/machines"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/80 hover:bg-black text-white text-xs font-mono uppercase tracking-wider border border-white/25 rounded-none backdrop-blur-md transition-colors"
                >
                  <span>Explore Machinery</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7m0 0H9m8 0v8" />
                  </svg>
                </Link>
                <span className="text-[10px] font-mono text-[#A7ADB5] bg-black/60 px-2 py-1 rounded border border-white/10 hidden sm:inline-block">
                  500+ Machines Built
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Stacked Editorial Blocks with Thin Horizontal Dividers */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Block 1: Heritage & Establishment */}
            <div className="space-y-2 pb-6 border-b border-[#202326]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold text-[#EF4444] uppercase tracking-widest">
                  01 / Heritage & Origins
                </span>
                <span className="text-[10px] font-mono text-[#A7ADB5] bg-[#191B1D] px-2 py-0.5 rounded border border-[#202326]">
                  Est. 1993–94
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-tight">
                Roots in Indian Stone Processing
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                Founded by Mr. Laxmi Narayan Jangid, LN Engineering commenced stone-processing machinery manufacturing in <strong className="text-white">1993</strong> at Rajsamand, Rajasthan, with company branding reflecting <strong className="text-white">&quot;Since 1994&quot;</strong> and formal incorporation as L N Machineries Pvt. Ltd. Over <strong className="text-white">500+ machines</strong> have been successfully built and commissioned across India and worldwide.
              </p>
            </div>

            {/* Block 2: The Accuracy Master Standard */}
            <div className="space-y-2 pb-6 border-b border-[#202326]">
              <span className="font-mono text-[11px] font-semibold text-[#EF4444] uppercase tracking-widest block">
                02 / Engineering Philosophy
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-tight">
                The &quot;Accuracy Master&quot; Standard
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                {company.philosophy}
              </p>
            </div>

            {/* Block 3: Corporate Vision & Mission */}
            <div className="space-y-2 pb-6 border-b border-[#202326]">
              <span className="font-mono text-[11px] font-semibold text-[#EF4444] uppercase tracking-widest block">
                03 / Purpose & Global Vision
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-tight">
                Vision & Mission
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-[#141618] border border-[#202326] p-4 rounded-xl space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white font-semibold block">
                    Our Vision
                  </span>
                  <p className="text-xs text-[#A7ADB5] leading-relaxed">
                    {company.vision}
                  </p>
                </div>
                <div className="bg-[#141618] border border-[#202326] p-4 rounded-xl space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white font-semibold block">
                    Our Mission
                  </span>
                  <p className="text-xs text-[#A7ADB5] leading-relaxed">
                    {company.mission}
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4: Component Standards & Founder Link */}
            <div className="space-y-3 pt-1">
              <span className="font-mono text-[11px] font-semibold text-[#EF4444] uppercase tracking-widest block">
                04 / Quality Benchmarks
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A7ADB5]">
                <span className="text-white font-semibold">Tier-1 Components:</span>
                <span>{company.vendors.map((v) => v.name).join(" • ")}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <a
                  href="#leadership"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#EF4444] hover:text-white transition-colors uppercase tracking-wider"
                >
                  <span>Meet Our Leadership & Partners</span>
                  <span>&darr;</span>
                </a>
                <span className="text-[11px] font-mono text-[#A7ADB5]">
                  Rajsamand, Rajasthan, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          THE PEOPLE BEHIND LN ENGINEERING — LEADERSHIP & PARTNERS GALLERY
          ===================================================================== */}
      <section id="leadership" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
        {/* Section Heading & Supporting Text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#202326] pb-8">
          <div className="space-y-2">
            <span className="font-mono text-xs sm:text-[13px] font-semibold tracking-[0.2em] text-[#EF4444] uppercase block">
              OUR LEADERSHIP &amp; PARTNERS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white tracking-tight leading-tight">
              THE PEOPLE BEHIND LN ENGINEERING
            </h2>
          </div>

          <div className="md:text-right max-w-sm space-y-3 shrink-0">
            <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
              Driven by experience, engineering excellence and a long-term commitment to the stone industry.
            </p>
            <div className="w-16 h-0.5 bg-[#EF4444] md:ml-auto"></div>
          </div>
        </div>

        {/* 3 Large White-Framed Portrait Cards in One Row on Desktop - Clickable Portfolios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {company.leadership.map((leader, idx) => (
            <Link
              key={leader.name}
              href={`/about/leadership/${leader.slug}`}
              aria-label={`View detailed leadership portfolio for ${leader.name}, ${leader.role}`}
              className={`bg-white rounded-none border border-zinc-200/90 p-4 sm:p-5 pb-5 sm:pb-6 shadow-2xl flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_24px_50px_rgba(255,255,255,0.12)] hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] focus-visible:ring-offset-4 focus-visible:ring-offset-[#101112] ${
                idx === 2 ? "md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 w-full" : "w-full"
              }`}
            >
              {/* White Portrait Frame with Museum Matting */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 border border-zinc-200/80">
                <Image
                  src={leader.image}
                  alt={leader.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top motion-safe:group-hover:scale-105 motion-reduce:transform-none transition-transform duration-500 ease-out"
                  priority={idx === 0}
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white/90 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                  View Profile &rarr;
                </div>
              </div>

              {/* Information Panel: Name, Designation & Minimal Arrow */}
              <div className="pt-5 flex items-end justify-between gap-4">
                <div className="space-y-1 min-w-0">
                  <h3 className="font-serif tracking-wider text-base sm:text-lg font-bold text-zinc-950 uppercase leading-snug group-hover:text-[#C82032] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-sans tracking-[0.16em] font-medium text-zinc-500 uppercase">
                    {leader.role}
                  </p>
                </div>

                {/* Minimal Arrow matching reference */}
                <div
                  aria-hidden="true"
                  className="text-zinc-900 group-hover:text-[#EF4444] transition-colors shrink-0 mb-1"
                >
                  <svg
                    className="w-5 h-5 transform motion-safe:group-hover:translate-x-1.5 motion-reduce:transform-none transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Administration & Executive Management Card */}
        <div className="bg-[#141618] border border-[#202326] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#202326] pb-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-semibold text-[#EF4444] uppercase tracking-widest block">
                Executive Administration & Operations
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-tight">
                Corporate Governance & Management Holders
              </h3>
            </div>
            <span className="text-[11px] font-mono text-[#A7ADB5] bg-[#191B1D] px-3 py-1.5 rounded-full border border-[#202326] self-start sm:self-auto">
              Rajsamand Works, Rajasthan
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {company.management.map((mgmt) => (
              <div
                key={mgmt.name}
                className="bg-[#191B1D] border border-[#202326] p-5 rounded-xl space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base font-bold text-white uppercase tracking-tight">
                    {mgmt.name}
                  </h4>
                  <span className="text-[10px] font-mono text-[#EF4444] bg-[#EF4444]/10 px-2 py-0.5 rounded">
                    {mgmt.qualification}
                  </span>
                </div>
                <p className="text-xs text-[#A7ADB5] font-mono">
                  {mgmt.role}
                </p>
                <p className="text-[11px] text-[#9CA3AF] leading-relaxed">
                  {mgmt.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Component Partners & Tier-1 Engineering Vendors */}
        <div className="bg-[#0E1012] border border-[#202326] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-2">
            <span className="font-mono text-[10px] font-semibold text-[#EF4444] uppercase tracking-widest block">
              Tier-1 Component Partners & Vendors
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-tight">
              Verified Technical Engineering Partners
            </h3>
            <p className="text-xs text-[#A7ADB5] max-w-2xl leading-relaxed">
              LN Engineering integrates world-class precision components across every wire saw and gangsaw machine, ensuring international reliability, micro-stepping accuracy, and rapid worldwide spare-parts availability.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {company.vendors.map((vendor) => (
              <div
                key={vendor.name}
                className="bg-[#141618] border border-[#202326] p-4 rounded-xl space-y-1 hover:border-[#EF4444]/40 transition-colors"
              >
                <span className="font-display text-sm sm:text-base font-bold text-white uppercase block tracking-wider">
                  {vendor.name}
                </span>
                <span className="font-mono text-[10px] text-[#A7ADB5] block leading-tight">
                  {vendor.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          VERIFIED DEVELOPMENT TIMELINE (1993 - PRESENT)
          ===================================================================== */}
      <section className="bg-[#0E1012] border-y border-[#202326] py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-[11px] font-semibold tracking-widest text-[#EF4444] uppercase block">
              Milestone Timeline
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold uppercase text-white tracking-tight">
              Three Decades of Consistent Development
            </h2>
            <p className="text-xs text-[#A7ADB5]">
              Verified timeline documented in official catalogue page 2: &quot;The span of consistent development&quot;.
            </p>
          </div>

          <div className="relative border-l border-[#202326] ml-4 sm:ml-32 md:ml-48 space-y-8">
            {timeline.map((item, idx) => (
              <div key={item.year + idx} className="relative pl-6 sm:pl-8 group">
                {/* Year Marker Badge */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#101112] border-2 border-[#C82032] group-hover:scale-125 transition-transform"></div>
                <div className="sm:absolute sm:-left-36 md:-left-44 top-0 font-mono text-sm font-bold text-[#EF4444]">
                  {item.year}
                </div>

                <div className="bg-[#101112] border border-[#202326] p-4 rounded-xl space-y-1 hover:border-white/20 transition-all shadow-md">
                  <h3 className="font-display text-base font-semibold uppercase text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A7ADB5] leading-relaxed">
                    {item.description}
                  </p>
                  {item.note && (
                    <span className="block text-[10px] text-[#9CA3AF] italic pt-1 font-mono">
                      *{item.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          VERIFIED CERTIFICATIONS & ACCOLADES (Catalogue Page 5)
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-[#202326] pb-4 space-y-2">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#EF4444] uppercase block">
            Quality Credentials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold uppercase text-white tracking-tight">
            Awards, Recognitions & ZED Certifications
          </h2>
          <p className="text-xs text-[#A7ADB5]">
            Directly sourced from LN Engineering catalogue page 5: &quot;Accolades & Appreciation&quot;. Official certification and recognition documents are available upon request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedCredentials.map((cred, idx) => (
            <div
              key={idx}
              className="bg-[#191B1D] border border-[#202326] rounded-2xl p-6 space-y-3 relative overflow-hidden shadow-lg"
            >
              <div className="w-1.5 h-full bg-[#C82032] absolute left-0 top-0"></div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#EF4444] font-mono font-bold text-sm">{cred.year}</span>
                <span className="text-[10px] bg-[#101112] text-[#E8E5DF] px-2 py-0.5 rounded font-mono border border-[#202326]">
                  {cred.status}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold uppercase text-white">{cred.title}</h3>
              <p className="text-xs text-[#E8E5DF] font-medium">{cred.organization}</p>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">{cred.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          NATIONAL & INTERNATIONAL GEOGRAPHICAL PRESENCE (Catalogue Page 15)
          ===================================================================== */}
      <section className="bg-[#0E1012] border-y border-[#202326] py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-[11px] font-semibold tracking-widest text-[#EF4444] uppercase block">
              Our Signature Across Stone Hubs
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold uppercase text-white tracking-tight">
              National & Global Footprint
            </h2>
            <p className="text-xs text-[#A7ADB5]">
              Sourced from catalogue page 15: verified machine installations across major quarrying regions and international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* National Clusters (8 Cols) */}
            <div className="lg:col-span-8 bg-[#101112] border border-[#202326] p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#202326] pb-3">
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                  Domestic Installations Across India
                </h3>
                <span className="font-mono text-[11px] text-[#EF4444] font-semibold">
                  20+ Major Hubs
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {geographicalPresence.national.map((dom, i) => (
                  <div key={i} className="bg-[#191B1D] p-3.5 rounded-xl border border-[#202326] space-y-1">
                    <span className="font-semibold text-white block">{dom.state}</span>
                    <span className="text-[#A7ADB5] text-[11px] leading-relaxed block font-mono">
                      {dom.locations.join(" • ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* International Markets (4 Cols) */}
            <div className="lg:col-span-4 bg-[#101112] border border-[#202326] p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
              <div className="border-b border-[#202326] pb-3">
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                  Global Footprint
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                {geographicalPresence.international.map((countryName, i) => (
                  <div key={i} className="bg-[#191B1D] p-3.5 rounded-xl border border-[#202326] space-y-0.5">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">{countryName}</span>
                      <span className="text-[10px] font-mono text-[#EF4444] uppercase">Export Market</span>
                    </div>
                    <span className="text-[11px] text-[#A7ADB5] block">Verified operational machinery</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Plant Capabilities & Standards */}
      <IndustrialTrustSection showCatalogueDownloads={false} />

      {/* Global Enquiry Banner */}
      <EnquiryBanner
        title="Partner with LN Engineering for Your Next Stone Plant Expansion"
        subtitle="Schedule a technical visit to our Rajsamand manufacturing facility or request comprehensive client references in your stone processing hub."
      />
    </div>
  );
}
