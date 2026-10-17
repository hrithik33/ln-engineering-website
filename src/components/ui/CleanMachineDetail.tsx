"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ProductModel } from "@/data/products";

interface CleanMachineDetailProps {
  categorySlug: string;
  categoryName: string;
  models: ProductModel[];
  defaultModelSlug?: string;
}

// Verified 4 Essential Specifications Helper
function getEssentialSpecs(model: ProductModel): { label: string; value: string; highlight?: boolean }[] {
  switch (model.id) {
    case "ln-6-wire":
      return [
        { label: "Max Block Capacity", value: "3600 × 2100 mm" },
        { label: "Wire Configuration", value: "6 Wires (50–100 mm)", highlight: true },
        { label: "Main Motor Power", value: "40 HP" },
        { label: "PLC Automation", value: "Siemens S7 Automation" },
      ];
    case "ln-12-wire":
      return [
        { label: "Max Block Capacity", value: "3600 × 2100 mm" },
        { label: "Wire Configuration", value: "12 Wires (20–100 mm)", highlight: true },
        { label: "Main Motor Power", value: "60 HP / 75 HP" },
        { label: "PLC Automation", value: "Siemens Touchscreen HMI" },
      ];
    case "ln-22-wire":
      return [
        { label: "Max Block Capacity", value: "3600 × 2100 mm" },
        { label: "Wire Configuration", value: "Up to 22 Wires", highlight: true },
        { label: "Main Motor Power", value: "100 HP" },
        { label: "PLC Automation", value: "Siemens Integrated CNC" },
      ];
    case "ln-2500":
      return [
        { label: "Max Block Capacity", value: "4000 × 2500 mm" },
        { label: "Flywheel Diameter", value: "2500 mm (Dual)", highlight: true },
        { label: "Main Motor Power", value: "20 HP" },
        { label: "Trolley Capacity", value: "50 Tonnes (Revolving)" },
      ];
    case "ln-2500-pro":
      return [
        { label: "Max Block Capacity", value: "4000 × 2500 mm" },
        { label: "Flywheel Diameter", value: "2500 mm (Dual)", highlight: true },
        { label: "Main Motor Power", value: "25 HP" },
        { label: "Automation Control", value: "7-Inch PLC Touchscreen" },
      ];
    case "ln-2500-promaxx":
      return [
        { label: "Max Block Capacity", value: "4000 × 2500 mm" },
        { label: "Flywheel Diameter", value: "2500 mm (Dual)", highlight: true },
        { label: "Main Motor Power", value: "25 HP" },
        { label: "Smart Automation", value: "IoT Telemetry + PLC", highlight: true },
      ];
    case "ln-hori-2100":
      return [
        { label: "Arc Cutting Reach", value: "Up to 20 Feet", highlight: true },
        { label: "Flywheel Diameter", value: "2100 mm (Dual)" },
        { label: "Main Motor Power", value: "20 HP" },
        { label: "Operating Mode", value: "Horizontal + Vertical" },
      ];
    case "ln-cnc-2100-promaxx":
      return [
        { label: "Controller Automation", value: "Genuine Siemens CNC", highlight: true },
        { label: "Flywheel Diameter", value: "2100 mm (Dual)" },
        { label: "Main Motor Power", value: "25 HP" },
        { label: "Profiling Capability", value: "Multi-Axis 2D/3D Contours" },
      ];
    case "diamond-wire-rope":
      return [
        { label: "Diamond Density", value: "35 Beads / Meter", highlight: true },
        { label: "Wire Diameter", value: "11.5 mm" },
        { label: "Core Wire Material", value: "Imported High-Tensile" },
        { label: "Stone Compatibility", value: "Granite, Marble & Quartzite" },
      ];
    default:
      return [
        { label: "Main Motor Power", value: model.specs.find((s) => s.label.includes("Power"))?.value || "Standard" },
        { label: "Block Capacity", value: model.specs.find((s) => s.label.includes("Block Size"))?.value || "Standard" },
        { label: "Control Automation", value: model.specs.find((s) => s.label.includes("Control") || s.label.includes("Panel"))?.value || "Industrial PLC" },
        { label: "Flywheel Size", value: model.specs.find((s) => s.label.includes("Flywheel"))?.value || "Precision Flywheel" },
      ];
  }
}

