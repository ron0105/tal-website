import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/site/Hero";
import StatCallout from "@/components/site/StatCallout";
import WorkFilter, { type WorkCard } from "@/components/site/WorkFilter";
import FinalCTA from "@/components/site/FinalCTA";
import { Eyebrow, Section } from "@/components/site/Primitives";
import { getAllWork, workHref, cardYear, WORK_GROUPS } from "@/lib/work";
import { LOGOS, logoHeight } from "@/lib/logos";
import { WORK_PAGE as W } from "@/content/work-page";

export const metadata: Metadata = { title: { absolute: `${W.meta.title} | The Adda Labs` }, description: W.meta.description };

// Rebuild master prompt section 5.6: top stats, filter chips, Problem → What we did → Result cards
// (Clinic Leads Finder first, cards with a result number before those without), a contextual
// CTA per filter, then two separately labelled logo walls.
export default function Work() {
  const cards: WorkCard[] = getAllWork()
    .filter((w) => !w.hidden)
    .map((w) => ({
      id: w.slug,
      client: w.brand,
      industry: w.sector ?? "",
      problem: w.problem ?? w.summary,
      did: w.did ?? w.summary,
      result: w.cardResult ?? w.results[0],
      year: cardYear(w.year),
      href: workHref(w),
      group: w.group,
    }))
    .sort((a, b) => Number(b.id === W.firstSlug) - Number(a.id === W.firstSlug) || Number(!!b.result) - Number(!!a.result));

  return (
    <div>
      <Hero title={W.h1} sub={W.sub} />

      <Section label="Our numbers" tint>
        <div className="grid gap-12 md:grid-cols-3">
          {W.stats.map((s) => (
            <StatCallout key={s.label} {...s} />
          ))}
        </div>
      </Section>

      <Section label="Our work">
        <WorkFilter cards={cards} filters={[W.all, ...WORK_GROUPS]} label={W.filterLabel} ctas={W.ctas} />
      </Section>

      <Section label="Logos" tint>
        <Eyebrow className="mb-8">{W.logos.team}</Eyebrow>
        <ul className="flex flex-wrap items-center gap-x-12 gap-y-8">
          {LOGOS.map((l) => {
            const h = logoHeight(l, 52);
            return (
              <li key={l.file}>
                <Image src={`/logos/${l.file}.webp`} alt={l.brand} width={Math.round((l.w / l.h) * h)} height={h} style={{ filter: "grayscale(1)", opacity: 0.75 }} />
              </li>
            );
          })}
        </ul>
      </Section>

      <FinalCTA whatsapp={W.whatsapp} />
    </div>
  );
}
