import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/site/Hero";
import { Section, SectionHead } from "@/components/site/Primitives";
import { TRAINING as T } from "@/content/grow";

export const metadata: Metadata = { title: T.meta.title, description: T.meta.description };

// Rebuild master prompt section 5.10. The four tracks come from content/grow.ts.
export default function Training() {
  return (
    <div>
      <Hero eyebrow="Grow With TAL · Training" title={T.h1} sub={T.sub} primary={{ label: T.button, href: "#batches" }} />
      <Section id="batches" label={T.batchesTitle}>
        <SectionHead title={T.batchesTitle} />
        <ul className="grid gap-4 sm:grid-cols-2">
          {T.batches.map((b) => (
            <li key={b.name}>
              <Link href={b.href} className="card-hover h-full block p-6" style={{ background: "var(--bg)" }}>
                <p className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                  {b.name}
                </p>
                <p className="mt-2" style={{ color: "var(--text-body)" }}>
                  {b.line}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
