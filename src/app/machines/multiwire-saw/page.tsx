import React from "react";
import { Metadata } from "next";
import { multiwireModels } from "@/data/products";
import CleanMachineDetail from "@/components/ui/CleanMachineDetail";
import ModelComparisonTable from "@/components/ui/ModelComparisonTable";

export const metadata: Metadata = {
  title: "Multiwire Saw Machines — LN 6 Wire, LN 12 Wire, LN 22 Wire | LN Engineering",
  description:
    "Official specifications for LN Engineering Multiwire Gangsaws: LN 6 Wire, LN 12 Wire, and LN 22 Wire. Siemens PLC, Dual Tension, Slab Accuracy Master, and Thick Slab (50-100mm) processing.",
  alternates: {
    canonical: "https://www.gangsawmachines.com/machines/multiwire-saw",
  },
  openGraph: {
    title: "Multiwire Saw Machines — LN 6 Wire, LN 12 Wire, LN 22 Wire | LN Engineering",
    description:
      "Official specifications for LN Engineering Multiwire Gangsaws: LN 6 Wire, LN 12 Wire, and LN 22 Wire with Siemens PLC and Dual Tension.",
    url: "https://www.gangsawmachines.com/machines/multiwire-saw",
    siteName: "LN Engineering",
    images: ["/images/machines/multiwire-saw/multi-p10-img0.webp"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multiwire Saw Machines — LN Engineering",
    description: "High-yield commercial multiwire stone gangsaws with Siemens automation.",
    images: ["/images/machines/multiwire-saw/multi-p10-img0.webp"],
  },
};

export default function MultiwireSawPage() {
  return (
    <>
      <CleanMachineDetail
        categorySlug="multiwire-saw"
        categoryName="Multiwire Saw Machines"
        models={multiwireModels}
        defaultModelSlug="ln-6-wire"
      />
      <ModelComparisonTable
        models={multiwireModels}
        title="COMPARE MULTIWIRE GANGSAW MODELS"
        subtitle="Side-by-side technical evaluation across the LN 6 Wire, LN 12 Wire, and LN 22 Wire multiwire gangsaws to determine exact wire pitch, motor power, and slab throughput for your plant."
        caption="Multiwire Gangsaw Model Technical Comparison Table"
        ariaLabel="Multiwire Saw Model Comparison"
        quoteSectionSubtitle="Select your multiwire configuration to receive a tailored commercial quotation, civil foundations layout, and production cycle estimates."
      />
    </>
  );
}
