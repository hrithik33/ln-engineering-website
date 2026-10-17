import React from "react";
import Link from "next/link";
import { company } from "@/data/company";

interface EnquiryBannerProps {
  title?: string;
  subtitle?: string;
  machinePreselect?: string;
  className?: string;
}

export default function EnquiryBanner({
  title = "Ready to Discuss Machine Specifications & Quotations?",
  subtitle = "Direct factory pricing, custom trolley sizing, site commissioning, and lifetime service support from India's stone engineering specialists.",
  machinePreselect,
  className = "",
}: EnquiryBannerProps) {
  const quoteUrl = machinePreselect
    ? `/contact?machine=${encodeURIComponent(machinePreselect)}`
    : "/contact";

  return (
    <section className={`bg-[#101112] border-y border-white/10 py-24 px-4 sm:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#191B1D] border border-white/10 rounded-full text-xs text-[#F5F5F5]">
          <span className="w-2 h-2 rounded-full bg-[#C82032] animate-pulse"></span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#A7ADB5]">LN Engineering Sales & Engineering Division</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold uppercase text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="text-sm md:text-base text-[#A7ADB5] max-w-2xl mx-auto leading-relaxed font-normal">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={quoteUrl}
            className="px-8 py-4 bg-[#C82032] hover:bg-[#E02D40] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-xl shadow-xl transition-all duration-200 active:scale-95"
          >
            Request Factory Quotation &rarr;
          </Link>

          <a
            href={`tel:${company.phones[0].number}`}
            className="px-6 py-4 bg-[#191B1D] hover:bg-[#202326] text-[#F5F5F5] hover:text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-xl border border-white/10 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-[#C82032]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call: {company.phones[0].display}</span>
          </a>

          <a
            href={`https://wa.me/919413638727?text=${encodeURIComponent(company.whatsapp.defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-[#191B1D] hover:bg-[#25D366] text-[#25D366] hover:text-white font-mono text-xs font-semibold uppercase tracking-wider rounded-xl border border-white/10 hover:border-[#25D366] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.523-4.477 10-10 10-1.745 0-3.38-.451-4.81-1.24l-5.19 1.359 1.385-5.06c-.886-1.496-1.385-3.238-1.385-5.059 0-5.523 4.477-10 10-10s10 4.477 10 10z"/>
            </svg>
            <span>WhatsApp Discussion</span>
          </a>
        </div>
      </div>
    </section>
  );
}
