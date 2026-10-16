import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata: Metadata = {
  title: "About",
  description:
    "TAL, short for The Adda Labs, is a design-thinking lab. We take time to understand a problem before we try to solve it, test small, and build what holds up.",
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
