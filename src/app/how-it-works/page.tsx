import type { Metadata } from "next";
import HIWHero from "@/components/how-it-works/HIWHero";
import HIWFramework from "@/components/how-it-works/HIWFramework";
import HIWDecisionGate from "@/components/how-it-works/HIWDecisionGate";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Every engagement at The Adda Labs follows the same 6-stage framework. See exactly what happens at each stage, what you'll do, and what you'll receive.",
};

export default function HowItWorks() {
  return (
    <>
      <HIWHero />
      <HIWFramework />
      <HIWDecisionGate />
    </>
  );
}
