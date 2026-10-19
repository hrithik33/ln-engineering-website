import React from "react";
import { Metadata } from "next";
import { monoWireModels } from "@/data/products";
import CleanMachineDetail from "@/components/ui/CleanMachineDetail";
import ModelComparisonTable from "@/components/ui/ModelComparisonTable";

export const metadata: Metadata = {
  title: "Mono Wire Saw Machines — LN 2500, PRO & PROMAXX Specifications | LN Engineering",
  description:
    "Official specifications for LN Engineering 5th Generation Mono Wire Saws: LN 2500, LN 2500 PRO, and LN 2500 PROMAXX. 2500mm dual flywheels, 50-tonne revolving trolley, Siemens PLC & IoT telemetry.",
  alternates: {
    canonical: "https://www.gangsawmachines.com/machines/mono-wire-saw",
  },
  openGraph: {
    title: "Mono Wire Saw Machines — LN 2500, PRO & PROMAXX | LN Engineering",
    description:
      "5th Generation Mono Wire Saw Machines engineered with 2500 mm flywheels and 50-tonne revolving block turntables.",
    url: "https://www.gangsawmachines.com/machines/mono-wire-saw",
    siteName: "LN Engineering",
    images: ["/images/machines/mono-wire-saw/mono-p6-img0.webp"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mono Wire Saw Machines — LN Engineering",
    description: "Industrial stone dressing and slicing mono wire saws with 2500mm flywheels.",
    images: ["/images/machines/mono-wire-saw/mono-p6-img0.webp"],
  },
};

export default function MonoWireSawPage() {
  return (
    <>
      <CleanMachineDetail
        categorySlug="mono-wire-saw"
        categoryName="Mono Wire Saw Machines"
        models={monoWireModels}
        defaultModelSlug="ln-2500"
      />
      <ModelComparisonTable models={monoWireModels} />
    </>
  );
}
