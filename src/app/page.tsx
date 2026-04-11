import HomeHero from "@/components/home/HomeHero";
import HomeOfferings from "@/components/home/HomeOfferings";
import HomeProcess from "@/components/home/HomeProcess";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeOfferings />
      <HomeProcess />
      <HomeCTA />
    </>
  );
}
