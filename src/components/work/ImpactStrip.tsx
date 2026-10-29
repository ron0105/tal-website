import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { getHeadlineStats } from "@/lib/work";

// Two per row even on phones, so four numbers don't turn into one long column
const cols = { 2: "grid-cols-2", 3: "sm:grid-cols-3", 4: "grid-cols-2 lg:grid-cols-4" } as const;

// Big numbers first, the way consulting firms open (Rohan pointed at mckinsey.com/in, Oct 29 2026).
// Fed by content/work: the brands count, then the "featured" results once they're confirmed.
// Used on Home, Work and About, so the same numbers show everywhere.
export default function ImpactStrip({ background = "var(--bg)" }: { background?: string }) {
  const stats = getHeadlineStats();
  if (stats.length < 2) return null;

  return (
    <section
      aria-label="Our team's impact"
      className="px-6 md:px-10"
      style={{ background, paddingTop: "clamp(2.5rem, 6vh, 4rem)", paddingBottom: "clamp(3rem, 7vh, 5rem)" }}
    >
      <AnimateOnScroll className="layout-grid">
        <p className="label-eyebrow mb-8" style={{ color: "var(--accent-text)" }}>
          Our team&apos;s impact
        </p>
        <ul
          className={`grid gap-x-6 gap-y-8 ${cols[Math.min(stats.length, 4) as 2 | 3 | 4]}`}
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          {stats.map((s) => {
            const body = (
              <>
                <span className="block font-poppins leading-none mb-3" style={{ color: "var(--brand)", fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
                  {s.value}
                </span>
                <span className="block text-base leading-snug" style={{ color: "var(--text-primary)" }}>
                  {s.label}
                </span>
                <span className="block mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  {s.brand}
                </span>
              </>
            );
            return (
              <li key={s.brand} className="pt-6">
                {s.href ? (
                  <Link href={s.href} className="block hover:opacity-80 transition-opacity">
                    {body}
                  </Link>
                ) : (
                  body
                )}
              </li>
            );
          })}
        </ul>
      </AnimateOnScroll>
    </section>
  );
}
