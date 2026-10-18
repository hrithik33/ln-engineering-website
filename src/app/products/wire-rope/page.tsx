import React from "react";
import { Metadata } from "next";
import { wireRopeProduct } from "@/data/products";
import CleanMachineDetail from "@/components/ui/CleanMachineDetail";

export const metadata: Metadata = {
  title: "Diamond Wire Rope — 35 Beads/M, 11.5mm Core Wire | LN Engineering",
  description:
    "Official specifications for LN Engineering Diamond Wire Rope: 35 beads per meter, 11.5 mm diameter with imported high-tensile European core wire for granite, marble, and quartzite cutting.",
  alternates: {
    canonical: "https://www.gangsawmachines.com/products/wire-rope",
  },
  openGraph: {
    title: "Diamond Wire Rope — 35 Beads/M, 11.5mm Diameter | LN Engineering",
    description:
      "High-tensile diamond wire rope engineered for granite multiwire gangsaws, stationary mono wire saws, and quarry extraction.",
    url: "https://www.gangsawmachines.com/products/wire-rope",
    siteName: "LN Engineering",
    images: ["/images/products/wire-rope/diamond-wire-rope.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamond Wire Rope — LN Engineering",
    description: "35 beads/meter high-endurance diamond wire rope with imported core.",
    images: ["/images/products/wire-rope/diamond-wire-rope.jpg"],
  },
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
