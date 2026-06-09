import type { Metadata } from "next";
import NIHero from "@/components/for-new-ideas/NIHero";
import NITruth from "@/components/for-new-ideas/NITruth";
import NIPaths from "@/components/for-new-ideas/NIPaths";
import NIFramework from "@/components/for-new-ideas/NIFramework";
import NIOutcome from "@/components/for-new-ideas/NIOutcome";
import NICTABlock from "@/components/for-new-ideas/NICTABlock";

export const metadata: Metadata = {
  title: "For New Ideas",
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
