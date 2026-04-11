import type { Metadata } from "next";
import VLHero from "@/components/venture-lab/VLHero";
import VLProblem from "@/components/venture-lab/VLProblem";
import VLOutcomes from "@/components/venture-lab/VLOutcomes";

export const metadata: Metadata = {
  title: "Venture Lab",
  description:
    "Test your idea before you build it. Venture Lab runs a structured 6-stage validation process to find out if your idea is worth building — before you spend money on it.",
};

export default function VentureLab() {
  return (
    <>
      <VLHero />
      <VLProblem />
      <VLOutcomes />
    </>
  );
}
