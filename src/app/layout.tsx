import type { Metadata, Viewport } from "next";
import { Inter, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { company } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#101112",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gangsawmachines.com"),
  title: {
    default: "LN Engineering — Precision Stone Engineering & Wire Saw Machinery",
    template: "%s | LN Engineering",
  },
  description:
    "Official website of LN Engineering (L N Machineries Pvt. Ltd.), Rajsamand, India. Premier manufacturer of Mono Wire Saws (LN 2500), Multiwire Gangsaws (6 to 22 wire), CNC Wire Profile Machines, and Diamond Wire Rope.",
  keywords: [
    "LN Engineering",
    "LN Machineries Pvt Ltd",
    "Mono Wire Saw Machine",
    "LN 2500",
    "Multiwire Saw Machine",
    "Wire Gangsaw India",
    "CNC Wire Profile Machine",
    "Diamond Wire Rope",
    "Stone Processing Machinery",
    "Rajsamand Stone Machinery",
    "Block Dressing Machine",
    "Granite Gangsaw",
    "Marble Processing Plant",
  ],
  authors: [{ name: "LN Engineering" }],
  creator: "L N Machineries Pvt. Ltd.",
  publisher: "L N Machineries Pvt. Ltd.",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.gangsawmachines.com",
    title: "LN Engineering — Precision Stone Engineering",
    description:
      "Premier Indian manufacturer of Mono Wire Saws, Multiwire Gangsaws, CNC Wire Profile Machines, and Diamond Wire Rope. Rajsamand, Rajasthan.",
    siteName: "LN Engineering",
    images: [
      {
        url: "/images/hero/industrial-stone-cutting-spray.jpg",
        width: 1200,
        height: 630,
        alt: "LN Engineering Heavy Industrial Wire Saw Machinery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LN Engineering — Precision Stone Engineering",
    description:
      "Indian manufacturer of advanced Mono Wire Saws, Multiwire Gangsaws, and CNC Wire Profile equipment.",
    images: ["/images/hero/industrial-stone-cutting-spray.jpg"],
    creator: "@LNEngineeringINDIA",
    site: "@LNEngineeringINDIA",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/brand/logo.png",
    shortcut: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
  },
};

import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for Organization
  const orgStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.gangsawmachines.com/#organization",
    name: company.name,
    legalName: company.legalName,
    url: "https://www.gangsawmachines.com",
    logo: "https://www.gangsawmachines.com/images/brand/logo.png",
    description: company.description,
    founder: {
      "@type": "Person",
      name: company.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.pincode,
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phones[0].number,
        contactType: "sales",
        areaServed: ["IN", "EG", "AZ", "NP"],
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: company.phones[1].number,
        contactType: "technical support",
        areaServed: ["IN", "EG", "AZ", "NP"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [company.social.facebook, company.social.twitter],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.gangsawmachines.com/#website",
    url: "https://www.gangsawmachines.com",
    name: "LN Engineering",
    description: "Precision Stone Engineering & Wire Saw Machinery",
    publisher: {
      "@id": "https://www.gangsawmachines.com/#organization",
    },
    inLanguage: "en-IN",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
      </head>
      <body className="bg-[#101112] text-[#F5F5F5] antialiased min-h-screen flex flex-col font-sans selection:bg-[#C82032] selection:text-white">
        {/* Skip to Main Content Link for WCAG Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global Floating Glass Header */}
        <Header />

        {/* Main Page Content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Floating WhatsApp Contact Action */}
        <FloatingWhatsApp />

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}

