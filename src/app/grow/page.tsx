import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/site/Hero";
import { Section } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { GROW } from "@/content/grow";

export const metadata: Metadata = { title: { absolute: `${GROW.meta.title} | The Adda Labs` }, description: GROW.meta.description };

// Rebuild master prompt section 5.10: the builders' hub, three cards to the pages below
export default function Grow() {
  return (
    <div>
      <Hero eyebrow="Grow With TAL" title={GROW.h1} />
      <Section label="Grow With TAL">
        <Reveal mode="stagger" className="grid gap-6 md:grid-cols-3">
          {GROW.cards.map((c) => (
            <Link key={c.href} href={c.href} className="card-hover h-full flex flex-col p-6 md:p-8" style={{ background: "var(--bg)" }}>
              <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                {c.title}
              </p>
              <p className="mt-3 flex-1" style={{ color: "var(--text-body)" }}>
                {c.body}
              </p>
              <span className="link-arrow mt-6">
                {c.title}
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </Reveal>
      </Section>
    </div>
  );
}
