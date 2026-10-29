import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { getAllLabNotes } from "@/lib/lab-notes";

// The Lab notes guides, linked from the home page so visitors and Google both find them
// (SEO plan Round 2, Oct 29 2026). A new guide shows up here on its own.
export default function HomeGuides() {
  const guides = getAllLabNotes()
    .filter((n) => n.tag === "Guide")
    .slice(0, 4);
  if (guides.length === 0) return null;

  return (
    <section
      aria-labelledby="home-guides-heading"
      className="bg-background px-6 md:px-10"
      style={{ paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}
    >
      <div className="layout-grid">
        <AnimateOnScroll className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-eyebrow mb-6 block" style={{ color: "var(--accent-text)" }}>
              Free guides
            </span>
            <h2 id="home-guides-heading" className="text-foreground text-balance">
              Fix it yourself, step by step
            </h2>
          </div>
          <Link href="/lab-notes" className="btn-ghost shrink-0">
            All lab notes →
          </Link>
        </AnimateOnScroll>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((g, i) => (
            <li key={g.slug}>
              <AnimateOnScroll delay={i * 0.06} className="h-full">
                <Link
                  href={`/lab-notes/${g.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl p-6 transition-colors duration-200 hover:border-[var(--border-strong)]"
                  style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}
                >
                  <span className="label-eyebrow" style={{ color: "var(--accent-text)" }}>
                    Guide
                  </span>
                  <h3 className="text-lg leading-snug group-hover:text-accent-ink transition-colors" style={{ color: "var(--text-primary)" }}>
                    {g.title}
                  </h3>
                  <span className="mt-auto pt-2 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    Read the guide →
                  </span>
                </Link>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
