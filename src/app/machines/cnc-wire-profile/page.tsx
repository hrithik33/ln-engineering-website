import React from "react";
import { Metadata } from "next";
import { cncWireModels } from "@/data/products";
import CleanMachineDetail from "@/components/ui/CleanMachineDetail";

export const metadata: Metadata = {
  title: "CNC Wire Profile Machines — LN HORI 2100 & LN CNC 2100 PROMAXX | LN Engineering",
  description:
    "Official specifications for LN Engineering Wire Profile Machines: LN HORI 2100 (Horizontal & Vertical arc cutting up to 20 ft) and LN CNC 2100 PROMAXX with genuine Siemens CNC controller.",
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
