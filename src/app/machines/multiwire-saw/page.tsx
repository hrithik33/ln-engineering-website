import React from "react";
import { Metadata } from "next";
import { multiwireModels } from "@/data/products";
import CleanMachineDetail from "@/components/ui/CleanMachineDetail";

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
    images: ["/images/machines/ln-promaxx-2500-field.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multiwire Saw Machines — LN Engineering",
    description: "High-yield commercial multiwire stone gangsaws with Siemens automation.",
    images: ["/images/machines/ln-promaxx-2500-field.jpg"],
  },
};

export default function MultiwireSawPage() {
  return (
    <CleanMachineDetail
      categorySlug="multiwire-saw"
      categoryName="Multiwire Saw Machines"
      models={multiwireModels}
      defaultModelSlug="ln-6-wire"
    />
  );
}
