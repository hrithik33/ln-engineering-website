import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductModel } from "@/data/products";

interface ModelComparisonTableProps {
  models: ProductModel[];
  title?: string;
  subtitle?: string;
  caption?: string;
  ariaLabel?: string;
  quoteSectionSubtitle?: string;
  className?: string;
}

function getModelTierBadge(modelId: string) {
  switch (modelId) {
    case "ln-2500-promaxx":
      return { text: "Flagship + IoT", style: "bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/30" };
    case "ln-2500-pro":
      return { text: "PLC Automation", style: "bg-white/10 text-white/90 border-white/10" };
    case "ln-2500":
      return { text: "Heavy-Duty Base", style: "bg-white/5 text-[#A7ADB5] border-white/5" };
    case "ln-22-wire":
      return { text: "Flagship (100 HP)", style: "bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/30" };
    case "ln-12-wire":
      return { text: "Commercial Benchmark", style: "bg-white/10 text-white/90 border-white/10" };
    case "ln-6-wire":
      return { text: "Thick Slab Master", style: "bg-white/5 text-[#A7ADB5] border-white/5" };
    case "ln-cnc-2100-promaxx":
      return { text: "Siemens CNC (Flagship)", style: "bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/30" };
    case "ln-hori-2100":
      return { text: "Industrial PLC Arc", style: "bg-white/10 text-white/90 border-white/10" };
    default:
      return { text: "Precision Standard", style: "bg-white/5 text-[#A7ADB5] border-white/5" };
  }
}

/**
 * Format specification values cleanly:
 * - Pure boolean "Yes" -> check mark (✓)
 * - Pure boolean "No" -> dash (—)
 * - Qualified boolean "Yes (...)" -> check mark (✓) + detail
 * - Qualified boolean "No (...)" -> dash (—) + detail
 * - Non-boolean values -> formatted text (emphasized when different)
 */
function formatComparisonValue(value: string, isDifferent: boolean) {
  const trimmed = value.trim();
  const lower = trimmed.toLowerCase();

  // Pure boolean "Yes"
  if (lower === "yes") {
    return (
      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
        <span
          className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold text-xs shrink-0"
          aria-hidden="true"
        >
          ✓
        </span>
        <span className="text-xs font-sans text-emerald-300">Standard</span>
      </span>
    );
  }

  // Pure boolean "No"
  if (lower === "no") {
    return (
      <span
        className="inline-flex items-center text-[#555E68] font-mono text-base font-bold"
        aria-label="Not Included"
        title="Not Included"
      >
        —
      </span>
    );
  }

  // Starts with "Yes" (e.g. "Yes (Heavy Duty Bellow)")
  if (lower.startsWith("yes")) {
    const detail = trimmed.replace(/^yes\s*\(?|\)?$/gi, "").trim();
    return (
      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
        <span
          className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold text-xs shrink-0"
          aria-hidden="true"
        >
          ✓
        </span>
        <span className="text-white text-xs sm:text-sm font-sans">{detail || "Yes"}</span>
      </span>
    );
  }

  // Starts with "No" (e.g. "No (Analog indicators)")
  if (lower.startsWith("no")) {
    const detail = trimmed.replace(/^no\s*\(?|\)?$/gi, "").trim();
    return (
      <span className="inline-flex items-center gap-1.5 text-[#7E8691] font-sans">
        <span className="font-mono text-base font-bold text-[#555E68] shrink-0" aria-hidden="true">
          —
        </span>
        <span className="text-xs">{detail || "No"}</span>
      </span>
    );
  }

  // Non-boolean value
  return (
    <span
      className={`text-xs sm:text-sm font-sans transition-colors ${
        isDifferent ? "text-white font-semibold" : "text-[#A7ADB5]"
      }`}
    >
      {trimmed}
    </span>
  );
}

