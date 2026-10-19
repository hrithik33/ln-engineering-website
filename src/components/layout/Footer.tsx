import React from "react";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0C0E] text-[#9EA3AC] border-t border-white/10 text-sm overflow-hidden" role="contentinfo">
      {/* Main 4-Column Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Company Information */}
          <div className="space-y-4">
            {/* Brand Identity Block */}
            <Link 
              href="/" 
              className="inline-flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C82032] rounded-lg p-0.5"
            >
              <div className="w-11 h-11 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/images/brand/logo.webp"
                  alt="LN Engineering Monogram"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display text-lg font-semibold tracking-tight text-white block leading-tight group-hover:text-red-100 transition-colors">
                  LN ENGINEERING
                </span>
                <span className="font-mono text-[10px] text-[#7E8691] tracking-wider uppercase block mt-0.5">
                  {company.legalName}
                </span>
              </div>
            </Link>

            {/* Concise Company Description */}
            <p className="text-xs text-[#8E95A0] leading-relaxed">
              Established Indian manufacturer of high-precision stone processing machinery based in Rajsamand, Rajasthan. Known as the &ldquo;Accuracy Master&rdquo;, LN Engineering builds advanced Multiwire, Mono Wire, and CNC wire sawing solutions for global quarries and processing facilities.
            </p>

            {/* Factory & Works Address */}
            <div className="pt-3 border-t border-white/10 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 font-semibold block">
                Head Office & Works
              </span>
              <p className="text-xs text-[#7E8691] leading-relaxed">
                {company.address.street}, {company.address.city} ({company.address.district}), {company.address.state} — {company.address.pincode}, India
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141618] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#C82032] hover:border-[#C82032]/60 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C82032]"
                aria-label="Follow LN Engineering on Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141618] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#C82032] hover:border-[#C82032]/60 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C82032]"
                aria-label="Follow LN Engineering on X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${company.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141618] border border-white/10 flex items-center justify-center text-[#25D366] hover:border-[#25D366]/60 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#25D366]"
                aria-label="Contact LN Engineering on WhatsApp"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.523-4.477 10-10 10-1.745 0-3.38-.451-4.81-1.24l-5.19 1.359 1.385-5.06c-.886-1.496-1.385-3.238-1.385-5.059 0-5.523 4.477-10 10-10s10 4.477 10 10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Machinery Division */}
          <nav className="space-y-4" aria-label="Machinery Division">
            <div className="border-b border-white/10 pb-2">
              <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
                Machinery Division
              </h3>
            </div>
            
            <ul className="space-y-3.5 text-xs">
              <li>
                <Link 
                  href="/machines/mono-wire-saw" 
                  className="group block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded p-0.5"
                >
                  <span className="font-medium text-white group-hover:text-[#EF4444] transition-colors block leading-snug">
                    Mono Wire Saw Machines
                  </span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] mt-0.5">
                    LN 2500 • LN 2500 PRO • PROMAXX
                  </span>
                </Link>
              </li>

              <li>
                <Link 
                  href="/machines/multiwire-saw" 
                  className="group block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded p-0.5"
                >
                  <span className="font-medium text-white group-hover:text-[#EF4444] transition-colors block leading-snug">
                    Multiwire Saw Machines
                  </span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] mt-0.5">
                    LN 6 Wire • LN 12 Wire • LN 22 Wire
                  </span>
                </Link>
              </li>

              <li>
                <Link 
                  href="/machines/cnc-wire-profile" 
                  className="group block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded p-0.5"
                >
                  <span className="font-medium text-white group-hover:text-[#EF4444] transition-colors block leading-snug">
                    CNC Wire Profile Machines
                  </span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] mt-0.5">
                    LN HORI 2100 • LN CNC 2100 PROMAXX
                  </span>
                </Link>
              </li>

              <li>
                <Link 
                  href="/products/wire-rope" 
                  className="group block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded p-0.5"
                >
                  <span className="font-medium text-white group-hover:text-[#EF4444] transition-colors flex items-center gap-2 leading-snug">
                    <span>Diamond Wire Rope</span>
                    <span className="text-[9px] font-mono font-normal uppercase text-[#EF4444] bg-[#EF4444]/10 px-1.5 py-0.5 rounded border border-[#EF4444]/20">
                      Consumable
                    </span>
                  </span>
                  <span className="block text-[11px] font-mono text-[#9CA3AF] mt-0.5">
                    35 Beads/M • 11.5mm High-Tensile Core
                  </span>
                </Link>
              </li>

              {/* Refined Red Catalog Link with Arrow */}
              <li className="pt-1">
                <Link 
                  href="/machines" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EF4444] hover:text-red-400 transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded"
                >
                  <span>Explore Full Machinery Range</span>
                  <svg 
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Company & Inquiries */}
          <nav className="space-y-4" aria-label="Company & Inquiries">
            <div className="border-b border-white/10 pb-2">
              <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
                Company & Inquiries
              </h3>
            </div>

            <ul className="space-y-2.5 text-xs">
              <li>
                <Link 
                  href="/about" 
                  className="text-zinc-300 hover:text-white transition-colors block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C82032] rounded"
                >
                  About Us & Heritage
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-zinc-300 hover:text-white transition-colors block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C82032] rounded"
                >
                  Request a Quotation
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact#location" 
                  className="text-zinc-300 hover:text-white transition-colors block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C82032] rounded"
                >
                  Factory Location & Directions
                </Link>
              </li>

              {/* Compact Product Catalogue Download Links with PDF Icon */}
              <li className="pt-2 space-y-1.5">
                <a
                  href="/documents/ln-engineering-catalogue-optimized.pdf"
                  download="LN_Engineering_Master_Catalogue.pdf"
                  className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#141618] border border-white/10 hover:border-[#EF4444]/60 hover:bg-[#181A1C] text-xs text-zinc-300 hover:text-white transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] w-full"
                  aria-label="Master Catalogue (Lightweight 3.8 MB PDF)"
                >
                  <svg 
                    className="w-4 h-4 text-[#EF4444] shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-2v1.5h2c.55 0 1-.45 1-1s-.45-.5-1-.5zm0-3h-2v1.5h2c.55 0 1-.45 1-1s-.45-.5-1-.5zm5 4.5h-1.5v-4h1.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zm4.5-2.5h-1.5v1h1.5v1.5h-1.5V14h-1.5V8.5h3v1.5z"/>
                  </svg>
                  <div>
                    <span className="block font-medium text-white group-hover:text-[#EF4444] transition-colors leading-none">
                      Master Catalogue
                    </span>
                    <span className="block text-[10px] text-[#9CA3AF] font-mono mt-0.5">
                      Fast Web Edition • 3.8 MB PDF
                    </span>
                  </div>
                </a>

                <a
                  href="/documents/product-catalogue.pdf"
                  download="LN_Engineering_Product_Catalogue.pdf"
                  className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#0C0D0F] border border-white/5 hover:border-white/20 text-[11px] text-[#9CA3AF] hover:text-white transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white w-full"
                  aria-label="Product Catalogue (Print Edition 41 MB PDF)"
                >
                  <span className="text-[10px] font-mono">Print Edition • 41 MB PDF &rarr;</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 4: Direct Contact & Sales */}
          <div className="space-y-4">
            <div className="border-b border-white/10 pb-2">
              <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
                Direct Contact & Sales
              </h3>
            </div>

            <div className="space-y-3.5 text-xs">
              {/* Direct Inquiries */}
              <div className="space-y-1">
                <span className="text-[#9CA3AF] block text-[10px] font-mono uppercase tracking-wider">
                  Direct Inquiries:
                </span>
                <div className="flex flex-col gap-1.5">
                  <a 
                    href={`tel:${company.phones[0].number}`} 
                    className="text-white hover:text-[#EF4444] font-mono font-semibold inline-flex items-center text-sm py-1 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded"
                  >
                    {company.phones[0].display}
                  </a>
                  <a 
                    href={`tel:${company.phones[1].number}`} 
                    className="text-[#9CA3AF] hover:text-[#EF4444] font-mono inline-flex items-center text-xs py-1 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded"
                  >
                    {company.phones[1].display}
                  </a>
                </div>
              </div>

              {/* Technical Email */}
              <div className="space-y-1 pt-1">
                <span className="text-[#9CA3AF] block text-[10px] font-mono uppercase tracking-wider">
                  Technical Email:
                </span>
                <div className="flex flex-col gap-1.5">
                  <a 
                    href={`mailto:${company.emails[0].address}`} 
                    className="text-zinc-200 hover:text-[#EF4444] inline-flex items-center font-mono text-xs break-all py-1 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded"
                  >
                    {company.emails[0].address}
                  </a>
                  <a 
                    href={`mailto:${company.emails[1].address}`} 
                    className="text-[#9CA3AF] hover:text-[#EF4444] inline-flex items-center font-mono text-xs break-all py-1 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded"
                  >
                    {company.emails[1].address}
                  </a>
                </div>
              </div>

              {/* South India Sales Offices */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="text-[#EF4444] font-semibold block text-[10px] font-mono uppercase tracking-wider">
                  South India Sales Offices
                </span>
                
                <div className="text-[11px] leading-snug">
                  <span className="text-zinc-200 font-medium block">Ongole, Andhra Pradesh:</span>
                  <span className="text-[#9CA3AF] block pt-0.5">
                    {company.regionalContacts[0].contactPerson}:{" "}
                    <a 
                      href={`tel:${company.regionalContacts[0].phone}`} 
                      className="text-white hover:text-[#EF4444] font-mono inline-block py-1 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded"
                    >
                      {company.regionalContacts[0].phoneDisplay}
                    </a>
                  </span>
                </div>

                <div className="text-[11px] leading-snug">
                  <span className="text-zinc-200 font-medium block">Martur, Andhra Pradesh:</span>
                  <span className="text-[#9CA3AF] block pt-0.5">
                    {company.regionalContacts[1].contactPerson}:{" "}
                    <a 
                      href={`tel:${company.regionalContacts[1].phone}`} 
                      className="text-white hover:text-[#EF4444] font-mono inline-block py-1 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded"
                    >
                      {company.regionalContacts[1].phoneDisplay}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discrepancy & Technical Transparency Notice Bar */}
      <div className="bg-[#08090B] border-t border-white/10 py-3.5 px-4 sm:px-6 lg:px-8 text-[11px] text-[#7E8691]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p>
            <span className="text-white font-medium">Data Integrity Notice:</span> Specifications verified from official LN Engineering catalogues. Founded 1993 • &ldquo;Since 1994&rdquo; Brand Identity.
          </p>
          <div className="flex gap-4 font-mono text-[10px] uppercase text-[#7E8691]">
            <Link href="/about" className="hover:text-white transition-colors">
              Heritage Documentation
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Notice
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Request Technical Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Lower Copyright Bar */}
      <div className="bg-[#050607] py-4 px-4 sm:px-6 lg:px-8 text-xs text-[#7E8691] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2.5">
          <div className="font-mono text-[11px]">
            &copy; {currentYear} {company.legalName} ({company.name}). All rights reserved.
          </div>
          <div className="flex items-center space-x-3 text-[11px] font-mono text-[#7E8691]">
            <span>Rajsamand, Rajasthan, India</span>
            <span>•</span>
            <span className="text-[#9EA3AC]">{company.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
