import Hero from "@/components/site/Hero";
import AuditSheet, { CHANNEL_ICONS } from "@/components/site/AuditSheet";
import FAQSection from "@/components/site/FAQSection";
import FinalCTA from "@/components/site/FinalCTA";
import { Section, SectionHead } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { Check, ListChecks, Phone, Search } from "lucide-react";
import { PLANS_PAGE as P } from "@/content/plans";
import { WHATSAPP_MESSAGES } from "@/content/navigation";

const STEP_ICONS = [Phone, Search, ListChecks];

// The three paths after the audit, drawn from the Adda mark: one circle, two circles, the mark itself
const PATH_MARKS = [
  <svg key="1" width="22" height="16" viewBox="0 0 22 16" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="var(--brand)" /></svg>,
  <svg key="2" width="22" height="16" viewBox="0 0 22 16" aria-hidden="true"><circle cx="7" cy="8" r="5.5" fill="none" stroke="var(--brand)" strokeWidth="2" /><circle cx="15" cy="8" r="5.5" fill="none" stroke="var(--brand)" strokeWidth="2" /></svg>,
  <svg key="3" width="22" height="16" viewBox="0 0 22 16" aria-hidden="true"><circle cx="7.5" cy="8" r="6" fill="var(--brand)" /><circle cx="14" cy="8" r="6" fill="none" stroke="#C06B3A" strokeWidth="2" /></svg>,
];

// /pricing is the free audit page (Rohan, Nov 3 2026): hero with an example audit, how it works,
// what happens after, pricing in words, FAQ, final CTA. The plan cards live on Home only now.
export default function Pricing() {
  return (
    <div>
      <Hero
        eyebrow={P.eyebrow}
        title={P.h1}
        sub={
          <>
            {P.sub}
            <span className="block mt-4 pl-4" style={{ borderLeft: "2px solid var(--brand-on-dark)" }}>
              {P.subKeep}
            </span>
          </>
        }
        primary={{ label: P.cta, href: "/call", cta: "book-call" }}
        microline={P.microline}
        aside={<AuditSheet />}
      />

      <Section label={P.howTitle}>
        <SectionHead title={P.howTitle} />
        <Reveal mode="stagger" as="ol" className="grid gap-4 md:grid-cols-3 md:gap-6 list-none p-0 m-0">
          {P.steps.map((s, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <li key={s.title} className="card-hover p-6 md:p-8 grid gap-4 content-start" style={{ background: "var(--bg)" }}>
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-9 h-9 rounded-full text-sm tabular" style={{ background: "var(--brand)", color: "#fff", fontFamily: "var(--font-mono)" }} aria-hidden="true">
                    {i + 1}
                  </span>
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" style={{ color: "var(--brand)" }} />
                </div>
                <h3>{s.title}</h3>
                {s.channels && (
                  <div className="flex flex-wrap gap-2">
                    {s.channels.map((c) => {
                      const C = CHANNEL_ICONS[c];
                      return (
                        <span key={c} className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}>
                          <span style={{ color: "var(--brand)" }}><C size={15} /></span>
                          {c}
                        </span>
                      );
                    })}
                  </div>
                )}
                {s.points && (
                  <ul className="grid gap-2 list-none p-0 m-0">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex gap-3" style={{ color: "var(--text-primary)" }}>
                        <Check size={18} strokeWidth={1.5} aria-hidden="true" style={{ color: "var(--brand)", flexShrink: 0, marginTop: 4 }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </Reveal>

        <Reveal className="mt-6 grid gap-5 lg:grid-cols-[auto_1fr] lg:gap-10 items-center p-6 md:p-8 rounded-[var(--radius-card)] bg-[var(--brand-tint)]">
          <h3 style={{ color: "var(--text-primary)" }}>{P.yourCall}</h3>
          <div className="flex flex-wrap gap-3">
            {P.paths.map((p, i) => (
              <span key={p} className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full font-semibold" style={{ background: "var(--bg)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}>
                {PATH_MARKS[i]}
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section label={P.pricingTitle} tint>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <SectionHead eyebrow="Pricing" title={P.pricingTitle} body={P.pricingBody[0]} className="" />
            <p className="body-copy measure mt-4">{P.pricingBody[1]}</p>
          </div>
          <Reveal>
            <div className="card-hover overflow-hidden" style={{ background: "var(--bg)" }}>
              {P.priceRows.map((r, i) => (
                <div key={r.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-6 md:px-8 py-6" style={i ? { borderTop: "1px dashed var(--border-color)" } : undefined}>
                  <h3>{r.label}</h3>
                  {i === 0 ? (
                    <span className="text-[2rem] leading-none" style={{ fontFamily: "var(--font-fraunces)", fontWeight: 500, color: "var(--brand)" }}>
                      {r.value}
                    </span>
                  ) : (
                    <span className="stat-label">{r.value}</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <FAQSection title={P.faqTitle} eyebrow={P.eyebrow} faqs={P.faqs} />

      <FinalCTA title={P.closeTitle} body="" cta={P.cta} whatsapp={WHATSAPP_MESSAGES["/pricing"]} />
    </div>
  );
}
