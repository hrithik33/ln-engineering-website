import React from "react";
import { Metadata } from "next";
import { multiwireModels } from "@/data/products";
import CleanMachineDetail from "@/components/ui/CleanMachineDetail";

export const metadata: Metadata = {
  title: "Multiwire Saw Machines — LN 6 Wire, LN 12 Wire, LN 22 Wire | LN Engineering",
  description:
    "Official specifications for LN Engineering Multiwire Gangsaws: LN 6 Wire, LN 12 Wire, and LN 22 Wire. Siemens PLC, Dual Tension, Slab Accuracy Master, and Thick Slab (50-100mm) processing.",
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