// Verified 3-4 Key Features Helper
function getKeyFeatures(model: ProductModel): { title: string; description: string }[] {
  switch (model.id) {
    case "ln-6-wire":
      return [
        { title: "Mono Accuracy Master", description: "Specialized thick slab slicing configuration for monuments, kerbstones, and structural pavers." },
        { title: "Dual Continuous Tension", description: "Hydraulic primary tension cylinder paired with individual pneumatic wire compensators." },
        { title: "Siemens PLC Intelligence", description: "Automated digital feed regulation prevents wire wander and optimizes cutting throughput." },
        { title: "Heavy Fabricated Gantry", description: "Rigid box-section steel frame dampens vibration for exceptional surface finish and parallel slabs." },
      ];
    case "ln-12-wire":
      return [
        { title: "Slab & Thick-Slab Versatility", description: "Configurable for commercial 20/30 mm gangsaw output or heavy 50–100 mm architectural blocks." },
        { title: "Parallel Slab Precision", description: "Multi-groove guide drums maintain uniform wire spacing across full multi-slab downward strokes." },
        { title: "Dual Wire Tensioning", description: "Synchronized hydraulic and pneumatic tensioning protects wire core from shock loads." },
        { title: "High-Volume Production", description: "Significantly lowers sawing cost per square foot compared to conventional blade gangsaws." },
      ];
    case "ln-22-wire":
      return [
        { title: "Maximum Slab Yield", description: "Flagship multiwire platform produces up to 21 commercial slabs in a single automated downward pass." },
        { title: "100 HP High-Torque Drive", description: "High-efficiency industrial motor sustains rapid linear wire speed through the hardest granites." },
        { title: "Siemens Automatic Downfeed", description: "Intelligent load-sensing regulation automatically adjusts descent speed to wire motor amps." },
        { title: "Sub-Millimeter Parallelism", description: "Rigid gantry and precision diamond wire guidance guarantee flat, uncurved slab surfaces." },
      ];
    case "ln-2500":
      return [
        { title: "2500 mm Dual Flywheels", description: "Large diameter reduces cyclic wire bending fatigue, significantly extending diamond wire lifespan." },
        { title: "50-Tonne Revolving Trolley", description: "Heavy-duty 7 ft × 7 ft turntable enables 360-degree block dressing without crane repositioning." },
        { title: "32 Guide Rollers", description: "Precision vertical guide rollers prevent lateral wire deviation for perfectly planar cuts." },
        { title: "Vibration-Free Frame", description: "High-rigidity fabricated mild steel columns deliver clean squaring cuts on abrasive stones." },
      ];
    case "ln-2500-pro":
      return [
        { title: "Dressing + Slab Cutting", description: "Dual-purpose capability for precision block squaring and accurate commercial slab production." },
        { title: "7-Inch Digital HMI", description: "Siemens PLC touchscreen allows real-time cutting parameter adjustment and cycle monitoring." },
        { title: "Dual RPM Precision Feed", description: "Two-speed vertical motor feed ensures optimal wire entry and steady cutting through varied hardnesses." },
        { title: "Wireless Industrial Remote", description: "Ergonomic handheld wireless controller allows safe, convenient operator line-of-sight positioning." },
      ];
    case "ln-2500-promaxx":
      return [
        { title: "IoT Mobile Telemetry", description: "Streams live cutting parameters, motor load, and diagnostics directly to mobile devices." },
        { title: "Pillar Bellow Protection", description: "Telescopic accordion covers shield vertical guide pillars and lead screws from abrasive slurry." },
        { title: "Dual RPM Precision Feed", description: "Smooth regulated downfeed preserves diamond wire life across demanding granite blocks." },
        { title: "50-Tonne Turntable Trolley", description: "Rugged 360-degree revolving trolley handles heavy quarry blocks with effortless indexing." },
      ];
    case "ln-hori-2100":
      return [
        { title: "Horizontal Block Slicing", description: "Horizontal wire orientation enables slicing thick block layers without repositioning." },
        { title: "20-Foot Arc Contouring", description: "Cuts large curved arches, column sections, and circular wall facings with smooth curvature." },
        { title: "Regulated Vertical Feed", description: "Synchronized dual-column motor drive ensures uniform downward penetration across the cut." },
        { title: "Heavy Structural Steel Frame", description: "Solid mild-steel columns eliminate frame deflection under continuous wire tension." },
      ];
    case "ln-cnc-2100-promaxx":
      return [
        { title: "Genuine Siemens CNC", description: "Industrial numerical controller executes complex CAD/CAM toolpaths with sub-millimeter fidelity." },
        { title: "Complex Architectural Shapes", description: "Carves balustrades, fluted columns, ornate cornices, and tapered 3D stone surfaces." },
        { title: "Digital Touchscreen Interface", description: "User-friendly graphical screen for loading DXF/G-code programs and monitoring axis motion." },
        { title: "Precision Wire Alignment", description: "Dynamic guide assemblies keep diamond wire aligned throughout multi-axis interpolated motion." },
      ];
    case "diamond-wire-rope":
      return [
        { title: "35 Beads Per Meter", description: "Optimized diamond bead spacing delivers maximum linear cutting rate and clean kerf finish." },
        { title: "Imported High-Tensile Core", description: "Premium European core wire resists cyclic fatigue and minimizes mid-cut breakage." },
        { title: "Advanced Sintered Bond", description: "Sintered diamond bonding resists abrasive slurry for extended square-meter wire life." },
        { title: "Universal Saws Compatibility", description: "Engineered specifically for LN Engineering mono wire, multiwire, and CNC profilers." },
      ];
    default:
      return model.keyHighlights.slice(0, 4).map((h, i) => ({
        title: `Key Highlight 0${i + 1}`,
        description: h,
      }));
  }
}

