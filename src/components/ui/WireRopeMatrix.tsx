import React from "react";
import Link from "next/link";

interface BondVariant {
  name: string;
  badge: string;
  badgeStyle: string;
  application: string;
  bondType: string;
  beadDensity: string;
  diameter: string;
  wireSpeed: string;
  waterFlow: string;
  feedRate: string;
  jointType: string;
  wearThreshold: string;
  stoneHardness: string;
}

const variants: BondVariant[] = [
  {
    name: "Granite Sintered Wire",
    badge: "Heavy Quarry & Mono Wire",
    badgeStyle: "bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/30",
    application: "Hard Granite, Quartzite, Gneiss, and Basalt block dressing & squaring",
    bondType: "Sintered Cobalt-Bronze Matrix (High Diamond Retention)",
    beadDensity: "35 Beads / Meter (Verified Catalogue Standard)",
    diameter: "11.5 mm (Standard) • 10.5 mm on request",
    wireSpeed: "22 – 28 m/s",
    waterFlow: "35 – 45 L/min continuous lubrication",
    feedRate: "2 – 4 m²/hr (varies with granite hardness class)",
    jointType: "High-pressure copper/steel crimped joint",
    wearThreshold: "Replace when bead diameter approaches steel core crimp threshold (≤ 8.5 mm)",
    stoneHardness: "Mohs 6 – 7+ (Abrasive and hard igneous rock)",
  },
  {
    name: "Marble Electroplated Wire",
    badge: "Smooth Finish & Calcite",
    badgeStyle: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    application: "Marble, Limestone, Travertine, and Sandstone precision slicing",
    bondType: "Electroplated Nickel-Bonded Diamond Matrix",
    beadDensity: "35 – 37 Beads / Meter",
    diameter: "10.5 mm – 11.5 mm",
    wireSpeed: "28 – 34 m/s",
    waterFlow: "25 – 35 L/min continuous flush",
    feedRate: "6 – 12 m²/hr (high-yield soft stone slicing)",
    jointType: "Precision threaded or cold-crimp sleeve",
    wearThreshold: "Replace upon visible diamond layer stripping or core fatigue",
    stoneHardness: "Mohs 3 – 5 (Calcareous and sedimentary stone)",
  },
  {
    name: "Multiwire Thin Kerf Wire",
    badge: "Commercial Gangsaw Slabs",
    badgeStyle: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    application: "High-capacity Multiwire Gangsaws (LN 6, 12, and 22 wire machines)",
    bondType: "Micro-Sintered Impregnated Bond (Thin Kerf)",
    beadDensity: "36 Beads / Meter",
    diameter: "7.3 mm / 8.5 mm / 11.5 mm variants",
    wireSpeed: "26 – 32 m/s",
    waterFlow: "20 – 30 L/min per wire line",
    feedRate: "Optimized for simultaneous multi-slab downward pass",
    jointType: "Endless loop or high-tensile micro-crimp",
    wearThreshold: "Inspect bead taper; replace when kerf narrows below permissible guide drum tolerance",
    stoneHardness: "Multi-purpose (Granite, Engineered stone & hard marble)",
  },
];

const specRows: { label: string; key: keyof BondVariant; highlight?: boolean }[] = [
  { label: "Target Application", key: "application" },
  { label: "Bond Matrix Technology", key: "bondType", highlight: true },
  { label: "Bead Density", key: "beadDensity", highlight: true },
  { label: "Standard Diameters", key: "diameter" },
  { label: "Recommended Wire Speed", key: "wireSpeed", highlight: true },
  { label: "Water Cooling Flow", key: "waterFlow" },
  { label: "Cutting Feed Rate", key: "feedRate" },
  { label: "Joint / Connection", key: "jointType" },
  { label: "Stone Hardness Class", key: "stoneHardness" },
  { label: "Replacement Threshold", key: "wearThreshold" },
];

