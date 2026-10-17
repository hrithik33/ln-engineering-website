import React from "react";
import { SpecificationItem } from "@/data/products";

interface SpecTableProps {
  specs: SpecificationItem[];
  title?: string;
  theme?: "dark" | "light";
  className?: string;
}

export default function SpecTable({
  specs,
  title,
  theme = "dark",
  className = "",
}: SpecTableProps) {
  const isDark = theme === "dark";

  return (
    <div className={`overflow-hidden rounded-2xl border ${isDark ? "border-white/10 bg-[#191B1D]" : "border-[#E5E5E5] bg-white"} ${className}`}>
      {title && (
        <div className={`px-6 py-4 border-b flex items-center justify-between ${isDark ? "border-white/10 bg-[#101112]" : "border-[#E5E5E5] bg-[#F8F7F4]"}`}>
          <h3 className={`font-display text-base font-semibold uppercase tracking-wider ${isDark ? "text-white" : "text-[#101112]"}`}>
            {title}
          </h3>
          <span className="text-[10px] text-[#A7ADB5] uppercase font-mono tracking-widest">
            Verified Specs
          </span>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className={`border-b ${isDark ? "border-white/10 bg-[#141618] text-[#A7ADB5]" : "border-[#E5E5E5] bg-[#F0EEEA] text-[#6B7280]"}`}>
              <th scope="col" className="py-3 px-5 font-mono font-semibold uppercase tracking-wider text-[11px] w-1/2">
                Technical Parameter
              </th>
              <th scope="col" className="py-3 px-5 font-mono font-semibold uppercase tracking-wider text-[11px] w-1/2">
                Specification Value
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDark ? "divide-white/10" : "divide-[#E5E5E5]"}`}>
            {specs.map((item, index) => (
              <tr
                key={item.label + index}
                className={`transition-colors ${
                  item.highlight
                    ? "bg-[#C82032]/10 hover:bg-[#C82032]/15"
                    : isDark
                    ? index % 2 === 1 ? "bg-white/[0.02] hover:bg-white/[0.05]" : "hover:bg-white/[0.04]"
                    : "hover:bg-gray-50"
                }`}
              >
                <td className={`py-3.5 px-5 font-medium ${isDark ? "text-[#F5F5F5]" : "text-[#202326]"}`}>
                  <div className="flex items-center gap-2">
                    {item.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C82032] inline-block flex-shrink-0" title="Key Parameter"></span>
                    )}
                    <span>{item.label}</span>
                  </div>
                </td>
                <td className={`py-3.5 px-5 font-mono ${isDark ? "text-white" : "text-[#101112]"}`}>
                  <span className={`font-semibold ${item.highlight ? "text-[#C82032]" : ""}`}>
                    {item.value}
                  </span>
                  {item.note && (
                    <span className="block text-[10px] text-[#A7ADB5] font-sans italic mt-0.5">
                      *{item.note}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
