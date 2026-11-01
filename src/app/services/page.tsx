import type { Metadata } from "next";
import { Check } from "lucide-react";
import Hero from "@/components/site/Hero";
import FinalCTA from "@/components/site/FinalCTA";
import { ArrowLink, Eyebrow, Section } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SERVICES as S } from "@/content/services";

export const metadata: Metadata = { title: S.meta.title, description: S.meta.description };

function Block({ eyebrow, title, items, link, href }: { eyebrow: string; title: string; items: string[]; link: string; href: string }) {
  return (
    <div className="card-hover h-full flex flex-col p-6 md:p-8" style={{ background: "var(--bg)" }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
        {title}
      </h2>
      <ul className="grid gap-3 mt-6 flex-1">
        {items.map((i) => (
          <li key={i} className="flex gap-3" style={{ color: "var(--text-body)" }}>
            <Check size={18} strokeWidth={1.5} aria-hidden="true" style={{ color: "var(--brand)", flexShrink: 0, marginTop: 3 }} />
            {i}
          </li>
        ))}
      </ul>
      <ArrowLink href={href} className="mt-6">
        {link}
      </ArrowLink>
    </div>
  );
}

// Rebuild master prompt section 5.5: a lighter, supporting page, linked from Home and Plans
export default function Services() {
  return (
    <div>
      <Hero title={S.h1} sub={S.sub} />
      <Section label="What we do">
        <Reveal mode="stagger" className="grid gap-6 md:grid-cols-3">
          {S.blocks.map((b) => (
            <Block key={b.title} {...b} link={S.partOf} href="/pricing" />
          ))}
        </Reveal>
        <Reveal mode="fade" className="mt-6">
          <Block eyebrow={S.strategy.eyebrow} title={S.strategy.title} items={S.strategy.items} link={S.strategy.link} href="/pricing" />
        </Reveal>
      </Section>
      <FinalCTA />
    </div>
  );
}
