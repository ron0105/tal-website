import type { Metadata } from "next";
import HomeLabHero from "@/components/home/HomeLabHero";
import HomePains from "@/components/home/HomePains";
import HomeSelectedWork from "@/components/home/HomeSelectedWork";
import HomeLabCTA from "@/components/home/HomeLabCTA";
import ImpactStrip from "@/components/work/ImpactStrip";
import LogoWall from "@/components/work/LogoWall";
import HWWFlow from "@/components/how-we-work/HWWFlow";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { WORK_WITH_YOU } from "@/lib/process";
import { HOME_TITLE, HOME_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
};

// Impact first (Rohan, Oct 29 2026, after mckinsey.com/in): the outcome, the numbers,
// the customer's pain and our fix, proof, how we work, one call to action.
// The lab-era sections (HomeBuildTestScale, HomeDesignThinking, HomeStudentsBand) and the
// earlier ones (HomeHero, HomeProblem, ...) stay in src/components/home but aren't imported.
export default function Home() {
  return (
    <div>
      <HomeLabHero />
      <ImpactStrip />
      <LogoWall />
      <HomePains />
      <HomeSelectedWork />
      <section
        aria-label="How we work with you"
        className="px-6 md:px-10"
        style={{ background: "var(--bg-secondary)", paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}
      >
        <AnimateOnScroll className="layout-grid">
          <HWWFlow
            id="home-process-heading"
            eyebrow="How we work"
            heading="From first call to more customers"
            intro="Four steps. You always know what happens next."
            steps={WORK_WITH_YOU}
            cols={4}
            emphasiseLast
          />
        </AnimateOnScroll>
      </section>
      <HomeLabCTA />
    </div>
  );
}
