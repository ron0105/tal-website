import type { Metadata } from "next";
import HomeLabHero from "@/components/home/HomeLabHero";
import HomeBuildTestScale from "@/components/home/HomeBuildTestScale";
import HomeDesignThinking from "@/components/home/HomeDesignThinking";
import HomeStudentsBand from "@/components/home/HomeStudentsBand";
import HomeLabCTA from "@/components/home/HomeLabCTA";

export const metadata: Metadata = {
  title: { absolute: "The Adda Labs | A venture lab that builds, tests and scales ideas" },
  description:
    "The Adda Labs is a frugal ideation and venture-building lab working across business, technology, sustainability and public causes. We build, test and scale ideas.",
};

// Lab positioning (Oct 2026): short, graphic-led home.
// Hero, Build/Test/Scale loop, design thinking across fields, students, CTA.
// The earlier home sections (HomeHero, HomeProblem, HomeWhatWeDo, ...) stay in
// src/components/home but are no longer imported here.
export default function Home() {
  return (
    <div>
      <HomeLabHero />
      <HomeBuildTestScale />
      <HomeDesignThinking />
      <HomeStudentsBand />
      <HomeLabCTA />
    </div>
  );
}
