import React from "react";
import { Metadata } from "next";
import { monoWireModels } from "@/data/products";
import CleanMachineDetail from "@/components/ui/CleanMachineDetail";

export const metadata: Metadata = {
  title: "Mono Wire Saw Machines — LN 2500, PRO & PROMAXX Specifications | LN Engineering",
  description:
    "Official specifications for LN Engineering 5th Generation Mono Wire Saws: LN 2500, LN 2500 PRO, and LN 2500 PROMAXX. 2500mm flywheels, 50-tonne revolving trolley, Siemens PLC & IoT.",
};

export default function MonoWireSawPage() {
  return (
    <CleanMachineDetail
      categorySlug="mono-wire-saw"
      categoryName="Mono Wire Saw Machines"
      models={monoWireModels}
      defaultModelSlug="ln-2500"
    />
  );
}
