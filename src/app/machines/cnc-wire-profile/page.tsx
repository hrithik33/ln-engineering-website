import React from "react";
import { Metadata } from "next";
import { cncWireModels } from "@/data/products";
import CleanMachineDetail from "@/components/ui/CleanMachineDetail";

export const metadata: Metadata = {
  title: "CNC Wire Profile Machines — LN HORI 2100 & LN CNC 2100 PROMAXX | LN Engineering",
  description:
    "Official specifications for LN Engineering Wire Profile Machines: LN HORI 2100 (Horizontal & Vertical arc cutting up to 20 ft) and LN CNC 2100 PROMAXX with genuine Siemens CNC controller.",
  alternates: {
    canonical: "https://www.gangsawmachines.com/machines/cnc-wire-profile",
  },
  openGraph: {
    title: "CNC Wire Profile Machines — LN HORI 2100 & LN CNC 2100 PROMAXX | LN Engineering",
    description:
      "Advanced Siemens CNC-driven wire profile machines for complex 2D/3D architectural contours, arches, columns, and stone moldings.",
    url: "https://www.gangsawmachines.com/machines/cnc-wire-profile",
    siteName: "LN Engineering",
    images: ["/images/machines/ln-gantry-cutting-field.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CNC Wire Profile Machines — LN Engineering",
    description: "Multiaxis CNC wire profiling centers for architectural stone elements.",
    images: ["/images/machines/ln-gantry-cutting-field.jpg"],
  },
};

export default function CncWireProfilePage() {
  return (
    <CleanMachineDetail
      categorySlug="cnc-wire-profile"
      categoryName="CNC Wire Profile Machines"
      models={cncWireModels}
      defaultModelSlug="ln-hori-2100"
    />
  );
}
