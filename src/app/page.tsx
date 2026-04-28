import HomeHero from "@/components/home/HomeHero";
import HomeSystem from "@/components/home/HomeSystem";
import HomeComparison from "@/components/home/HomeComparison";
import HomeSplit from "@/components/home/HomeSplit";
import HomeTimeline from "@/components/home/HomeTimeline";
import HomeManifestoBlocks from "@/components/home/HomeManifestoBlocks";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeSystem />
      <HomeComparison />
      <HomeSplit />
      <HomeTimeline />
      <HomeManifestoBlocks />
      <HomeCTA />
    </main>
  );
}
