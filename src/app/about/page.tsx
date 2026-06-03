import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata: Metadata = {
  title: "About",
  description:
    "TAL Consulting started with idea validation and grew into helping running businesses. We focus on clarity, structure, and better decision-making.",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
    </>
  );
}
