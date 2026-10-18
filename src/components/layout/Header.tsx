"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [machinesDropdownOpen, setMachinesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMachinesDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-4 sm:pt-5 px-3 sm:px-6 transition-all duration-300">
      {/* Floating Glass Pill Navigation Container (Match reference screenshot: 1420px max-width, 30px pill radius, translucent) */}
      <div
        className={`pointer-events-auto max-w-[1420px] mx-auto rounded-[28px] sm:rounded-[32px] transition-all duration-300 ease-out ${
          scrolled
            ? "bg-[#101214]/92 backdrop-blur-2xl border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.6)] py-2.5 px-4 sm:px-7"
            : "bg-[#131518]/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.4)] py-2.5 sm:py-3 px-4 sm:px-7"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo touchpoint — Official Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C82032] rounded-lg"
            title="LN Engineering — Precision Stone Engineering"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl p-1.5 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/brand/logo.webp"
                alt="LN Engineering Official Logo"
                width={40}
                height={40}
                loading="eager"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#F5F5F5] transition-colors leading-none">
                LN ENGINEERING
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[#A7ADB5] uppercase mt-1 leading-none">
                Precision Stone Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-1"
            aria-label="Main Navigation"
          >
            {navigation.map((item) => {
              if (item.children) {
                const isChildActive = pathname.startsWith(item.href);
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setMachinesDropdownOpen(true)}
                    onMouseLeave={() => setMachinesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-xl ${
                        isChildActive
                          ? "text-white bg-[#22252A] shadow-sm font-bold"
                          : "text-[#A7ADB5] hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 text-[#A7ADB5] transition-transform duration-200 ${
                          machinesDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* Dropdown Menu */}
                    {machinesDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 pt-2 z-50">
                        <div className="bg-[#191B1D]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2 space-y-1 animate-fade-in-up">
                          {item.children.map((sub) => {
                            const isCurrent = pathname === sub.href;
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className={`block px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                                  isCurrent
                                    ? "text-white bg-[#C82032] font-semibold"
                                    : "text-[#A7ADB5] hover:text-white hover:bg-white/5"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-xl ${
                    isActive
                      ? "text-white bg-[#22252A] shadow-sm font-bold"
                      : "text-[#A7ADB5] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Phone & CTA Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${company.phones[0].number}`}
              className="px-2 py-1.5 text-xs font-mono text-[#C5CBD3] hover:text-white transition-colors inline-flex items-center gap-2 group"
              title="Call Technical Sales"
            >
              <svg
                className="w-3.5 h-3.5 text-[#C82032] transition-transform duration-200 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{company.phones[0].display}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 font-sans text-xs tracking-wider uppercase font-semibold text-white bg-[#C82032] hover:bg-[#D92639] rounded-xl shadow-lg shadow-[#C82032]/25 transition-all duration-200 active:scale-95"
            >
              REQUEST A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="/contact"
              className="min-h-[44px] px-3.5 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-white bg-[#C82032] rounded-xl flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Quote
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2.5 text-[#F5F5F5] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C82032]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 space-y-2 pb-2 animate-fade-in-up">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-white/5 pb-2">
                <Link
                  href={item.href}
                  className="min-h-[44px] flex items-center font-sans text-sm uppercase font-semibold text-white px-2 py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C82032] rounded"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-3 mt-1 space-y-1">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="min-h-[40px] flex items-center text-xs font-sans text-[#A7ADB5] hover:text-white px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C82032]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/contact"
                className="w-full min-h-[44px] flex items-center justify-center text-center py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-white bg-[#C82032] rounded-xl shadow-md"
              >
                Request a Detailed Quotation
              </Link>
              <a
                href={`tel:${company.phones[0].number}`}
                className="w-full min-h-[44px] flex items-center justify-center text-center py-2 text-xs font-mono text-[#F5F5F5] bg-white/5 rounded-xl border border-white/10"
              >
                Direct Sales: {company.phones[0].display}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
