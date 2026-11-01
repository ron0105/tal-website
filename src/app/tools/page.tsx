import type { Metadata } from "next";
import { ClipboardCheck, Calculator, Gauge, ArrowRight } from "lucide-react";
import Hero from "@/components/site/Hero";
import LeadForm from "@/components/site/LeadForm";
import LeadLossCalculator from "@/components/site/LeadLossCalculator";
import IdeaScoreTest from "@/components/site/IdeaScoreTest";
import FinalCTA from "@/components/site/FinalCTA";
import { Section, SectionHead } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { TOOLS, CALCULATOR, IDEA_SCORE } from "@/content/tools";
import { WHATSAPP_MESSAGES } from "@/content/navigation";

export const metadata: Metadata = { title: TOOLS.meta.title, description: TOOLS.meta.description };

const ICONS = { "free-check": ClipboardCheck, "lead-loss": Calculator, "idea-score": Gauge } as const;

// Rebuild master prompt section 5.7: three cards, each opening its tool further down the page
export default function Tools() {
  const [check] = TOOLS.cards;
  return (
    <div>
      <Hero title={TOOLS.h1} />

      <Section label="Tools">
        <Reveal mode="stagger" className="grid gap-6 md:grid-cols-3">
          {TOOLS.cards.map((c) => {
            const Icon = ICONS[c.id as keyof typeof ICONS];
            return (
              <a key={c.id} href={`#${c.id}`} className="card-hover h-full flex flex-col p-6 md:p-8" style={{ background: "var(--bg)" }}>
                <Icon size={26} strokeWidth={1.5} aria-hidden="true" style={{ color: "var(--brand)" }} />
                <p className="text-xl font-bold mt-5" style={{ color: "var(--text-primary)" }}>
                  {c.title}
                </p>
                <p className="mt-3 flex-1" style={{ color: "var(--text-body)" }}>
                  {c.body}
                </p>
                <span className="link-arrow mt-5">
                  {c.button}
                  <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </Reveal>
      </Section>

      <Section id="free-check" label={check.title} tint>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHead eyebrow="Free" title={check.title} body={check.body} className="" />
          <LeadForm whatsapp={WHATSAPP_MESSAGES["/tools"]} />
        </div>
      </Section>

      <Section id="lead-loss" label={CALCULATOR.title}>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHead eyebrow="Free" title={CALCULATOR.title} body={TOOLS.cards[1].body} className="" />
          <LeadLossCalculator />
        </div>
      </Section>

      <Section id="idea-score" label={IDEA_SCORE.title} tint>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHead eyebrow="Free · for founders" title={IDEA_SCORE.title} body={TOOLS.cards[2].body} className="" />
          <IdeaScoreTest />
        </div>
      </Section>

      <FinalCTA whatsapp={WHATSAPP_MESSAGES["/tools"]} />
    </div>
  );
}
