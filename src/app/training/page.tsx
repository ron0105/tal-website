import type { Metadata } from "next";
import Hero from "@/components/site/Hero";
import { Section, SectionHead } from "@/components/site/Primitives";
import { TRAINING as T } from "@/content/grow";

export const metadata: Metadata = { title: T.meta.title, description: T.meta.description };

// Rebuild master prompt section 5.10. Batches come from content/grow.ts; none are set yet.
export default function Training() {
  return (
    <div>
      <Hero eyebrow="Grow With TAL · Training" title={T.h1} sub={T.sub} primary={{ label: T.button, href: "#batches" }} />
      <Section id="batches" label={T.batchesTitle}>
        <SectionHead title={T.batchesTitle} />
        {T.batches.length ? (
          <ul className="grid gap-4">
            {T.batches.map((b) => (
              <li key={b.name} className="card-hover p-6" style={{ background: "var(--bg)" }}>
                <p className="font-bold">{b.name}</p>
                <p className="stat-label mt-2">
                  {b.dates} · {b.mode}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="source-line" style={{ fontSize: "1rem" }}>
            {T.batchesTodo}
          </p>
        )}
      </Section>
    </div>
  );
}
