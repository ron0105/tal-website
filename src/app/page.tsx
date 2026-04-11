import HomeHero from "@/components/home/HomeHero";
import HomeSystem from "@/components/home/HomeSystem";
import HomeOfferingsGrid from "@/components/home/HomeOfferingsGrid";
import HomeSplit from "@/components/home/HomeSplit";
import HomeTimeline from "@/components/home/HomeTimeline";
import HomeManifestoBlocks from "@/components/home/HomeManifestoBlocks";
import HomeProofLog from "@/components/home/HomeProofLog";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeSystem />
      <HomeOfferingsGrid />
      <HomeSplit />
      <HomeTimeline />
      <HomeManifestoBlocks />
      <HomeProofLog />
      <HomeCTA />
    </main>
  );
}
