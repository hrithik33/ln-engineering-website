"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WorldPaths } from "./WorldPaths";
import { company, geographicalPresence } from "@/data/company";

interface Destination {
  id: string;
  name: string;
  countryCode: string;
  category: "home" | "export" | "exhibition";
  categoryLabel: string;
  location: string;
  coordinates: { x: number; y: number };
  arcPath?: string;
  summary: string;
  verifiedDetails: string;
  badge: string;
}

const DESTINATIONS: Destination[] = [
  {
    id: "in",
    name: "India (Home Base & Manufacturing Works)",
    countryCode: "IN",
    category: "home",
    categoryLabel: "Manufacturing Works & Global HQ",
    location: "Rajsamand, Rajasthan, India",
    coordinates: { x: 575, y: 458 },
    summary:
      "Global manufacturing facility and headquarters. Heavy-duty 5th generation mono wire saws, multiwire gangsaws, and CNC profiling systems engineered with ZED quality certification.",
    verifiedDetails:
      "120+ operational machines across 20+ major stone processing clusters nationwide including Rajasthan, Andhra Pradesh, Karnataka, and Gujarat.",
    badge: "Works & HQ",
  },
  {
    id: "eg",
    name: "Egypt",
    countryCode: "EG",
    category: "export",
    categoryLabel: "Active Export Destination",
    location: "North Africa (Granite & Marble Hubs)",
    coordinates: { x: 475, y: 458 },
    arcPath: "M575,458 Q525,430 475,458",
    summary:
      "Documented international export destination. High-rigidity wire saw machines engineered for heavy-duty granite and limestone block squaring under high-ambient production conditions.",
    verifiedDetails:
      "Direct machinery export with factory-backed technical support and precision cutting wire compatibility.",
    badge: "Export Market",
  },
  {
    id: "az",
    name: "Azerbaijan",
    countryCode: "AZ",
    category: "export",
    categoryLabel: "Active Export Destination",
    location: "Caucasus / Caspian Natural Stone Sector",
    coordinates: { x: 514, y: 422 },
    arcPath: "M575,458 Q548,424 514,422",
    summary:
      "Documented international export destination. Precision wire cutting installations engineered for quarry dressing and architectural stone fabrication.",
    verifiedDetails:
      "Engineered for high dimensional accuracy, uniform slab thickness, and extended diamond wire endurance.",
    badge: "Export Market",
  },
  {
    id: "np",
    name: "Nepal",
    countryCode: "NP",
    category: "export",
    categoryLabel: "Active Export Destination",
    location: "South Asia (Himalayan Stone Industry)",
    coordinates: { x: 604, y: 450 },
    arcPath: "M575,458 Q590,442 604,450",
    summary:
      "Documented regional export destination. Rugged mono-wire block squaring and dressing machines delivering low maintenance and high operational uptime.",
    verifiedDetails:
      "Equipped with 50-tonne revolving turntables for versatile 360-degree block dressing without crane repositioning.",
    badge: "Export Market",
  },
  {
    id: "it",
    name: "Italy (Marmomac Verona)",
    countryCode: "IT",
    category: "exhibition",
    categoryLabel: "International Showcase",
    location: "Verona, Italy",
    coordinates: { x: 428, y: 411 },
    arcPath: "M575,458 Q498,390 428,411",
    summary:
      "International stone and diamond wire saw representation at Marmomac Verona — the global benchmark exhibition for stone design and stone-processing technology.",
    verifiedDetails:
      "Authoritative reference for LN Engineering's official international machine catalogue, technical specifications, and export configurations.",
    badge: "Technology Showcase",
  },
];

