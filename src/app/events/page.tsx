import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/site/Hero";
import { Section, SectionHead } from "@/components/site/Primitives";
import { EVENTS as E } from "@/content/grow";

export const metadata: Metadata = { title: E.meta.title, description: E.meta.description };

// Rebuild master prompt section 5.10: event list from content/grow.ts (none set yet), plus the
// demand form that was this page's only section before (EventsHero stays on disk).
export default function EventsPage() {
  return (
    <div>
      <Hero eyebrow={`Grow With TAL · ${E.when}`} title={E.h1} sub={E.sub} />
      <Section label={E.listTitle}>
        <SectionHead title={E.listTitle} />
        {E.events.length ? (
          <ul className="grid gap-4">
            {E.events.map((ev) => (
              <li key={ev.name} className="card-hover p-6" style={{ background: "var(--bg)" }}>
                <p className="font-bold">{ev.name}</p>
                <p className="stat-label mt-2">
                  {ev.date} · {ev.place}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="body-copy measure">{E.eventsEmpty}</p>
        )}
        <a href={E.formHref} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg mt-10">
          {E.formText}
          <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </Section>
    </div>
  );
}
