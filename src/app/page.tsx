import HomeHero from "@/components/home/HomeHero";
import HomeProblem from "@/components/home/HomeProblem";
import HomeWhatWeDo from "@/components/home/HomeWhatWeDo";
import HomeComparison from "@/components/home/HomeComparison";
import HomeWhy from "@/components/home/HomeWhy";
import HomeProcess from "@/components/home/HomeProcess";
import HomeProof from "@/components/home/HomeProof";
import HomeCTA from "@/components/home/HomeCTA";
import HiringMarquee from "@/components/careers/HiringMarquee";

// AIDA / PAS / StoryBrand flow:
//
// ATTENTION  → HomeHero        "We help you build something that actually works"
// PROBLEM    → HomeProblem     Name the pain — business owner stuck, founder building blind
// SOLUTION   → HomeWhatWeDo   Here is what we do about it
// AGITATE    → HomeComparison  Show the before/after — why it matters to act
// GUIDE      → HomeWhy         Why TAL — the focused firm that tells you the truth
// PLAN       → HomeProcess     Exactly how we work, step by step
// PROOF      → HomeProof       Industries served + our structured approach
// ACTION     → HomeCTA         Low-friction next step

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeProblem />
      <HomeWhatWeDo />
      <HomeComparison />
      <HomeWhy />
      <HomeProcess />
      <HomeProof />
      <HiringMarquee />
      <HomeCTA />
    </main>
  );
}
