import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { productCategories } from "@/data/products";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductCard from "@/components/ui/ProductCard";
import EnquiryBanner from "@/components/sections/EnquiryBanner";

export const metadata: Metadata = {
  title: "Stone Processing Machinery Catalog — Mono Wire, Multiwire & CNC Wire Saws",
  description:
    "Explore LN Engineering's comprehensive range of stone processing machinery: Mono Wire Saws (LN 2500, PRO, PROMAXX), Multiwire Gangsaws (6 to 22 wires), and CNC Wire Profile Machines.",
};

export default function MachinesOverviewPage() {
  return (
    <div className="pt-32 sm:pt-40 pb-20 space-y-16 min-h-screen bg-[#101112]">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <Breadcrumbs items={[{ label: "Machines Catalog" }]} />

        <div className="border-b border-white/10 pb-8 space-y-3">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#C82032] uppercase block">
            Product Catalog & Equipment Overview
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold uppercase text-white tracking-tight leading-tight">
            Stone Processing & Wire Saw Machinery
          </h1>
          <p className="text-sm sm:text-base text-[#A7ADB5] max-w-3xl leading-relaxed">
            LN Engineering manufactures heavy-duty stone processing machinery engineered for maximum linear cutting speed, sub-millimeter thickness tolerance, and minimal diamond wire consumption across granite, marble, and sandstone.
          </p>
        </div>

        {/* Category Jump Navigation */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {productCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`#${cat.slug}`}
              className="px-4 py-2 bg-[#191B1D] hover:bg-[#202326] border border-white/10 text-xs font-mono font-medium text-[#F5F5F5] hover:text-[#C82032] rounded-xl transition-colors uppercase tracking-wider"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Category Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-24">
        {productCategories.map((category) => (
          <section key={category.id} id={category.slug} className="scroll-mt-32 space-y-8">
            {/* Category Header Card */}
            <div className="bg-[#191B1D] border border-white/10 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
              <div className="lg:col-span-8 space-y-3">
                <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#C82032] uppercase block">
                  Machine Family
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold uppercase text-white tracking-tight">
                  {category.name}
                </h2>
                <p className="font-mono text-xs text-[#C82032] uppercase tracking-wider font-semibold">
                  {category.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                  {category.shortDescription}
                </p>
                <div className="pt-2">
                  <Link
                    href={category.slug === "wire-rope" ? "/products/wire-rope" : `/machines/${category.slug}`}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-white hover:text-[#C82032] uppercase tracking-wider group transition-colors"
                  >
                    <span>View Dedicated Family Page & Comparative Tables</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#101112]">
                <Image
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Model Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.models.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Global Enquiry Banner */}
      <EnquiryBanner
        title="Require Technical Selection Guidance for Your Stone Quarry or Plant?"
        subtitle="Speak directly with LN Engineering technical machine designers to select optimal flywheel diameter, motor power, and wire counts for your stone hardness."
      />
    </div>
  );
}
