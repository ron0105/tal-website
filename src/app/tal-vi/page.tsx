import type { Metadata } from "next";
import TALVIHero from "@/components/tal-vi/TALVIHero";
import TALVIProblem from "@/components/tal-vi/TALVIProblem";
import TALVIPillars from "@/components/tal-vi/TALVIPillars";
import TALVIPhilosophy from "@/components/tal-vi/TALVIPhilosophy";

export const metadata: Metadata = {
  title: "TAL VI — Venture Infrastructure",
  description:
    "Structure before scale. TAL VI builds the structural, digital, and narrative infrastructure early-stage ventures need before growth amplifies chaos.",
};

export default function TALVI() {
  return (
    <>
      <TALVIHero />
      <TALVIProblem />
      <TALVIPillars />
      <TALVIPhilosophy />
    </>
  );
}
