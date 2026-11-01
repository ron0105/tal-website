import type { Metadata } from "next";
import Hero from "@/components/site/Hero";
import SectorCard from "@/components/site/SectorCard";
import FinalCTA from "@/components/site/FinalCTA";
import { Section } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SECTORS_DATA, SECTORS_HUB } from "@/content/sectors";

export const metadata: Metadata = { title: SECTORS_HUB.meta.title, description: SECTORS_HUB.meta.description };

// Rebuild master prompt section 5.2: the five sector cards, larger, each with its free check
export default function SectorsHub() {
  return (
    <div>
      <Hero title={SECTORS_HUB.h1} sub={SECTORS_HUB.sub} />
      <Section label="Industries">
        <Reveal mode="stagger" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS_DATA.map((s) => (
            <SectorCard key={s.slug} slug={s.slug} name={s.name} result={s.cardResult} check={s.checkName} large />
          ))}
        </Reveal>
      </Section>
      <FinalCTA />
    </div>
  );
}
