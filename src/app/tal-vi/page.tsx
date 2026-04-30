import type { Metadata } from "next";
import TALVIHero from "@/components/tal-vi/TALVIHero";
import TALVIProblem from "@/components/tal-vi/TALVIProblem";
import TALVIPillars from "@/components/tal-vi/TALVIPillars";
import TALVIHowItWorks from "@/components/tal-vi/TALVIHowItWorks";
import TALVIPhilosophy from "@/components/tal-vi/TALVIPhilosophy";

export const metadata: Metadata = {
  title: "TAL VI — Venture Infrastructure",
  description:
    "Structure before scale. TAL VI builds the digital, narrative, and operational infrastructure that existing businesses need to grow without breaking.",
};

export default function TALVI() {
  return (
    <>
      <TALVIHero />
      <TALVIProblem />
      <TALVIPillars />
      <TALVIHowItWorks />
      <TALVIPhilosophy />
    </>
  );
}
