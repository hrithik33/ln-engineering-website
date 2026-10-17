# LN Engineering — Official Industrial Website

> **Precision Stone Engineering**  
> Official Website for **LN Engineering / L N Machineries Pvt. Ltd.**  
> Indian manufacturer of stone-processing and wire-saw machinery, Rajsamand, Rajasthan, India.  
> Existing Portal: [https://www.gangsawmachines.com/](https://www.gangsawmachines.com/)

---

## 1. Project Overview & Architecture

This repository contains the complete, production-ready website for **LN Engineering** (L N Machineries Pvt. Ltd.), redesigned from the ground up as a premium, cinematic, technically credible industrial platform for domestic and international B2B buyers.

### Technical Stack
- **Framework:** Next.js 16.4.2 (App Router with Turbopack)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS v4 (Industrial Color Tokens & Typography)
- **Image Optimization:** Next.js Image Component + WebP/JPEG assets extracted from original PDF catalogues
- **Data Architecture:** Centralized, type-safe data models in `@/data/company.ts` and `@/data/products.ts`
- **Lead Capture:** API Route (`/api/enquiry`) with client-side validation, reference ID generation, direct WhatsApp fallback, and phone click-to-call integration

---

## 2. Brand Identity & Visual System

- **Official Brand Mark:** Extracted in pristine resolution from `L N Logo.pdf` directly into `public/images/brand/logo.png` and `logo.svg`.
  - Original red monogram preserved without distortion or recoloring.
  - Black wordmark and original proportions intact.
- **Color Palette:**
  - **Graphite (Primary Dark):** `#151719`
  - **Dark Steel (Secondary Dark):** `#282C2F`
  - **Brand Red (Sampled Accent):** `#a8302d` / `#C41E2A` (used with editorial restraint)
  - **Warm White:** `#F8F7F4`
  - **Stone Grey:** `#E8E5DF`

---

## 3. Implemented Routes & Information Architecture

| Route | Purpose & Key Features |
| :--- | :--- |
| **`/`** | **Home Page:** Cinematic hero with genuine LN machine photography, 4 core product families showcase, verified government accolades, in-house tooling preview, 6 technical differentiation pillars, factory & exhibition gallery, 1993 timeline teaser, and quotation CTA. |
| **`/machines`** | **Equipment Overview:** Category jump navigation and detailed cards across all machinery families. |
| **`/machines/mono-wire-saw`** | **Mono Wire Saws:** Dedicated sections and side-by-side comparative matrix for **LN 2500**, **LN 2500 PRO**, and **LN 2500 PROMAXX** (2500 mm flywheels, 50-tonne revolving trolley, Siemens PLC, IoT mobile telemetry, bellow pillar covers). |
| **`/machines/multiwire-saw`** | **Multiwire Gangsaws:** Dedicated coverage of **LN 6 Wire**, **LN 12 Wire**, and **LN 22 Wire**. Covers both **Slab Accuracy Master** (20, 30, 40 mm) and **Mono Accuracy Master Thick Slabs** (50 mm to 100 mm configuration table), Siemens PLC, dual wire tension, and 60-220 L/min water management. |
| **`/machines/cnc-wire-profile`** | **CNC Wire Profile Machines:** Dedicated entries and comparison for **LN HORI 2100** (horizontal & vertical arc cutting up to 20 ft) and **LN CNC 2100 PROMAXX** (genuine Siemens CNC multiaxis profiling). |
| **`/products/wire-rope`** | **Diamond Wire Rope:** 35 beads/meter, 11.5 mm diameter, imported high-tensile core wire, application compatibility, and technical integrity notes. |
| **`/about`** | **About Us:** Corporate profile, Mr. L.N. Jangid leadership, 1993-present development timeline, ZED Bronze & Silver credentials, RFC Gold Borrower award, MSME Best Stone Technology Award, and national/global installation directory (20+ Indian hubs, Egypt, Azerbaijan, Nepal). |
| **`/engineering`** | **Engineering & Tooling:** In-house machine shop tooling (HMT Lathes, Sweden-made Boring, Heavy Duty Planer, Radial Drill, Paint Shop), assembly processes, and Accuracy Master quality inspection. |
| **`/resources`** | **Downloads & Knowledge Base:** Direct downloads of the 225 MB Master Catalogue and 62 MB Verona International Catalogue, alongside technical engineering FAQs. |
| **`/contact`** | **Contact & Quotation:** Full pre-fillable quotation form with stone type and production requirements, direct click-to-call links, verified WhatsApp integration, Rajsamand Head Office address, and South India sales offices (Ongole & Martur). |
| **`/sitemap.xml`** | **Dynamic XML Sitemap:** Generated for search engine indexing. |
| **`/robots.txt`** | **Robots Directives:** Configured for crawler discovery and API privacy. |

---

## 4. Asset Organization

```
public/
├── documents/
│   ├── ln-engineering-catalogue.pdf   (236 MB official master catalogue)
│   └── ln-verona-catalogue.pdf        (65 MB Verona international edition)
└── images/
    ├── brand/
    │   ├── logo.png                   (Official red monogram & wordmark)
    │   ├── logo.svg                   (Vector master)
    │   └── home-hero.jpg              (High-resolution real LN multiwire machine)
    ├── machines/
    │   ├── mono-wire-saw/             (LN 2500, PRO, PROMAXX authentic imagery)
    │   ├── multiwire-saw/             (LN 6, 12, 22 wire assembly imagery)
    │   └── cnc-wire-profile/          (LN HORI 2100 & CNC PROMAXX imagery)
    ├── products/
    │   └── wire-rope/                 (35 beads/meter diamond wire rope imagery)
    └── factory/
        ├── plant-lathe.jpg            (HMT heavy lathe machining)
        ├── plant-workforce.jpg        (Engineering planners and assembly workforce)
        ├── exhibition-stonemart.jpg   (Official Stone Mart Jaipur exhibition stall)
        └── exhibition-verona.jpg      (International trade exhibition display)
```

---

## 5. Technical Product Data & Discrepancy Transparency

In adherence to industrial credibility guidelines, all specifications are derived strictly from primary catalogues (`ln.pdf` and `LN Verona.pdf`). Unresolved items are preserved transparently:

1. **Mono Wire Machine Count:** Documented as `120+ Machines Running Successfully` per `ln.pdf` page 7 (with advisory noting `200+` cited in secondary materials).
2. **Foundation Year:** Milestone timeline begins in **1993**, while marketing marks state **Since 1994**. Both dates are clearly documented on `/about`.
3. **Wire Rope Diameter:** Documented as **11.5 mm** with a verification note confirming the unit.
4. **Siemens CNC & PLC:** Terminology preserved exactly per catalogue page 9 and page 11.

---

## 6. How to Run Locally

### Prerequisites
- Node.js 18+ (Node 20+ recommended)
- npm 9+

### Setup & Run
```bash
# 1. Install dependencies
npm install

# 2. Run the production build
npm run build

# 3. Start the production server
npm run start
# Server starts at http://localhost:3000

# 4. Or run development server
npm run dev
```

---

## 7. Verification & Build Test Results

The website was compiled and tested against production standards:

```text
✓ Next.js Turbopack build passed (17/17 static & dynamic routes compiled)
✓ TypeScript strict check: 0 errors
✓ Route status checks:
  - GET / (200 OK - 123 KB)
  - GET /machines (200 OK - 146 KB)
  - GET /machines/mono-wire-saw (200 OK - 159 KB)
  - GET /machines/multiwire-saw (200 OK - 151 KB)
  - GET /machines/cnc-wire-profile (200 OK - 106 KB)
  - GET /products/wire-rope (200 OK - 73 KB)
  - GET /about (200 OK - 114 KB)
  - GET /engineering (200 OK - 72 KB)
  - GET /resources (200 OK - 73 KB)
  - GET /contact (200 OK - 61 KB)
  - GET /sitemap.xml (200 OK)
  - GET /robots.txt (200 OK)
  - POST /api/enquiry (200 OK - Returns verified Reference ID e.g. LN-ENQ-XXXX)
  - Assets: Logo, Hero, Machinery Photos, and Catalog PDFs all verified (200 OK)
```

---

## 8. Outstanding Company Confirmations

Before commercial deployment, confirm with LN Engineering management:
- Approval to reconcile the 1993 timeline start date with the "Since 1994" branding.
- Final confirmation of active ISO certification renewal numbers for structured schema markup.
- Confirmation of primary WhatsApp gateway number for sales routing.