export default function CleanMachineDetail({
  categorySlug,
  categoryName,
  models,
  defaultModelSlug,
}: CleanMachineDetailProps) {
  const [activeSlug, setActiveSlug] = useState<string>(
    defaultModelSlug || (models.length > 0 ? models[0].slug : "")
  );

  // Sync with URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && models.some((m) => m.slug === hash)) {
        setActiveSlug(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [models]);

  const activeModel = models.find((m) => m.slug === activeSlug) || models[0];
  if (!activeModel) return null;

  const essentialSpecs = getEssentialSpecs(activeModel);
  const keyFeatures = getKeyFeatures(activeModel);

  return (
    <div className="pt-32 sm:pt-40 pb-24 space-y-16 min-h-screen bg-[#101112]">
      {/* 1. Breadcrumbs Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <Breadcrumbs
          items={[
            { label: "Machines", href: "/machines" },
            { label: categoryName },
          ]}
        />

        {/* Model Switcher Tabs (Only if category has multiple models) */}
        {models.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-white/10 pb-6">
            <span className="font-mono text-xs text-[#A7ADB5] uppercase tracking-wider mr-2 font-semibold">
              Select Model:
            </span>
            <div className="flex flex-wrap gap-2">
              {models.map((m) => {
                const isActive = m.slug === activeModel.slug;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      setActiveSlug(m.slug);
                      window.history.replaceState(null, "", `#${m.slug}`);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide transition-all ${
                      isActive
                        ? "bg-[#C82032] text-white shadow-lg shadow-[#C82032]/25 font-bold"
                        : "bg-[#191B1D] text-[#A7ADB5] hover:text-white border border-white/10 hover:border-white/20"
                    }`}
                  >
                    {m.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 2. Clean Two-Column Product Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (Content, Headings, CTAs) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Small red product category label */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C82032]"></span>
              <span className="font-mono text-xs font-semibold tracking-wider text-[#C82032] uppercase">
                {categoryName}
              </span>
            </div>

            {/* Machine model name as main heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase text-white tracking-tight leading-tight">
              {activeModel.name}
            </h1>

            {/* One short subtitle describing primary purpose */}
            <p className="text-base sm:text-lg text-[#A7ADB5] font-normal leading-relaxed">
              {activeModel.tagline}
            </p>

            {/* Concise description limited to 2–3 lines */}
            <p className="text-sm text-white/90 leading-relaxed font-normal max-w-xl">
              {activeModel.shortDescription || activeModel.fullDescription}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href={`/contact?machine=${encodeURIComponent(activeModel.name)}`}
                className="px-7 py-3.5 bg-[#C82032] hover:bg-[#D92639] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#C82032]/25 active:scale-95"
              >
                Request a Quote
              </Link>

              <a
                href="#specs"
                className="px-6 py-3.5 bg-[#191B1D] hover:bg-white/10 text-white border border-white/15 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                View Specifications
              </a>
            </div>
          </div>

          {/* Right Column: One Large High-Quality Machine Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#151719] shadow-2xl">
              <Image
                src={activeModel.image}
                alt={`${activeModel.name} Industrial Stone-Processing Machine`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Four Essential Specifications in a Simple Horizontal Row / Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {essentialSpecs.map((spec, i) => (
            <div
              key={i}
              className="bg-[#151719] border border-white/10 p-5 sm:p-6 rounded-xl space-y-1.5 shadow-sm"
            >
              <span className="font-mono text-[11px] text-[#A7ADB5] uppercase tracking-wider block">
                {spec.label}
              </span>
              <span
                className={`font-display text-xl sm:text-2xl font-semibold block tracking-tight ${
                  spec.highlight ? "text-[#C82032]" : "text-white"
                }`}
              >
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Simplified Key Features Section (3 to 4 items) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-white tracking-tight">
            Key Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {keyFeatures.map((feat, i) => (
            <div
              key={i}
              className="bg-[#151719] border border-white/10 p-6 rounded-2xl space-y-3 shadow-md"
            >
              {/* Minimal Industrial Red Icon Indicator */}
              <div className="w-8 h-8 rounded-lg bg-[#C82032]/10 border border-[#C82032]/25 text-[#C82032] flex items-center justify-center font-mono text-xs font-bold">
                0{i + 1}
              </div>
              <h3 className="font-display text-lg font-semibold uppercase text-white tracking-wide">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Separate Clean Technical Specifications Section */}
      <div id="specs" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6 scroll-mt-36">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-[#C82032] uppercase block">
              Factory Documentation
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-white tracking-tight">
              Technical Specifications — {activeModel.name}
            </h2>
          </div>

          <a
            href="/documents/ln-engineering-catalogue-optimized.pdf"
            download
            className="text-xs font-mono font-medium text-[#A7ADB5] hover:text-white inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Download Official PDF Specs &rarr;</span>
          </a>
        </div>

        {/* Clean Two-Column Specification Table with Subtle Dividers */}
        <div className="bg-[#151719] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 divide-y divide-white/5 md:divide-y-0">
            {/* Split specs into two balanced columns */}
            <div className="divide-y divide-white/5">
              {activeModel.specs
                .slice(0, Math.ceil(activeModel.specs.length / 2))
                .map((spec, i) => (
                  <div key={i} className="py-3.5 flex justify-between gap-4 text-xs sm:text-sm">
                    <span className="text-[#A7ADB5] font-medium">{spec.label}</span>
                    <span
                      className={`font-mono text-right font-medium ${
                        spec.highlight ? "text-white font-semibold" : "text-[#E8E5DF]"
                      }`}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
            </div>

            <div className="divide-y divide-white/5">
              {activeModel.specs
                .slice(Math.ceil(activeModel.specs.length / 2))
                .map((spec, i) => (
                  <div key={i} className="py-3.5 flex justify-between gap-4 text-xs sm:text-sm">
                    <span className="text-[#A7ADB5] font-medium">{spec.label}</span>
                    <span
                      className={`font-mono text-right font-medium ${
                        spec.highlight ? "text-white font-semibold" : "text-[#E8E5DF]"
                      }`}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Expandable Wire Configuration Accordion (For multiwire slab configurations) */}
        {(activeModel.thickSlabConfigs || activeModel.standardSlabConfigs) && (
          <details className="group bg-[#151719] border border-white/10 rounded-2xl overflow-hidden mt-6 transition-all">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-display text-lg font-semibold uppercase text-white hover:text-[#C82032] transition-colors select-none">
              <span className="flex items-center gap-2">
                <span>Wire Configuration &amp; Slab Thickness Matrix</span>
                <span className="text-xs font-mono text-[#A7ADB5] font-normal normal-case">
                  (Click to expand detailed wire counts)
                </span>
              </span>
              <span className="font-mono text-sm text-[#A7ADB5] group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>

            <div className="p-6 pt-0 border-t border-white/5 space-y-6">
              {activeModel.standardSlabConfigs && (
                <div className="space-y-3 pt-4">
                  <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider block">
                    Standard Commercial Slab Yield (20 mm – 40 mm):
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                    {activeModel.standardSlabConfigs.map((cfg, i) => (
                      <div key={i} className="bg-[#101112] border border-white/10 p-3 rounded-xl">
                        <span className="text-[#A7ADB5] block text-[11px]">{cfg.thickness}</span>
                        <span className="text-[#C82032] font-bold text-sm block mt-0.5">{cfg.wireCount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeModel.thickSlabConfigs && (
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider block">
                    Thick Slab Pitch Matrix (50 mm – 100 mm):
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs font-mono">
                    {activeModel.thickSlabConfigs.map((cfg, i) => (
                      <div key={i} className="bg-[#101112] border border-white/10 p-3 rounded-xl">
                        <span className="text-[#A7ADB5] block text-[11px]">{cfg.thickness}</span>
                        <span className="text-white font-bold text-sm block mt-0.5">{cfg.wireCount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </details>
        )}
      </div>

      {/* 6. Clean Restrained Bottom Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        <div className="bg-[#151719] border border-white/10 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-xl">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-white tracking-tight">
            Need the right machine for your production?
          </h3>
          <p className="text-sm sm:text-base text-[#A7ADB5] max-w-xl mx-auto leading-relaxed">
            Speak with LN Engineering about your stone-cutting requirements, custom trolley dimensions, or daily output specifications.
          </p>
          <div className="pt-2">
            <Link
              href={`/contact?machine=${encodeURIComponent(activeModel.name)}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C82032] hover:bg-[#D92639] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#C82032]/25 active:scale-95"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
