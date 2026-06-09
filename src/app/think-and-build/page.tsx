import type { Metadata } from "next";
import NIHero from "@/components/think-and-build/NIHero";
import NITruth from "@/components/think-and-build/NITruth";
import NIPaths from "@/components/think-and-build/NIPaths";
import NIFramework from "@/components/think-and-build/NIFramework";
import NIOutcome from "@/components/think-and-build/NIOutcome";
import NICTABlock from "@/components/think-and-build/NICTABlock";

export const metadata: Metadata = {
  title: "Think & Build",
  description:
    "Idea validation and founder consulting. Pressure-test your idea with real customers and real numbers before you spend your savings — then build it right.",
};

export default function ForNewIdeas() {
  return (
    <>
      <NIHero />
      <NITruth />
      <NIPaths />
      <NIFramework />
      <NIOutcome />
      <NICTABlock />
    </>
  );
}
