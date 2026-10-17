import React from "react";
import { Metadata } from "next";
import { wireRopeProduct } from "@/data/products";
import CleanMachineDetail from "@/components/ui/CleanMachineDetail";

export const metadata: Metadata = {
  title: "Diamond Wire Rope — 35 Beads/M, 11.5mm Diameter, Imported Core Wire | LN Engineering",
  description:
    "Official specifications for LN Engineering Diamond Wire Rope: 35 beads per meter, 11.5 diameter with imported high-tensile core wire for granite, marble, and quartzite cutting.",
};

export default function WireRopePage() {
  return (
    <CleanMachineDetail
      categorySlug="wire-rope"
      categoryName="Tooling & Consumables"
      models={[wireRopeProduct]}
      defaultModelSlug="diamond-wire-rope"
    />
  );
}
