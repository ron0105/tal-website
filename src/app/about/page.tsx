import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Adda Labs is a design-thinking lab. We take real problems, test fixes cheaply, and build what works, for businesses, for public causes, and for our own ventures.",
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
