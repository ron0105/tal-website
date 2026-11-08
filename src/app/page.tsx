import type { Metadata } from "next";
import Hero from "@/components/site/Hero";
import CapacityLine from "@/components/site/CapacityLine";
import SystemDiagram from "@/components/site/SystemDiagram";
import LogoMarquee from "@/components/site/LogoMarquee";
import LeakGraphic from "@/components/site/LeakGraphic";
import SectorCard from "@/components/site/SectorCard";
import StatCallout from "@/components/site/StatCallout";
import PlanCard from "@/components/site/PlanCard";
import GuaranteeBand from "@/components/site/GuaranteeBand";
import FAQSection from "@/components/site/FAQSection";
import FinalCTA from "@/components/site/FinalCTA";
import { ArrowLink, Section, SectionHead } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { HOME } from "@/content/home";
import { SECTORS_DATA } from "@/content/sectors";
import { PLANS, PLANS_PREVIEW } from "@/content/plans";

export const metadata: Metadata = {
  title: { absolute: HOME.meta.title },
  description: HOME.meta.description,
};

// Rebuild master prompt section 5.1: ten sections, one action (Book a Free Call, WhatsApp second).
// The lab-era and Oct 29 home sections stay in src/components/home but aren't imported.
export default function Home() {
  const { hero, trust, problem, system, sectors, results, faq } = HOME;
  return (
    <div>
      <Hero
        full
        eyebrow={hero.eyebrow}
        title={hero.h1}
        sub={hero.sub}
        primary={{ label: hero.primary, href: "/call", cta: "book-call" }}
        ghost={{ label: hero.ghost, href: "/work" }}
        microline={<CapacityLine />}
        aside={<SystemDiagram nodes={hero.diagram} label={hero.diagramLabel} />}
      />

      <LogoMarquee label={trust.label} brands={trust.brands} />

      <Section label={problem.eyebrow}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHead eyebrow={problem.eyebrow} title={problem.title} body={problem.body} className="" />
          <LeakGraphic bars={problem.bars} label={problem.exhibitLabel} />
        </div>
        <Reveal mode="fade" className="mt-16 md:mt-24">
          <p className="text-balance" style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 500, fontSize: "clamp(1.9rem, 4.2vw, 3.25rem)", lineHeight: 1.12, maxWidth: "24ch", color: "var(--text-primary)" }}>
            {problem.closing}
          </p>
        </Reveal>
      </Section>

      <Section label={system.eyebrow} tint>
        <SectionHead eyebrow={system.eyebrow} title={system.title} />
        <Reveal mode="stagger" className="grid gap-6 md:grid-cols-3">
          {system.cards.map((c, i) => (
            <div key={c.title} className="card-hover h-full p-6 md:p-8" style={{ background: "var(--bg)" }}>
              <p className="stat-label">0{i + 1}</p>
              <p className="text-xl font-bold mt-4" style={{ color: "var(--text-primary)" }}>
                {c.title}
              </p>
              <p className="mt-3" style={{ color: "var(--text-body)" }}>
                {c.body}
              </p>
            </div>
          ))}
        </Reveal>
        <ArrowLink href="/services" className="mt-8">
          {system.link}
        </ArrowLink>
      </Section>

      <Section label={sectors.eyebrow}>
        <SectionHead eyebrow={sectors.eyebrow} title={sectors.title} body={sectors.body} />
        <Reveal mode="stagger" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SECTORS_DATA.map((s) => (
            <SectorCard key={s.slug} slug={s.slug} name={s.name} result={s.cardResult} />
          ))}
        </Reveal>
        <p className="mt-8" style={{ color: "var(--text-body)" }}>
          {sectors.other}{" "}
          <ArrowLink href="/call" data-cta="book-call">
            {sectors.otherLink}
          </ArrowLink>
        </p>
      </Section>

      <Section label={results.eyebrow} tint>
        <SectionHead eyebrow={results.eyebrow} title={results.title} />
        <div className="grid gap-12 md:grid-cols-3">
          {results.stats.map((s) => (
            <StatCallout key={s.label} {...s} />
          ))}
        </div>
        <ArrowLink href="/work" className="mt-12">
          {results.link}
        </ArrowLink>
      </Section>

      <Section label={PLANS_PREVIEW.eyebrow}>
        <SectionHead eyebrow={PLANS_PREVIEW.eyebrow} title={PLANS_PREVIEW.title} />
        <Reveal mode="stagger" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <PlanCard key={p.name} plan={p} compact />
          ))}
        </Reveal>
        <ArrowLink href="/pricing" className="mt-8">
          {PLANS_PREVIEW.link}
        </ArrowLink>
      </Section>

      <GuaranteeBand />

      <FAQSection title={faq.title} faqs={faq.items} />

      <FinalCTA whatsapp={HOME.whatsapp} />
    </div>
  );
}
