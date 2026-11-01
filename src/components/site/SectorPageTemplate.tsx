import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "./Hero";
import Stepper from "./Stepper";
import StatCallout from "./StatCallout";
import GuaranteeBand from "./GuaranteeBand";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import LeadForm from "./LeadForm";
import IdeaScoreTest from "./IdeaScoreTest";
import { JsonLd, Section, SectionHead } from "./Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SECTOR_LABELS as L, type Sector } from "@/content/sectors";
import { SITE_URL } from "@/lib/site";

/**
 * One template for every sector page (spec 5.3), driven by content/sectors.ts:
 * hero → what's going wrong → what we set up → proof → guarantee → free check → FAQ + final CTA.
 */
export default function SectorPageTemplate({ sector: s }: { sector: Sector }) {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Who We Help", item: `${SITE_URL}/sectors` },
            { "@type": "ListItem", position: 3, name: s.name, item: `${SITE_URL}/sectors/${s.slug}` },
          ],
        }}
      />
      <Hero eyebrow={s.name} title={s.h1} sub={s.pain} primary={{ label: s.checkButton, href: "#free-check" }} whatsapp={s.whatsapp} />

      <Section label={L.wrong}>
        <SectionHead eyebrow={L.wrong} title={s.leakTitle} />
        <Reveal mode="stagger" className="grid gap-6 md:grid-cols-3">
          {s.problems.map((p) => (
            <div key={p.title} className="card-hover h-full p-6 md:p-8" style={{ background: "var(--bg)" }}>
              <p className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                {p.title}
              </p>
              <p className="mt-3" style={{ color: "var(--text-body)" }}>
                {p.body}
              </p>
            </div>
          ))}
        </Reveal>
      </Section>

      <Section label={L.setup} tint>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHead eyebrow={L.setup} title={`The ${s.systemName}`} className="" />
          <Stepper steps={s.systemParts} label={s.systemName} />
        </div>
      </Section>

      <Section label={L.proof}>
        <SectionHead eyebrow={L.proof} title={L.proofTitle} />
        {s.proof.kind === "stat" && (
          <Reveal mode="fade">
            <StatCallout value={s.proof.value} label={s.proof.label} source={s.proof.source} href={s.proof.href} />
          </Reveal>
        )}
        {s.proof.kind === "links" && (
          <Reveal mode="stagger" className="grid gap-4 md:grid-cols-2">
            {s.proof.items.map((p) => (
              <Link key={p.href} href={p.href} className="card-hover flex items-center justify-between gap-4 p-6" style={{ background: "var(--bg)" }}>
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
                  {p.text}
                </span>
                <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" style={{ color: "var(--brand)" }} />
              </Link>
            ))}
          </Reveal>
        )}
        {s.proof.kind === "todo" && (
          <p className="source-line" style={{ fontSize: "1rem" }}>
            {s.proof.text}
          </p>
        )}
      </Section>

      <GuaranteeBand />

      <Section id="free-check" label={s.checkName}>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHead
            eyebrow={L.check}
            title={s.slug === "founders" ? s.checkName : L.checkTitle(s.checkName)}
            body={s.slug === "founders" ? "10 yes or no questions. Get a score out of 10 and the 3 biggest risks in your idea." : L.checkBody}
            className=""
          />
          {s.slug === "founders" ? <IdeaScoreTest sector={s.slug} /> : <LeadForm sector={s.slug} button={`Get My ${s.checkName}`} whatsapp={s.whatsapp} />}
        </div>
      </Section>

      <FAQSection eyebrow={L.faq} title={L.faqTitle} faqs={s.faqs} tint />

      <FinalCTA whatsapp={s.whatsapp} />
    </div>
  );
}
