import React from "react";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

interface IndustrialTrustSectionProps {
  showCatalogueDownloads?: boolean;
  className?: string;
}

export default function IndustrialTrustSection({
  showCatalogueDownloads = true,
  className = "",
}: IndustrialTrustSectionProps) {
  const verifiedInstallations = [
    {
      title: "Marmomac Verona International Stone Exhibition",
      location: "Verona, Italy",
      image: "/images/factory/exhibition-verona.jpg",
      caption: "International stone technology exposition showcasing LN Engineering wire sawing innovations.",
    },
    {
      title: "India StoneMart International Exposition",
      location: "Jaipur, Rajasthan",
      image: "/images/factory/exhibition-stonemart.jpg",
      caption: "Live demonstration of 5th generation mono wire saws and multiwire gangsaw engineering.",
    },
    {
      title: "Heavy-Duty Precision Lathe Machining",
      location: "Rajsamand Manufacturing Works",
      image: "/images/factory/plant-lathe.jpg",
      caption: "Machining large-diameter 2500 mm flywheels and cylindrical drive components.",
    },
    {
      title: "Mechanical Engineering Workforce",
      location: "Assembly Bay, Rajsamand",
      image: "/images/factory/plant-workforce.jpg",
      caption: "Certified fabricators, machine planners, and assembly technicians overseeing structural alignment.",
    },
    {
      title: "Customer Commissioning & Delivery Trials",
      location: "Granite Processing Plant",
      image: "/images/factory/event-p14-img1.jpg",
      caption: "Field testing downfeed cutting rates and diamond wire tension stability prior to handover.",
    },
    {
      title: "Factory Frame Fabrication Bay",
      location: "Rajsamand Works",
      image: "/images/factory/event-p13-img1.jpg",
      caption: "Heavy box-section mild steel gantry fabrication engineered for vibration-free wire sawing.",
    },
  ];

  return (
    <section className={`py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 ${className}`}>
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-2">
          <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#EF4444] uppercase block">
            Manufacturing Rigor &amp; Global Footprint
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold uppercase text-white tracking-tight">
            Verified Plant Capabilities &amp; Installations
          </h2>
          <p className="text-sm text-[#A7ADB5] max-w-2xl leading-relaxed">
            Built on three decades of heavy mechanical engineering in Rajsamand, Rajasthan. LN Engineering delivers rigid machinery tested under real quarry and stone processing plant loads.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#191B1D] border border-white/10 rounded-full text-xs font-mono text-[#EF4444]">
            <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse"></span>
            <span>ZED Bronze Certified</span>
          </span>
        </div>
      </div>

      {/* 1. Manufacturing Tooling & Plant Standards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#151719] border border-white/10 p-6 rounded-2xl space-y-3 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center text-[#EF4444] font-mono font-bold text-sm">
            01
          </div>
          <h3 className="font-display text-xl font-semibold uppercase text-white tracking-wide">
            Heavy Machine Shop Infrastructure
          </h3>
          <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
            In-house tooling featuring HMT heavy-duty lathes, Swedish horizontal boring machinery, and large-bed shapers ensures micron-level structural alignment for vibration-free cutting.
          </p>
          <div className="pt-2 text-[11px] font-mono text-zinc-400 border-t border-white/5">
            Key Tooling: HMT Lathe • Sweden Boring Machine
          </div>
        </div>

        <div className="bg-[#151719] border border-white/10 p-6 rounded-2xl space-y-3 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center text-[#EF4444] font-mono font-bold text-sm">
            02
          </div>
          <h3 className="font-display text-xl font-semibold uppercase text-white tracking-wide">
            Sub-Millimeter Kerf Precision
          </h3>
          <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
            Every machine is rigorously tested for dynamic flywheel balance, hydraulic tension responsiveness, and guide roller alignment to guarantee planar, parallel slab yield on hard granites.
          </p>
          <div className="pt-2 text-[11px] font-mono text-zinc-400 border-t border-white/5">
            Standard: &plusmn;0.2 mm Parallel Tolerance
          </div>
        </div>

        <div className="bg-[#151719] border border-white/10 p-6 rounded-2xl space-y-3 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center text-[#EF4444] font-mono font-bold text-sm">
            03
          </div>
          <h3 className="font-display text-xl font-semibold uppercase text-white tracking-wide">
            Direct Engineering Support
          </h3>
          <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
            Direct access to senior machine planners and service technicians from our Rajsamand works and regional South India offices in Ongole and Martur, Andhra Pradesh.
          </p>
          <div className="pt-2 text-[11px] font-mono text-zinc-400 border-t border-white/5">
            Offices: Rajsamand • Ongole • Martur
          </div>
        </div>
      </div>

      {/* 2. Authentic Installation & Exhibition Gallery */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl font-semibold uppercase text-white tracking-tight">
            Factory Floor &amp; International Exhibitions
          </h3>
          <span className="text-xs font-mono text-[#7E8691]">
            Authentic Photo Documentation
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedInstallations.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#151719] border border-white/10 rounded-2xl overflow-hidden group hover:border-white/20 transition-all flex flex-col justify-between shadow-lg"
            >
              <div className="relative aspect-[16/10] bg-[#101112] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151719] via-transparent to-transparent opacity-70" />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">
                  {item.location}
                </span>
              </div>

              <div className="p-5 space-y-1.5 flex-1">
                <h4 className="font-display text-lg font-semibold uppercase text-white tracking-tight leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#A7ADB5] leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Official Technical Catalogues & Brochures Download */}
      {showCatalogueDownloads && (
        <div className="bg-[#151719] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs font-semibold tracking-wider text-[#EF4444] uppercase block">
                Technical Documentation Center
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-white tracking-tight">
                Download Official LN Engineering Catalogues
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                Review verified technical specifications, trolley dimensions, wire configuration matrices, and power curves published for domestic and international markets.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 justify-end">
              <a
                href="/documents/product-catalogue.pdf"
                download="LN_Engineering_Product_Catalogue.pdf"
                className="min-h-[44px] px-5 py-3 bg-[#C82032] hover:bg-[#D92639] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2.5 shadow-lg shadow-[#C82032]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C82032]"
                aria-label="Product Catalogue (41 MB PDF)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-2v1.5h2c.55 0 1-.45 1-1s-.45-.5-1-.5zm0-3h-2v1.5h2c.55 0 1-.45 1-1s-.45-.5-1-.5zm5 4.5h-1.5v-4h1.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zm4.5-2.5h-1.5v1h1.5v1.5h-1.5V14h-1.5V8.5h3v1.5z"/>
                </svg>
                <span>Product Catalogue (41 MB)</span>
              </a>

              <a
                href="/documents/ln-engineering-catalogue-optimized.pdf"
                download="LN_Engineering_Master_Catalogue.pdf"
                className="min-h-[44px] px-5 py-3 bg-[#191B1D] hover:bg-[#202326] text-white border border-white/15 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Master Catalogue (3.8 MB PDF)"
              >
                <svg className="w-4 h-4 fill-current text-[#EF4444]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-2v1.5h2c.55 0 1-.45 1-1s-.45-.5-1-.5zm0-3h-2v1.5h2c.55 0 1-.45 1-1s-.45-.5-1-.5zm5 4.5h-1.5v-4h1.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zm4.5-2.5h-1.5v1h1.5v1.5h-1.5V14h-1.5V8.5h3v1.5z"/>
                </svg>
                <span>Master Catalogue (3.8 MB)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
