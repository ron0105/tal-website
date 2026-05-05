import type { Metadata } from "next";
import FNIHero from "@/components/for-new-ideas/FNIHero";
import FNIStatBar from "@/components/for-new-ideas/FNIStatBar";
import FNIReframe from "@/components/for-new-ideas/FNIReframe";
import FNIFeatures from "@/components/for-new-ideas/FNIFeatures";
import FNIFramework from "@/components/for-new-ideas/FNIFramework";
import FNIOutcomes from "@/components/for-new-ideas/FNIOutcomes";
import FNIDifferentiation from "@/components/for-new-ideas/FNIDifferentiation";
import FNICTA from "@/components/for-new-ideas/FNICTA";

export const metadata: Metadata = {
  title: "For New Ideas",
  description:
    "We help founders test, validate, and structure business ideas before investing time and money. Our 6-step framework brings structure before execution.",
};

export default function ForNewIdeas() {
  return (
    <>
      <FNIHero />
      <FNIStatBar />
      <FNIReframe />
      <FNIFeatures />
      <FNIFramework />
      <FNIOutcomes />
      <FNIDifferentiation />
      <FNICTA />
    </>
  );
}