export default function WireRopeMatrix() {
  return (
    <section
      id="wire-rope-matrix"
      className="bg-[#0E1012] border-t border-[#202326] py-16 sm:py-24 text-white"
      aria-label="Diamond Wire Rope Specification and Bond Matrix"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] text-[11px] font-mono uppercase tracking-widest font-semibold mb-3">
              Consumable Specification Matrix
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">
              DIAMOND WIRE ROPE BOND &amp; SPECIFICATION MATRIX
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] mt-2 max-w-2xl leading-relaxed">
              Side-by-side engineering comparison across granite sintered, marble electroplated, and multiwire thin-kerf diamond wire formulations to maximize cutting throughput and bead lifespan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7E8691] bg-[#141619] border border-[#202326] px-4 py-2.5 rounded-xl">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <span className="text-[#D1D5DB]">35 Beads/M Baseline</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>European Core Wire</span>
            </span>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto relative rounded-2xl border border-[#202326] bg-[#0E1012] shadow-2xl">
          <table className="w-full text-left border-separate border-spacing-0 min-w-[720px]">
            <caption className="sr-only">
              Diamond Wire Rope Bond Matrix and Technical Parameters
            </caption>

            {/* Table Header */}
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 z-20 bg-[#141619] border-b border-r border-[#202326] p-4 sm:p-6 w-52 sm:w-64 min-w-[200px] text-left align-top shadow-[2px_0_8px_rgba(0,0,0,0.5)]"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#EF4444] font-semibold block">
                      Wire Engineering
                    </span>
                    <span className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-white block">
                      Parameter
                    </span>
                    <span className="text-[11px] text-[#7E8691] font-sans block">
                      {specRows.length} Technical Metrics
                    </span>
                  </div>
                </th>

                {variants.map((v) => (
                  <th
                    key={v.name}
                    scope="col"
                    className="bg-[#101214] border-b border-r last:border-r-0 border-[#202326] p-4 sm:p-6 min-w-[240px] text-left align-top"
                  >
                    <div className="mb-2">
                      <span
                        className={`inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border font-semibold ${v.badgeStyle}`}
                      >
                        {v.badge}
                      </span>
                    </div>

                    <div className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-3">
                      {v.name}
                    </div>

                    <Link
                      href={`/contact?machine=${encodeURIComponent(`LN Diamond Wire Rope (${v.name})`)}`}
                      className="inline-flex items-center justify-center w-full min-h-[38px] px-3 py-2 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-all bg-[#191B1D] hover:bg-[#EF4444] text-white border border-[#202326] hover:border-[#EF4444] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]"
                    >
                      <span>Inquire for {v.name.split(" ")[0]}</span>
                      <span className="ml-1" aria-hidden="true">
                        &rarr;
                      </span>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {specRows.map((row, idx) => (
                <tr
                  key={row.label}
                  className={`group transition-colors ${
                    row.highlight
                      ? "bg-[#EF4444]/[0.02]"
                      : idx % 2 === 1
                      ? "bg-white/[0.01]"
                      : "bg-transparent"
                  }`}
                >
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 border-b border-r border-[#202326] px-4 sm:px-6 py-3.5 sm:py-4 text-left transition-colors shadow-[2px_0_6px_rgba(0,0,0,0.4)] ${
                      row.highlight
                        ? "bg-[#141619] group-hover:bg-[#1A1D21]"
                        : "bg-[#0E1012] group-hover:bg-[#15171B]"
                    }`}
                  >
                    <span
                      className={`text-xs sm:text-sm font-sans ${
                        row.highlight ? "text-white font-medium" : "text-[#D1D5DB]"
                      }`}
                    >
                      {row.label}
                    </span>
                  </th>

                  {variants.map((v) => (
                    <td
                      key={v.name + row.key}
                      className="border-b border-r last:border-r-0 border-[#202326] px-4 sm:px-6 py-3.5 sm:py-4 transition-colors bg-[#0E1012] group-hover:bg-[#15171B] text-xs sm:text-sm text-[#A7ADB5] font-sans"
                    >
                      <span className={row.highlight ? "text-white font-semibold" : "text-[#A7ADB5]"}>
                        {v[row.key]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            {/* Table Footer */}
            <tfoot>
              <tr>
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-[#121417] border-t border-r border-[#202326] px-4 sm:px-6 py-5 text-left shadow-[2px_0_6px_rgba(0,0,0,0.5)]"
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold uppercase text-white font-sans block">
                      Bulk Coil Quotation
                    </span>
                    <span className="text-[10px] text-[#7E8691] font-mono block">
                      Custom meters per spool
                    </span>
                  </div>
                </th>

                {variants.map((v) => (
                  <td
                    key={"cta-" + v.name}
                    className="bg-[#101214] border-t border-r last:border-r-0 border-[#202326] px-4 sm:px-6 py-5 align-middle"
                  >
                    <Link
                      href={`/contact?machine=${encodeURIComponent(`LN Diamond Wire Rope (${v.name})`)}`}
                      className="inline-flex items-center justify-center w-full min-h-[44px] px-4 py-2.5 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider transition-all bg-[#191B1D] hover:bg-[#EF4444] text-white border border-[#202326] hover:border-[#EF4444] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]"
                    >
                      <span>Quote for {v.name}</span>
                      <span className="ml-1.5" aria-hidden="true">
                        &rarr;
                      </span>
                    </Link>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Operating & Storage Recommendations Box */}
        <div className="mt-12 bg-[#121417] border border-[#202326] rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#A7ADB5]">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#EF4444] font-semibold block">
                Tensioning &amp; Alignment
              </span>
              <p className="leading-relaxed">
                Ensure hydraulic or pneumatic back-tension matches manufacturer specs (typically 250–350 kg for mono wire, 150–220 kg for multiwire lines). Misaligned flywheels accelerate uneven bead tapering.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block">
                Continuous Water Lubrication
              </span>
              <p className="leading-relaxed">
                Maintain steady water delivery directly at the wire entrance and exit slots. Insufficient water creates slurry buildup that overheats the cobalt matrix and causes premature bead detachment.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-blue-400 font-semibold block">
                Storage &amp; Coiling Guidance
              </span>
              <p className="leading-relaxed">
                Always store wire coils flat in dry indoor facilities. Never kink or bend wire tighter than a 150 mm radius, which creates irreversible micro-fractures in the high-tensile European core strands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
