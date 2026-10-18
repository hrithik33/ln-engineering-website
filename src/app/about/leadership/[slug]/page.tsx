import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  leadershipProfiles,
  getLeaderBySlug,
  getAllLeaderSlugs,
} from "@/data/leadership";
import { company } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllLeaderSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const leader = getLeaderBySlug(slug);

  if (!leader) {
    return {
      title: "Leadership Profile Not Found | LN Engineering",
    };
  }

  const pageTitle = `${leader.name} — ${leader.role} | LN Engineering Leadership Portfolio`;
  const pageDescription = `${leader.name}, ${leader.role} at LN Engineering (L N Machineries Pvt. Ltd.). ${leader.headline}. ${leader.shortIntro}`;
  const canonicalUrl = `https://www.gangsawmachines.com/about/leadership/${leader.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: "LN Engineering",
      images: [
        {
          url: leader.image,
          width: 800,
          height: 1000,
          alt: leader.imageAlt,
        },
      ],
      locale: "en_IN",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [leader.image],
    },
  };
}

export default async function LeaderPortfolioPage({ params }: PageProps) {
  const { slug } = await params;
  const leader = getLeaderBySlug(slug);

  if (!leader) {
    notFound();
  }

  // Find previous and next leaders for seamless cross-navigation
  const currentIndex = leadershipProfiles.findIndex((l) => l.slug === leader.slug);
  const prevLeader =
    currentIndex > 0
      ? leadershipProfiles[currentIndex - 1]
      : leadershipProfiles[leadershipProfiles.length - 1];
  const nextLeader =
    currentIndex < leadershipProfiles.length - 1
      ? leadershipProfiles[currentIndex + 1]
      : leadershipProfiles[0];

  // Structured Data (JSON-LD)
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: leader.name,
      jobTitle: leader.role,
      worksFor: {
        "@type": "Organization",
        name: company.legalName,
        alternateName: company.name,
        url: "https://www.gangsawmachines.com",
      },
      image: `https://www.gangsawmachines.com${leader.image}`,
      description: leader.shortIntro,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.gangsawmachines.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://www.gangsawmachines.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Leadership",
        item: "https://www.gangsawmachines.com/about#leadership",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: leader.name,
        item: `https://www.gangsawmachines.com/about/leadership/${leader.slug}`,
      },
    ],
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 min-h-screen bg-[#0C0D0F] text-white relative overflow-hidden">
      {/* Low-contrast ambient typography in background */}
      <div
        aria-hidden="true"
        className="absolute top-20 right-[-5%] text-[15vw] font-black uppercase text-white/[0.015] select-none pointer-events-none tracking-tighter leading-none"
      >
        LEADERSHIP
      </div>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-20 relative z-10">
        {/* =====================================================================
            1. BREADCRUMBS & TOP NAV
            ===================================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <Breadcrumbs
            items={[
              { label: "About Us", href: "/about" },
              { label: "Leadership", href: "/about#leadership" },
              { label: leader.name },
            ]}
          />

          <Link
            href="/about#leadership"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A7ADB5] hover:text-[#EF4444] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EF4444] rounded self-start sm:self-auto"
          >
            <span>&larr;</span>
            <span className="uppercase tracking-wider">Back to Executive Gallery</span>
          </Link>
        </div>

        {/* =====================================================================
            2. HERO SECTION — TWO COLUMN EDITORIAL LAYOUT
            ===================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left: Large High-Quality Portrait with museum matting and industrial accent */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-3 sm:p-4 rounded-none border border-zinc-200 shadow-2xl relative group">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 border border-zinc-300/80">
                <Image
                  src={leader.image}
                  alt={leader.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top filter brightness-[1.01]"
                />
              </div>

              {/* Verified Authority Pill Overlay */}
              <div className="mt-3 pt-3 border-t border-zinc-200 flex items-center justify-between text-zinc-700">
                <span className="font-mono text-[10px] tracking-wider uppercase font-semibold text-zinc-900">
                  LN Engineering • Rajsamand Works
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Verified Leadership
                </span>
              </div>
            </div>

            {/* Quick Identification Card */}
            <div className="bg-[#141618] border border-white/10 p-4 rounded-xl space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center text-zinc-400">
                <span>Designation:</span>
                <span className="text-white font-semibold">{leader.role}</span>
              </div>
              {leader.qualification && (
                <div className="flex justify-between items-center text-zinc-400 border-t border-white/5 pt-2">
                  <span>Credentials:</span>
                  <span className="text-[#EF4444] font-medium">{leader.qualification}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-zinc-400 border-t border-white/5 pt-2">
                <span>Focus Domain:</span>
                <span className="text-zinc-200">{leader.experienceDisplay}</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative Profile & Headline */}
          <div className="lg:col-span-7 space-y-6 lg:pt-2">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 bg-[#191B1D] border border-[#EF4444]/30 rounded-full text-[11px] font-mono uppercase tracking-widest text-[#EF4444] font-semibold">
                  LEADERSHIP / LN ENGINEERING
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                  {leader.badge}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                {leader.name}
              </h1>

              <p className="font-mono text-sm sm:text-base text-[#EF4444] font-semibold uppercase tracking-wider">
                {leader.role}
              </p>
            </div>

            <div className="bg-[#141618] border-l-2 border-[#EF4444] p-5 rounded-r-xl space-y-2">
              <h2 className="font-display text-lg sm:text-xl font-semibold uppercase text-white tracking-wide">
                {leader.headline}
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                {leader.shortIntro}
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/about#leadership"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 bg-white text-zinc-950 hover:bg-zinc-200 font-sans text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                &larr; Back to About Us
              </Link>
              <Link
                href={`/contact?enquiryType=Corporate%20leadership&message=${encodeURIComponent(
                  `Enquiry directed for ${leader.name} (${leader.role})`
                )}`}
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 bg-[#C82032] hover:bg-[#D92639] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#C82032]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C82032]"
              >
                Connect with Leadership Desk &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. SECTION A: PROFESSIONAL OVERVIEW
            ===================================================================== */}
        <section className="space-y-6 border-t border-white/10 pt-12">
          <div className="space-y-1">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#EF4444] uppercase block">
              Section A
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
              Professional Overview
            </h2>
          </div>

          <div className="bg-[#131518] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            {leader.professionalOverview.map((paragraph, idx) => (
              <p key={idx} className="text-sm sm:text-base text-[#C5CBD3] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* =====================================================================
            4. SECTION B: JOURNEY WITH LN ENGINEERING
            ===================================================================== */}
        <section className="space-y-6 border-t border-white/10 pt-12">
          <div className="space-y-1">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#EF4444] uppercase block">
              Section B
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
              Journey with LN Engineering
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-2xl leading-relaxed">
              {leader.journeyWithLN.overview}
            </p>
          </div>

          <div className="bg-[#131518] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-4 block">
              Documented Contributions &amp; Initiatives
            </h3>
            <ul className="space-y-3.5">
              {leader.journeyWithLN.keyContributions.map((contribution, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444] mt-2 shrink-0"></span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* =====================================================================
            5. SECTION C: AREAS OF RESPONSIBILITY
            ===================================================================== */}
        <section className="space-y-6 border-t border-white/10 pt-12">
          <div className="space-y-1">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#EF4444] uppercase block">
              Section C
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
              Areas of Operational Responsibility
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-2xl leading-relaxed">
              Verified operational portfolios actively governed by {leader.name} within LN Engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leader.areasOfResponsibility.map((area, idx) => (
              <div
                key={area.title}
                className="bg-[#15171A] border border-white/10 hover:border-white/20 p-6 rounded-2xl space-y-3 shadow-lg transition-all"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#101112] border border-white/20 flex items-center justify-center font-mono text-xs font-bold text-white">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-[#EF4444] uppercase tracking-wider">
                    Core Function
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                  {area.description}
                </p>

                {area.tags && (
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/5">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            6. SECTION D: EXPERIENCE & MILESTONES (VERTICAL TIMELINE)
            ===================================================================== */}
        <section className="space-y-6 border-t border-white/10 pt-12">
          <div className="space-y-1">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#EF4444] uppercase block">
              Section D
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
              Experience &amp; Verified Milestones
            </h2>
            <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-2xl leading-relaxed">
              Chronological milestones directly associated with {leader.name}&apos;s leadership tenure.
            </p>
          </div>

          <div className="bg-[#131518] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="relative border-l border-white/15 pl-6 sm:pl-8 space-y-8 ml-2 sm:ml-4">
              {leader.milestones.map((m, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#101112] border-2 border-[#EF4444] group-hover:bg-[#EF4444] transition-colors"></div>

                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 bg-[#1C1F23] border border-white/10 rounded text-[11px] font-mono text-[#EF4444] font-semibold">
                      {m.year}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold uppercase text-white tracking-wide pt-1">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            7. SECTION E: LEADERSHIP PHILOSOPHY (IF AVAILABLE)
            ===================================================================== */}
        {leader.leadershipPhilosophy && (
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#EF4444] uppercase block">
                Section E
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                Leadership Philosophy &amp; Guiding Principle
              </h2>
            </div>

            <div className="bg-gradient-to-r from-[#17191D] via-[#141618] to-[#17191D] border border-white/15 rounded-2xl p-8 sm:p-12 shadow-2xl relative">
              <div className="absolute top-4 left-6 text-6xl text-[#EF4444]/20 font-serif select-none pointer-events-none">
                &ldquo;
              </div>
              <blockquote className="space-y-4 relative z-10 max-w-3xl mx-auto text-center">
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
                  &ldquo;{leader.leadershipPhilosophy.quote}&rdquo;
                </p>
                <footer className="text-xs font-mono text-[#A7ADB5] pt-2 uppercase tracking-widest">
                  — {leader.name} • {leader.leadershipPhilosophy.context}
                </footer>
              </blockquote>
            </div>
          </section>
        )}

        {/* =====================================================================
            8. SECTION F: ASSOCIATED MACHINERY & PRODUCTS
            ===================================================================== */}
        <section className="space-y-6 border-t border-white/10 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#EF4444] uppercase block">
                Section F
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                Associated Machinery &amp; Engineering Solutions
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-2xl leading-relaxed">
                Core stone processing equipment directly engineered or overseen by this portfolio.
              </p>
            </div>

            <Link
              href="/machines"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#EF4444] hover:text-white transition-colors self-start sm:self-auto"
            >
              <span>Explore Full Catalogue &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leader.relevantMachines.map((machine) => (
              <div
                key={machine.name}
                className="bg-[#141618] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-white/25 transition-all shadow-lg"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#EF4444] block">
                    {machine.series}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-tight">
                    {machine.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7ADB5] leading-relaxed">
                    {machine.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={machine.href}
                    className="text-xs font-semibold uppercase tracking-wider text-white hover:text-[#EF4444] transition-colors"
                  >
                    View Machine Specifications &rarr;
                  </Link>
                  <Link
                    href={`/contact?machine=${encodeURIComponent(machine.name)}`}
                    className="text-xs font-mono font-medium text-[#EF4444] hover:underline"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            9. SECTION G: PREVIOUS / NEXT LEADER NAVIGATION
            ===================================================================== */}
        <section className="border-t border-white/10 pt-12 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold block">
              Executive Governance Navigation
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white">
              Explore LN Engineering Leadership Team
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Previous Leader */}
            <Link
              href={`/about/leadership/${prevLeader.slug}`}
              className="group bg-[#141618] border border-white/10 hover:border-white/20 p-5 rounded-2xl flex items-center gap-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]"
            >
              <div className="relative w-14 h-16 sm:w-16 sm:h-20 rounded-lg overflow-hidden bg-white shrink-0 border border-zinc-300">
                <Image
                  src={prevLeader.image}
                  alt={prevLeader.imageAlt}
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1 min-w-0">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block group-hover:text-[#EF4444] transition-colors">
                  &larr; Previous Leader
                </span>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-white truncate">
                  {prevLeader.name}
                </h4>
                <p className="text-[11px] font-sans text-zinc-400 uppercase tracking-wider truncate">
                  {prevLeader.role}
                </p>
              </div>
            </Link>

            {/* Next Leader */}
            <Link
              href={`/about/leadership/${nextLeader.slug}`}
              className="group bg-[#141618] border border-white/10 hover:border-white/20 p-5 rounded-2xl flex items-center justify-between gap-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] text-right"
            >
              <div className="space-y-1 min-w-0 order-1 sm:order-none">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block group-hover:text-[#EF4444] transition-colors">
                  Next Leader &rarr;
                </span>
                <h4 className="font-serif text-sm sm:text-base font-bold uppercase text-white truncate">
                  {nextLeader.name}
                </h4>
                <p className="text-[11px] font-sans text-zinc-400 uppercase tracking-wider truncate">
                  {nextLeader.role}
                </p>
              </div>
              <div className="relative w-14 h-16 sm:w-16 sm:h-20 rounded-lg overflow-hidden bg-white shrink-0 border border-zinc-300">
                <Image
                  src={nextLeader.image}
                  alt={nextLeader.imageAlt}
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
            </Link>
          </div>
        </section>

        {/* =====================================================================
            10. BOTTOM BANNER: EXECUTIVE INQUIRY & VISITATION
            ===================================================================== */}
        <section className="bg-gradient-to-r from-[#17191D] via-[#141618] to-[#17191D] border border-white/10 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#EF4444] font-semibold block">
            Direct Corporate Access
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
            Schedule a Technical Meeting or Works Visit
          </h3>
          <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-xl mx-auto leading-relaxed">
            Interested in discussing high-capacity stone processing plant requirements, customized gangsaw layouts, or commercial partnership directly with LN Engineering leadership?
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-[#C82032] hover:bg-[#D92639] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#C82032]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C82032]"
            >
              Contact Leadership Desk
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-[#191B1D] hover:bg-[#202326] text-white border border-white/15 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Return to About Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