export default function GlobalWorldMap() {
  const [activeId, setActiveId] = useState<string>("in");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedDestination =
    DESTINATIONS.find((d) => d.id === (hoveredId || activeId)) || DESTINATIONS[0];

  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-10">
      {/* Editorial Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#191B1D] border border-white/10 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#EF4444] inline-block animate-pulse"></span>
            <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#EF4444] uppercase">
              PRECISION ENGINEERING. GLOBAL AMBITION.
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-semibold uppercase text-white tracking-tight leading-tight">
            Engineered in India. Built for the World.
          </h2>

          <p className="text-sm sm:text-base text-[#A7ADB5] leading-relaxed">
            Engineered in India for the evolving needs of the global stone-processing industry. From our Rajsamand works across 20+ domestic stone clusters to international export destinations in Egypt, Azerbaijan, and Nepal, LN Engineering delivers dependable cutting performance worldwide.
          </p>
        </div>

        {/* Global Stats Pill */}
        <div className="flex flex-wrap gap-4 text-xs font-mono">
          <div className="bg-[#191B1D] border border-white/10 px-4 py-3 rounded-xl">
            <span className="text-[#EF4444] text-xl font-bold block">120+</span>
            <span className="text-white font-medium block uppercase text-[11px]">Running Wire Saws</span>
            <span className="text-[#A7ADB5] text-[10px]">Documented fleet (500+ built)</span>
          </div>
          <div className="bg-[#191B1D] border border-white/10 px-4 py-3 rounded-xl">
            <span className="text-white text-xl font-bold block">ZED</span>
            <span className="text-[#A7ADB5] font-medium block uppercase text-[11px]">Govt. of India</span>
            <span className="text-[#A7ADB5] text-[10px]">Zero Defect Zero Effect</span>
          </div>
        </div>
      </div>

      {/* Main Map Card */}
      <div className="bg-[#151719] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
        {/* Subtle grid backdrop */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Destination Filter Tabs */}
        <div className="relative z-10 p-4 sm:p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#191B1D]/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A7ADB5] font-semibold">
              Select Destination:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {DESTINATIONS.map((d) => {
              const isSelected = (hoveredId || activeId) === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveId(d.id)}
                  onMouseEnter={() => setHoveredId(d.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wide transition-all duration-200 border flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#C82032] text-white border-[#C82032] shadow-lg shadow-[#C82032]/20"
                      : "bg-[#101112] text-[#A7ADB5] hover:text-white border-white/10 hover:border-white/20"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      d.category === "home"
                        ? "bg-white"
                        : d.category === "export"
                        ? isSelected
                          ? "bg-white"
                          : "bg-[#EF4444]"
                        : isSelected
                        ? "bg-white"
                        : "bg-[#A7ADB5]"
                    }`}
                  />
                  <span>{d.name.split(" ")[0]}</span>
                  <span
                    className={`text-[10px] hidden sm:inline ${
                      isSelected ? "text-white" : "text-[#A7ADB5]"
                    }`}
                  >
                    ({d.badge})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Vector SVG World Map Canvas */}
        <div className="relative z-0 p-4 sm:p-8 bg-[#121416] overflow-hidden">
          <div className="w-full max-w-5xl mx-auto relative">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="30.767 241.591 784.077 458.627"
              className="w-full h-auto block select-none"
              style={{
                filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))",
              }}
            >
              <defs>
                {/* CSS styles applied inside SVG for crisp rendering */}
                <style>{`
                  #countries-group path, #countries-group g path {
                    fill: #22262B;
                    stroke: #2D3339;
                    stroke-width: 0.5px;
                    transition: fill 0.25s ease, stroke 0.25s ease;
                  }
                  #countries-group path:hover {
                    fill: #2D343D;
                  }
                  /* India Highlighting */
                  #countries-group #in, #countries-group #in path {
                    fill: #C82032 !important;
                    stroke: #FF5A6A !important;
                    stroke-width: 0.8px;
                    opacity: 0.95;
                  }
                  /* Export Countries */
                  #countries-group #eg, #countries-group #eg path {
                    fill: #451F26 !important;
                    stroke: #C82032 !important;
                    stroke-width: 0.75px;
                  }
                  #countries-group #az, #countries-group #az path {
                    fill: #451F26 !important;
                    stroke: #C82032 !important;
                    stroke-width: 0.75px;
                  }
                  #countries-group #np, #countries-group #np path {
                    fill: #451F26 !important;
                    stroke: #C82032 !important;
                    stroke-width: 0.75px;
                  }
                  /* Italy / Marmomac Verona */
                  #countries-group #it, #countries-group #it path {
                    fill: #342835 !important;
                    stroke: #E02D40 !important;
                    stroke-width: 0.75px;
                  }
                `}</style>

                {/* Animated dash array for export route flow */}
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C82032" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FF6B7A" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Render 314 standard SVG country paths */}
              <WorldPaths />

              {/* Connecting Export Routes from India (575, 458) */}
              <g id="export-routes" pointerEvents="none">
                {DESTINATIONS.filter((d) => d.arcPath).map((d) => {
                  const isRouteActive = (hoveredId || activeId) === d.id;
                  return (
                    <g key={`route-${d.id}`}>
                      {/* Ambient background curve */}
                      <path
                        d={d.arcPath}
                        fill="none"
                        stroke={isRouteActive ? "#C82032" : "#C82032"}
                        strokeWidth={isRouteActive ? "2.2" : "1.2"}
                        strokeDasharray={isRouteActive ? "4 3" : "2 3"}
                        opacity={isRouteActive ? 0.95 : 0.35}
                        className="transition-all duration-300"
                      />
                      {/* Pulse marker travelling along curve */}
                      {isRouteActive && (
                        <circle r="2.5" fill="#FFFFFF" opacity="0.9">
                          <animateMotion
                            path={d.arcPath}
                            dur="2.5s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </g>

              {/* Interactive Location Markers & Pins */}
              <g id="destination-markers">
                {DESTINATIONS.map((d) => {
                  const isSelected = (hoveredId || activeId) === d.id;
                  const isHome = d.category === "home";

                  return (
                    <g
                      key={`pin-${d.id}`}
                      className="cursor-pointer"
                      onClick={() => setActiveId(d.id)}
                      onMouseEnter={() => setHoveredId(d.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      transform={`translate(${d.coordinates.x}, ${d.coordinates.y})`}
                    >
                      {/* Pulse Effect for Home Base or Active Destination */}
                      {(isHome || isSelected) && (
                        <circle
                          r={isHome ? "10" : "8"}
                          fill="none"
                          stroke="#C82032"
                          strokeWidth="1.2"
                          opacity="0.6"
                          className="animate-ping"
                        />
                      )}

                      {/* Concentric Base Circle */}
                      <circle
                        r={isHome ? "6" : isSelected ? "5.5" : "4"}
                        fill="#101112"
                        stroke={isHome ? "#FF4757" : isSelected ? "#C82032" : "#A7ADB5"}
                        strokeWidth={isHome ? "2" : "1.5"}
                        className="transition-all duration-200"
                      />

                      {/* Core Dot */}
                      <circle
                        r={isHome ? "3.2" : isSelected ? "2.8" : "2"}
                        fill={isHome ? "#C82032" : isSelected ? "#C82032" : "#FFFFFF"}
                        className="transition-all duration-200"
                      />

                      {/* Prominent Label on Map for Home Base & Active Pin */}
                      {(isHome || isSelected) && (
                        <g transform="translate(0, -12)" pointerEvents="none">
                          <rect
                            x={-45}
                            y={-14}
                            width={90}
                            height={16}
                            rx={3}
                            fill="#191B1D"
                            stroke={isHome ? "#C82032" : "#A7ADB5"}
                            strokeWidth={0.7}
                            opacity={0.92}
                          />
                          <text
                            x={0}
                            y={-3}
                            textAnchor="middle"
                            fill="#FFFFFF"
                            fontSize="8"
                            fontWeight="bold"
                            fontFamily="sans-serif"
                            letterSpacing="0.5"
                          >
                            {isHome ? "WORKS (INDIA)" : d.countryCode}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        {/* Selected Destination Telemetry Card */}
        <div className="relative z-10 border-t border-white/10 bg-[#191B1D] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Column: Destination Detail */}
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#C82032]/20 text-[#FF6B7A] border border-[#C82032]/30">
                  {selectedDestination.categoryLabel}
                </span>
                <span className="text-white/30">•</span>
                <span className="font-mono text-xs text-[#A7ADB5]">
                  {selectedDestination.location}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-white tracking-tight">
                {selectedDestination.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#F5F5F5]/90 leading-relaxed">
                {selectedDestination.summary}
              </p>

              <p className="text-[11px] sm:text-xs text-[#A7ADB5] font-mono leading-relaxed border-l-2 border-[#C82032] pl-3">
                {selectedDestination.verifiedDetails}
              </p>
            </div>

            {/* Right Column: CTA & Technical Links */}
            <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-6 space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#A7ADB5] block">
                Commercial & Technical Inquiries:
              </span>

              <div className="space-y-2">
                <Link
                  href="/contact"
                  className="w-full py-3 px-4 bg-[#C82032] hover:bg-[#E02D40] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 text-center block shadow-lg shadow-[#C82032]/20"
                >
                  Request International Quotation
                </Link>

                <a
                  href="/documents/product-catalogue.pdf"
                  download="LN_Engineering_Product_Catalogue.pdf"
                  className="w-full py-2.5 px-4 bg-[#101112] hover:bg-white/5 border border-white/15 text-[#E8E5DF] text-xs font-mono rounded-xl transition-all duration-200 text-center block"
                  aria-label="Download Product Catalogue (PDF, 41 MB)"
                >
                  Download Product Catalogue (PDF)
                </a>
              </div>

              <div className="text-[10px] font-mono text-[#9CA3AF] text-center pt-1">
                Verified against official company records &amp; product catalogue
              </div>
            </div>
          </div>
        </div>

        {/* Domestic Stone Clusters Verified Strip */}
        <div className="border-t border-white/10 bg-[#101112] px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#A7ADB5]">
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              <span className="font-semibold text-white uppercase text-[11px]">
                Domestic Stone Cluster Coverage:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#A7ADB5]">
              {geographicalPresence.national.map((region, idx) => (
                <div key={region.state} className="flex items-center gap-1.5">
                  <span className="text-white font-medium">{region.state}:</span>
                  <span className="text-[#9CA3AF]">
                    {region.locations.slice(0, 3).join(", ")}
                    {region.locations.length > 3 ? "..." : ""}
                  </span>
                  {idx < geographicalPresence.national.length - 1 && (
                    <span className="text-white/20 ml-2">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
