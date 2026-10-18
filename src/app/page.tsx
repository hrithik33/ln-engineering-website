import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { company } from "@/data/company";
import { productCategories } from "@/data/products";
import IndustrialTrustSection from "@/components/sections/IndustrialTrustSection";
import GlobalWorldMap from "@/components/sections/GlobalWorldMap";
import EnquiryBanner from "@/components/sections/EnquiryBanner";

export const metadata: Metadata = {
  title: "LN Engineering — Precision Stone Engineering & Wire Saw Machinery",
  description:
    "Official website of LN Engineering (L N Machineries Pvt. Ltd.): Premier Indian manufacturer of 5th Generation Mono Wire Saws, Multiwire Gangsaws (6 to 22 wire), CNC Wire Profile Centers, and Diamond Wire Rope. Rajsamand, Rajasthan.",
  alternates: {
    canonical: "https://www.gangsawmachines.com",
  },
  openGraph: {
    title: "LN Engineering — Precision Stone Engineering & Wire Saw Machinery",
    description:
      "Premier Indian manufacturer of Mono Wire Saws, Multiwire Gangsaws (6 to 22 wire), and CNC Wire Profile equipment.",
    url: "https://www.gangsawmachines.com",
    siteName: "LN Engineering",
    images: [
      {
        url: "/images/hero/industrial-stone-cutting-spray.jpg",
        width: 1200,
        height: 630,
        alt: "LN Engineering Heavy Industrial Wire Saw Machinery Under High-Pressure Water Spray",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  // Verified technical highlights strictly documented in official product catalogue
  const technicalHighlights = [
    {
      number: "01",
      title: "2500 mm Largest Flywheels",
      description:
        "Large diameter reduces cyclic wire bending fatigue, significantly extending diamond wire lifespan while sustaining rapid linear cutting across granite, marble, and sandstone blocks.",
      metric: "2500 mm Dual",
    },
    {
      number: "02",
      title: "50-Tonne Revolving Trolley",
      description:
        "Heavy-duty 7 ft × 7 ft turntable trolley supports 50-tonne raw block loads, enabling 360-degree block dressing without crane repositioning to cut preparation time in half.",
      metric: "50 Tonnes Capacity",
    },
    {
      number: "03",
      title: "Siemens PLC & CNC Automation",
      description:
        "Standardized on industrial Siemens automation with 7-inch digital HMI touchscreens, dual RPM vertical feed, and multi-axis interpolated CAD/CAM wire profiling.",
      metric: "Siemens Control",
    },
    {
      number: "04",
      title: "Dual Continuous Wire Tension",
      description:
        "Multiwire systems pair primary hydraulic tensioning with individual pneumatic compensators to prevent wire wander and guarantee uniform slab thickness tolerances.",
      metric: "Main + Individual",
    },
  ];

  return (
    <div className="space-y-0 bg-[#101112]">
      {/* =====================================================================
          1. STRIKING HERO SECTION — MATCHING REFERENCE SCREENSHOT
          ===================================================================== */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0C0D0F] border-b border-white/10">
        {/* Genuine Red LN Machinery Photography Hero Background (Industrial Stone Cutting Under Spray) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/industrial-stone-cutting-spray.webp"
            alt="LN Engineering Industrial Stone-Cutting Machine Under High-Pressure Water Spray"
            fill
            preload={true}
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            quality={80}
            className="object-cover object-center sm:object-[center_35%] filter brightness-[0.88] contrast-[1.04]"
          />
          {/* Subtle Cinematic Black Gradient Overlay: darker on left for text readability, lighter on right for machinery vibrancy */}
          <div className="absolute inset-0 bg-[#0C0D0F]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0D0F]/88 via-[#0C0D0F]/40 to-[#0C0D0F]/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0D0F]/75 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0F]/85 via-[#0C0D0F]/20 to-transparent" />
        </div>

        {/* Top Spacer for floating header */}
        <div className="pt-28 sm:pt-36" />

        {/* Hero Content — 2-Column Wide-Screen Industrial Composition (max-w-[1420px]) */}
        <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-8 py-8 sm:py-14 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Column (Headline & Eyebrow) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#181A1D]/80 border border-white/10 rounded-full backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#E02D40] inline-block"></span>
                <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5CBD3] uppercase">
                  PRECISION STONE ENGINEERING
                </span>
              </div>

              {/* Exact 3-Line Headline matching reference screenshot */}
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-semibold uppercase tracking-tight leading-[0.92]">
                <span className="text-white block">PRECISION BUILT.</span>
                <span className="text-[#C82032] block">PERFORMANCE</span>
                <span className="text-[#C82032] block">DELIVERED.</span>
              </h1>
            </div>

            {/* Right Column (Supporting Summary, CTAs, Technical Cards) */}
            <div className="lg:col-span-5 space-y-5 lg:pb-2">
              <p className="text-sm sm:text-base md:text-[17px] text-white/95 font-normal leading-relaxed max-w-xl">
                High-precision stone processing machinery manufactured in Rajsamand, India. From 5th generation mono wire saws and multiwire gangsaws to Siemens CNC profiling centers, LN Engineering delivers dependable cutting performance for natural stone plants worldwide.
              </p>

              {/* Action Buttons matching reference screenshot */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/machines"
                  className="px-7 py-3.5 bg-[#C82032] hover:bg-[#D92639] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-xl shadow-xl transition-all duration-200 inline-flex items-center gap-2.5 group"
                >
                  <span>EXPLORE MACHINERY</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-[#181B1E]/80 hover:bg-white/10 text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-xl border border-white/15 backdrop-blur-md transition-all duration-200"
                >
                  REQUEST A QUOTE
                </Link>
              </div>

              {/* Verified Technical Highlight Cards matching reference screenshot */}
              <div className="grid grid-cols-3 gap-3.5 pt-3 text-xs">
                <div className="bg-[#16181B]/80 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md shadow-lg">
                  <span className="font-display text-xl sm:text-2xl font-bold text-white block">2500 mm</span>
                  <span className="font-mono text-[10px] text-[#A7ADB5] uppercase tracking-wider block mt-1">DUAL FLYWHEEL</span>
                </div>
                <div className="bg-[#16181B]/80 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md shadow-lg">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[#EF4444] block">50 Tonnes</span>
                  <span className="font-mono text-[10px] text-[#A7ADB5] uppercase tracking-wider block mt-1">REVOLVING TROLLEY</span>
                </div>
                <div className="bg-[#16181B]/80 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md shadow-lg">
                  <span className="font-display text-xl sm:text-2xl font-bold text-white block">Siemens CNC</span>
                  <span className="font-mono text-[10px] text-[#A7ADB5] uppercase tracking-wider block mt-1">CONTOUR SLICING</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Information Strip matching reference screenshot */}
        <div className="relative z-10 w-full border-t border-white/10 py-3.5 bg-[#0C0D0F]/90 backdrop-blur-md">
          <div className="max-w-[1420px] mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A7ADB5] tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C82032]"></span>
              <span className="text-white font-medium">RAJSAMAND, RAJASTHAN, INDIA</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-[11px]">
              <span>PRECISION STONE ENGINEERING</span>
              <span className="text-white/20">•</span>
              <span>ZED CERTIFIED</span>
              <span className="text-white/20">•</span>
              <span>120+ OPERATING UNITS</span>
            </div>
            <div className="text-[11px] text-[#C5CBD3] font-medium">
              SINCE 1994
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. CONCISE INTRODUCTION TO THE COMPANY & MACHINERY
          ===================================================================== */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-[#191B1D] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#EF4444] uppercase block">
                  About LN Engineering
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold uppercase text-white tracking-tight leading-tight">
                  Three Decades of Precision Stone Machinery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#E8E5DF] leading-relaxed">
                Founded by <strong className="text-white">{company.founder}</strong> in Rajsamand, Rajasthan — the epicentre of India&apos;s natural stone industry — LN Engineering (L N Machineries Pvt. Ltd.) specializes in the design and manufacture of high-rigidity diamond wire saw machinery.
              </p>

              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                Certified with ZED quality standards by the Government of India, LN Engineering builds robust machinery engineered for vibration-free stone block squaring, high-speed multi-wire slab slicing, and automated architectural profiling. Our installations operate reliably across 20+ major stone clusters in India and export destinations including Egypt, Azerbaijan, and Nepal.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EF4444] hover:text-white transition-colors"
                >
                  <span>Read Corporate Profile & Milestones &rarr;</span>
                </Link>
                <span className="text-white/20">•</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A7ADB5] hover:text-white transition-colors"
                >
                  <span>Get in Touch with Our Engineers &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Verified Badges (5 Cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-[#101112] border border-white/10 p-5 rounded-xl space-y-1.5">
                <span className="text-[#EF4444] text-2xl font-bold block">120+</span>
                <span className="text-white font-semibold block text-xs uppercase">Operating Machines</span>
                <span className="text-[#A7ADB5] text-[11px] block">Verified operational track record</span>
              </div>

              <div className="bg-[#101112] border border-white/10 p-5 rounded-xl space-y-1.5">
                <span className="text-[#EF4444] text-2xl font-bold block">ZED</span>
                <span className="text-white font-semibold block text-xs uppercase">Govt. of India</span>
                <span className="text-[#A7ADB5] text-[11px] block">Zero Defect Zero Effect certified</span>
              </div>

              <div className="bg-[#101112] border border-white/10 p-5 rounded-xl space-y-1.5">
                <span className="text-[#EF4444] text-2xl font-bold block">50 T</span>
                <span className="text-white font-semibold block text-xs uppercase">Trolley Capacity</span>
                <span className="text-[#A7ADB5] text-[11px] block">Heavy revolving block turntable</span>
              </div>

              <div className="bg-[#101112] border border-white/10 p-5 rounded-xl space-y-1.5">
                <span className="text-[#EF4444] text-2xl font-bold block">Global</span>
                <span className="text-white font-semibold block text-xs uppercase">Export Reach</span>
                <span className="text-[#A7ADB5] text-[11px] block">India • Egypt • Azerbaijan • Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. PRODUCT SHOWCASE — PRODUCT CATALOGUE ONLY
          ===================================================================== */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#EF4444] uppercase">
              Product Catalogue
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold uppercase text-white tracking-tight">
              Stone Processing Machinery Families
            </h2>
            <p className="text-sm text-[#A7ADB5] max-w-xl">
              Precision machinery documented in the official LN Engineering catalogue for block squaring, slab yield, and 3D wire profiling.
            </p>
          </div>

          <Link
            href="/machines"
            className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F5F5] hover:text-[#EF4444] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View All Machinery &rarr;</span>
          </Link>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#191B1D] border border-white/10 hover:border-white/25 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
            >
              <div className="relative aspect-[16/10] bg-[#101112] overflow-hidden">
                <Image
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191B1D] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold uppercase text-white tracking-tight group-hover:text-[#F5F5F5] transition-colors">
                    {category.name}
                  </h3>
                  <p className="font-mono text-xs text-[#EF4444] uppercase tracking-wider font-semibold mb-2">
                    {category.tagline}
                  </p>
                  <p className="text-xs text-[#A7ADB5] leading-relaxed">
                    {category.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#A7ADB5] uppercase">
                    {category.models.length} {category.models.length === 1 ? "Model" : "Models"}
                  </span>
                  <Link
                    href={category.slug === "wire-rope" ? "/products/wire-rope" : `/machines/${category.slug}`}
                    className="font-sans text-xs font-semibold uppercase tracking-wider text-white hover:text-[#EF4444] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Explore &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          4. SMALL NUMBER OF VERIFIED TECHNICAL HIGHLIGHTS
          ===================================================================== */}
      <section className="bg-[#101112] border-y border-white/10 py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#EF4444] uppercase">
              Engineered for Endurance
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold uppercase text-white tracking-tight">
              Verified Technical Benchmarks
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5]">
              Documented design features that reduce wire wear, enhance cutting speed, and deliver consistent slab accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalHighlights.map((hl) => (
              <div
                key={hl.number}
                className="bg-[#191B1D] border border-white/10 p-6 rounded-2xl space-y-4 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#EF4444]">{hl.number}</span>
                  <span className="font-mono text-[10px] text-[#A7ADB5] bg-[#101112] px-2 py-0.5 rounded border border-white/10 uppercase">
                    {hl.metric}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold uppercase text-white tracking-tight">
                  {hl.title}
                </h3>
                <p className="text-xs text-[#A7ADB5] leading-relaxed">
                  {hl.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. VERIFIED PLANT CAPABILITIES & STANDARDS
          ===================================================================== */}
      <IndustrialTrustSection />

      {/* =====================================================================
          6. INTERNATIONAL REACH & GLOBAL WORLD MAP SECTION
          ===================================================================== */}
      <GlobalWorldMap />

      {/* =====================================================================
          6. CONTACT AND QUOTATION SECTION
          ===================================================================== */}
      <EnquiryBanner
        title="Ready to Equip Your Stone Processing Facility?"
        subtitle="Request technical proposals, discuss block dressing capacities, or schedule a demonstration at our Rajsamand works."
      />
    </div>
  );
}
