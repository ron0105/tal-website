import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { WorkCard } from "@/components/work/TeamWork";
import { getWork, type WorkPiece } from "@/lib/work";

// Three case studies with strong visuals; the rest live on /work
const PICKS = ["taiwan-excellence", "cosmic-byte", "bayroute"];

export default function HomeSelectedWork() {
  const picks = PICKS.map((slug) => getWork(slug)).filter((w): w is WorkPiece => Boolean(w));

  return (
    <section
      aria-labelledby="selected-work-heading"
      className="bg-background px-6 md:px-10"
      style={{ paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}
    >
      <div className="layout-grid">
        <AnimateOnScroll className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-eyebrow mb-6 block" style={{ color: "var(--accent-text)" }}>
              Proof
            </span>
            <h2 id="selected-work-heading" className="text-foreground text-balance">
              Work by our team
            </h2>
          </div>
          <Link href="/work#team-work" className="btn-ghost shrink-0">
            See all work →
          </Link>
        </AnimateOnScroll>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((w, i) => (
            <li key={w.slug}>
              <AnimateOnScroll delay={i * 0.06} className="h-full">
                <WorkCard w={w} />
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