export default function ModelComparisonTable({
  models,
  title = "COMPARE MONO WIRE SAW MODELS",
  subtitle = "Side-by-side technical evaluation across all three 5th generation configurations to help you select the exact power, automation level, and telemetry for your stone processing line.",
  caption,
  ariaLabel,
  quoteSectionSubtitle,
  className = "",
}: ModelComparisonTableProps) {
  if (!models || models.length === 0) {
    return null;
  }

  // Build unified list of spec labels in order of appearance
  const allLabels: string[] = [];
  for (const model of models) {
    for (const spec of model.specs) {
      if (!allLabels.includes(spec.label)) {
        allLabels.push(spec.label);
      }
    }
  }

  return (
    <section
      id="compare-models"
      className={`bg-[#0E1012] border-t border-[#202326] py-16 sm:py-24 text-white ${className}`}
      aria-label={ariaLabel || title}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Difference Legend */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] text-[11px] font-mono uppercase tracking-widest font-semibold mb-3">
              Side-by-Side Model Matrix
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#A7ADB5] mt-2 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7E8691] bg-[#141619] border border-[#202326] px-4 py-2.5 rounded-xl">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <span className="text-[#D1D5DB]">Values Differ</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Included</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#555E68] font-bold">—</span>
              <span>Not Included</span>
            </span>
          </div>
        </div>

        {/* Mobile Horizontal Scroll Cue */}
        <div className="flex items-center justify-between text-xs text-[#7E8691] font-mono mb-2 md:hidden px-1">
          <span className="inline-flex items-center gap-1.5 text-[#EF4444]">
            <svg
              className="w-4 h-4 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
            Swipe horizontally to compare
          </span>
          <span className="text-[11px] text-[#555E68]">Sticky spec column</span>
        </div>

        {/* Responsive Comparison Table Container */}
        <div className="overflow-x-auto relative rounded-2xl border border-[#202326] bg-[#0E1012] shadow-2xl">
          <table className="w-full text-left border-separate border-spacing-0 min-w-[720px]">
            <caption className="sr-only">
              {caption || `${title} Technical Comparison Table`}
            </caption>

            {/* Table Header: Models side-by-side */}
            <thead>
              <tr>
                {/* Sticky Parameter Header */}
                <th
                  scope="col"
                  className="sticky left-0 z-20 bg-[#141619] border-b border-r border-[#202326] p-4 sm:p-6 w-52 sm:w-64 min-w-[200px] text-left align-top shadow-[2px_0_8px_rgba(0,0,0,0.5)]"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#EF4444] font-semibold block">
                      Engineering Specs
                    </span>
                    <span className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-white block">
                      Parameter
                    </span>
                    <span className="text-[11px] text-[#7E8691] font-sans block">
                      {allLabels.length} Verified Items
                    </span>
                  </div>
                </th>

                {/* Model Column Headers */}
                {models.map((model) => {
                  const tier = getModelTierBadge(model.id);
                  const isFlagship = tier.style.includes("#EF4444");

                  return (
                    <th
                      key={model.id}
                      scope="col"
                      className={`bg-[#101214] border-b border-r last:border-r-0 border-[#202326] p-4 sm:p-6 min-w-[220px] sm:min-w-[260px] text-left align-top ${
                        isFlagship ? "relative" : ""
                      }`}
                    >
                      {/* Flagship Accent Top Bar */}
                      {isFlagship && (
                        <div
                          className="absolute top-0 left-0 right-0 h-1 bg-[#EF4444]"
                          aria-hidden="true"
                        />
                      )}

                      {/* Model Image Preview */}
                      <div className="relative w-full h-24 sm:h-28 rounded-lg overflow-hidden border border-[#202326] mb-3 bg-[#191B1D]">
                        <Image
                          src={model.image}
                          alt={model.name}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover"
                        />
                      </div>

                      {/* Tier Badge */}
                      <div className="mb-1.5">
                        <span
                          className={`inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border font-semibold ${tier.style}`}
                        >
                          {tier.text}
                        </span>
                      </div>

                      {/* Model Name */}
                      <div className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-1">
                        {model.name}
                      </div>

                      {/* Tagline */}
                      <p className="text-xs text-[#A7ADB5] font-sans line-clamp-2 leading-relaxed mb-3">
                        {model.tagline}
                      </p>

                      {/* Top Quick Action */}
                      <Link
                        href={`/contact?machine=${encodeURIComponent(model.name)}`}
                        className={`inline-flex items-center justify-center w-full min-h-[38px] px-3 py-2 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 ${
                          isFlagship
                            ? "bg-[#EF4444] hover:bg-[#DC2626] text-white shadow-md shadow-[#EF4444]/20 focus-visible:ring-[#EF4444]"
                            : "bg-[#191B1D] hover:bg-[#202326] text-white border border-[#202326] hover:border-white/20 focus-visible:ring-white/20"
                        }`}
                      >
                        <span>Inquire</span>
                        <span className="ml-1" aria-hidden="true">
                          &rarr;
                        </span>
                      </Link>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Table Body: Specifications Rows */}
            <tbody>
              {allLabels.map((label, rowIndex) => {
                const values = models.map((m) => {
                  const spec = m.specs.find((s) => s.label === label);
                  return spec ? spec.value : "—";
                });

                // Check if values differ across models
                const uniqueValues = new Set(values.map((v) => v.trim().toLowerCase()));
                const isDifferent = uniqueValues.size > 1;

                return (
                  <tr
                    key={label}
                    className={`group transition-colors ${
                      isDifferent
                        ? "bg-[#EF4444]/[0.025]"
                        : rowIndex % 2 === 1
                        ? "bg-white/[0.01]"
                        : "bg-transparent"
                    }`}
                  >
                    {/* Sticky Parameter Name Column */}
                    <th
                      scope="row"
                      className={`sticky left-0 z-10 border-b border-r border-[#202326] px-4 sm:px-6 py-3.5 sm:py-4 text-left transition-colors shadow-[2px_0_6px_rgba(0,0,0,0.4)] ${
                        isDifferent
                          ? "bg-[#141619] group-hover:bg-[#1A1D21]"
                          : "bg-[#0E1012] group-hover:bg-[#15171B]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          {isDifferent ? (
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"
                              title="Differs across models"
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-[#374151] shrink-0"
                              aria-hidden="true"
                            />
                          )}
                          <span
                            className={`text-xs sm:text-sm font-sans ${
                              isDifferent ? "text-white font-medium" : "text-[#D1D5DB]"
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                        {isDifferent && (
                          <span className="hidden xl:inline-block text-[9px] font-mono uppercase tracking-wider text-[#EF4444] bg-[#EF4444]/10 border border-[#EF4444]/25 px-1.5 py-0.5 rounded">
                            Differs
                          </span>
                        )}
                      </div>
                    </th>

                    {/* Model Value Columns */}
                    {models.map((model) => {
                      const spec = model.specs.find((s) => s.label === label);
                      const rawValue = spec ? spec.value : "—";

                      return (
                        <td
                          key={model.id + "-" + label}
                          className={`border-b border-r last:border-r-0 border-[#202326] px-4 sm:px-6 py-3.5 sm:py-4 transition-colors ${
                            isDifferent
                              ? "bg-[#121417]/90 group-hover:bg-[#1A1D21]"
                              : "bg-[#0E1012] group-hover:bg-[#15171B]"
                          }`}
                        >
                          {formatComparisonValue(rawValue, isDifferent)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>

            {/* Table Footer: Direct In-Column Quotation CTAs */}
            <tfoot>
              <tr>
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-[#121417] border-t border-r border-[#202326] px-4 sm:px-6 py-5 text-left shadow-[2px_0_6px_rgba(0,0,0,0.5)]"
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold uppercase text-white font-sans block">
                      Quotation & Lead Time
                    </span>
                    <span className="text-[10px] text-[#7E8691] font-mono block">
                      Custom factory pricing
                    </span>
                  </div>
                </th>

                {models.map((model) => {
                  const tier = getModelTierBadge(model.id);
                  const isFlagship = tier.style.includes("#EF4444");

                  return (
                    <td
                      key={"cta-" + model.id}
                      className="bg-[#101214] border-t border-r last:border-r-0 border-[#202326] px-4 sm:px-6 py-5 align-middle"
                    >
                      <Link
                        href={`/contact?machine=${encodeURIComponent(model.name)}`}
                        className={`inline-flex items-center justify-center w-full min-h-[44px] px-4 py-2.5 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 ${
                          isFlagship
                            ? "bg-[#EF4444] hover:bg-[#DC2626] text-white shadow-lg shadow-[#EF4444]/20 focus-visible:ring-[#EF4444]"
                            : "bg-[#191B1D] hover:bg-[#202326] text-white border border-[#202326] hover:border-white/20 focus-visible:ring-white/20"
                        }`}
                      >
                        <span>Quote for {model.name}</span>
                        <span className="ml-1.5" aria-hidden="true">
                          &rarr;
                        </span>
                      </Link>
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Dedicated Below-Table Quotation Section */}
        <div className="mt-12 bg-[#121417] border border-[#202326] rounded-2xl p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#EF4444] font-semibold block mb-1">
              Direct Manufacturer Quotation Desk
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              Request a Quotation for Your Production Line
            </h3>
            <p className="text-xs sm:text-sm text-[#A7ADB5] mt-1.5 leading-relaxed">
              {quoteSectionSubtitle ||
                "Select your preferred equipment configuration to receive a comprehensive technical proposal, civil foundation layout, and FOB/CIF delivery timeline."}
            </p>
          </div>

          <div
            className={`grid gap-4 ${
              models.length === 2
                ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {models.map((model) => {
              const tier = getModelTierBadge(model.id);
              const isFlagship = tier.style.includes("#EF4444");

              return (
                <div
                  key={"card-" + model.id}
                  className={`bg-[#15171A] border rounded-xl p-5 flex flex-col justify-between transition-all ${
                    isFlagship
                      ? "border-[#EF4444]/40 shadow-lg shadow-[#EF4444]/5"
                      : "border-[#202326] hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-display text-lg font-bold uppercase text-white">
                        {model.name}
                      </h4>
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold ${tier.style}`}
                      >
                        {tier.text}
                      </span>
                    </div>
                    <p className="text-xs text-[#A7ADB5] leading-relaxed mb-4">
                      {model.shortDescription}
                    </p>
                  </div>

                  <Link
                    href={`/contact?machine=${encodeURIComponent(model.name)}`}
                    className={`inline-flex items-center justify-center min-h-[44px] w-full px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors text-center ${
                      isFlagship
                        ? "bg-[#EF4444] hover:bg-[#DC2626] text-white shadow-md shadow-[#EF4444]/20"
                        : "bg-[#191B1D] hover:bg-[#202326] text-white border border-[#202326] hover:border-white/20"
                    }`}
                  >
                    Request a Quotation for {model.name} &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
