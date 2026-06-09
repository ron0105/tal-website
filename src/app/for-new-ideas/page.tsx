import type { Metadata } from "next";
import FNIHero from "@/components/for-new-ideas/FNIHero";
import FNIOfferings from "@/components/for-new-ideas/FNIOfferings";
import FNIStatBar from "@/components/for-new-ideas/FNIStatBar";
import FNIReframe from "@/components/for-new-ideas/FNIReframe";
import FNIFeatures from "@/components/for-new-ideas/FNIFeatures";
import FNIFramework from "@/components/for-new-ideas/FNIFramework";
import FNIOutcomes from "@/components/for-new-ideas/FNIOutcomes";
import FNIDifferentiation from "@/components/for-new-ideas/FNIDifferentiation";
import FNIProcess from "@/components/for-new-ideas/FNIProcess";
import FNIWhoThisIsFor from "@/components/for-new-ideas/FNIWhoThisIsFor";
import FNICTA from "@/components/for-new-ideas/FNICTA";

export const metadata: Metadata = {
  title: "For New Ideas",
  description:
    "Idea validation and founder consulting. We help founders test ideas before investing — then build them right with business model, pricing, and go-to-market support.",
};

export default function ForNewIdeas() {
  return (
    <>
      <FNIHero />
      <FNIOfferings />
      <FNIStatBar />
      <FNIReframe />
      <FNIFeatures />
      <FNIFramework />
      <FNIOutcomes />
      <FNIDifferentiation />
      <FNIProcess />
      <FNIWhoThisIsFor />
      <FNICTA />
    </>
  );
}
