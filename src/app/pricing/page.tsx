import Hero from "@/components/site/Hero";
import PlanCard from "@/components/site/PlanCard";
import GuaranteeBand from "@/components/site/GuaranteeBand";
import FAQSection from "@/components/site/FAQSection";
import FinalCTA from "@/components/site/FinalCTA";
import { ArrowLink, Section, SectionHead } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { Check } from "lucide-react";
import { PLANS, PLANS_PAGE as P } from "@/content/plans";
import { WHATSAPP_MESSAGES } from "@/content/navigation";

// Rebuild master prompt section 5.4: 4 plans (swipeable on phones), Growth System bonuses,
// a comparison table, the guarantee, plan FAQ, final CTA. Links to /services and /how-we-work.
export default function Pricing() {
  return (
    <div>
      <Hero title={P.h1} sub={P.sub} />

      <Section label="Plans">
        {/* Phones: one swipeable row; desktop: four in a row */}
        <Reveal mode="stagger" className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pt-4 pb-4 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:mx-0 lg:px-0">
          {PLANS.map((p) => (
            <div key={p.name} className="snap-start shrink-0 w-[82%] sm:w-[48%] lg:w-auto">
              <PlanCard plan={p} />
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-12 card-hover p-6 md:p-8 max-w-2xl" >
          <p className="label-eyebrow">{P.bonusesTitle}</p>
          <ul className="grid gap-3 mt-5">
            {P.bonuses.map((b) => (
              <li key={b} className="flex gap-3" style={{ color: "var(--text-body)" }}>
                <Check size={18} strokeWidth={1.5} aria-hidden="true" style={{ color: "var(--brand)", flexShrink: 0, marginTop: 3 }} />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="flex flex-wrap gap-x-8 mt-10">
          <ArrowLink href="/services">How we get you more customers</ArrowLink>
          <ArrowLink href="/how-we-work">{P.howWeWork}</ArrowLink>
        </div>
      </Section>

      <Section label={P.compareTitle} tint>
        <SectionHead title={P.compareTitle} />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm text-left border-collapse">
            <thead>
              <tr>
                <th scope="col" className="p-4" />
                {PLANS.map((p) => (
                  <th key={p.name} scope="col" className="p-4 align-bottom text-base font-bold" style={{ color: "var(--text-primary)", borderBottom: `2px solid ${p.highlight ? "var(--brand)" : "var(--hairline)"}` }}>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {P.compareRows.map((r) => (
                <tr key={r.label} style={{ borderBottom: "1px solid var(--hairline)" }}>
                  <th scope="row" className="p-4 stat-label align-top">
                    {r.label}
                  </th>
                  {PLANS.map((p) => (
                    <td key={p.name} className="p-4 align-top" style={{ color: "var(--text-body)" }}>
                      {String(p[r.key])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <GuaranteeBand />

      <FAQSection title={P.faqTitle} faqs={P.faqs} />

      <FinalCTA whatsapp={WHATSAPP_MESSAGES["/pricing"]} />
    </div>
  );
}
