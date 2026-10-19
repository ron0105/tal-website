import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { getAllLabNotes, formatNoteDate } from "@/lib/lab-notes";

export const metadata: Metadata = {
  title: "Lab notes: case studies and how we work",
  description:
    "Case studies, live builds and the methods behind them, from TAL, a design-thinking lab in Mumbai. What we tried, the numbers, and what we learned.",
};

export default function LabNotes() {
  const notes = getAllLabNotes();

  return (
    <div>
      <section
        className="bg-background"
        style={{ paddingTop: "clamp(9rem, 16vh, 12rem)", paddingBottom: "clamp(2.5rem, 6vh, 4rem)" }}
      >
        <div className="layout-grid px-6 md:px-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} aria-hidden="true" />
            <span className="label-eyebrow text-accent">Lab notes</span>
          </div>
          <h1 className="font-poppins mb-6">What we&rsquo;re building, in the open</h1>
          <p className="text-lg leading-relaxed text-body" style={{ maxWidth: "36rem" }}>
            Finished work, work still in progress, and the methods behind both. Real numbers, including the ones
            that didn&rsquo;t go our way.
          </p>
        </div>
      </section>

      <section
        aria-label="All lab notes"
        className="px-6 md:px-10"
        style={{ background: "var(--bg-secondary)", paddingTop: "clamp(3rem, 7vh, 5rem)", paddingBottom: "clamp(4rem, 8vh, 6rem)" }}
      >
        <AnimateOnScroll className="layout-grid">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <li key={note.slug}>
                <Link
                  href={`/lab-notes/${note.slug}`}
                  className="group flex h-full flex-col gap-4 p-7 transition-colors duration-200 hover:border-[var(--border-strong)]"
                  style={{ background: "var(--bg)", border: "1px solid var(--border-subtle)" }}
                >
                  <span className="label-eyebrow" style={{ color: "var(--accent-text)" }}>
                    {note.tag}
                  </span>
                  <h2 className="text-subsection group-hover:text-accent-ink transition-colors" style={{ color: "var(--text-primary)" }}>
                    {note.title}
                  </h2>
                  <p className="text-base leading-relaxed flex-1" style={{ color: "var(--text-body)" }}>
                    {note.description}
                  </p>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {note.updated ? `Updated ${formatNoteDate(note.updated)}` : formatNoteDate(note.date)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </section>

      <section aria-labelledby="lab-notes-cta-heading" className="padding-section text-center bg-background">
        <AnimateOnScroll className="layout-grid">
          <h2 id="lab-notes-cta-heading" className="mb-10 text-foreground">
            Want this kind of work on your problem?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/call" className="btn-primary btn-lg">
              Book a call
            </Link>
            <Link href="/how-we-work" className="btn-ghost btn-lg">
              See how we work
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
