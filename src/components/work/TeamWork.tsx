import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { WORK_LANES, getAllWork, workHref, workMeta, type WorkPiece } from "@/lib/work";
import BrandMark from "@/components/work/BrandMark";

export function WorkCard({ w }: { w: WorkPiece }) {
  const href = workHref(w);
  const meta = workMeta(w);

  const inner = (
    <>
      {/* Every card opens with a picture: the work itself, or the brand's logo on a quiet tile */}
      <div className="relative aspect-[4/3] overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
        {w.cover ? (
          <Image src={w.cover} alt={`${w.brand}: ${w.title}`} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <BrandMark brand={w.brand} base={84} className="justify-center" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        {/* With a cover the logo sits here; without one it's already on the tile above */}
        {w.cover ? (
          <BrandMark brand={w.brand} base={46} />
        ) : (
          <p className="sr-only">{w.brand}</p>
        )}
        <h4 className="text-lg leading-snug" style={{ color: "var(--text-primary)" }}>
          {w.title}
        </h4>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
          {w.summary}
        </p>
        {w.results.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {w.results.map((r) => (
              <li
                key={r.value + r.label}
                className="text-xs px-2.5 py-1"
                style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", borderRadius: "999px" }}
              >
                <strong>{r.value}</strong> {r.label}
              </li>
            ))}
          </ul>
        )}
        {(meta || href) && (
          <div
            className="mt-auto pt-4 flex items-center justify-between gap-3 text-xs"
            style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border-subtle)" }}
          >
            <span>{meta}</span>
            {href && (
              <span className="text-sm font-semibold shrink-0 group-hover:text-accent-ink transition-colors" style={{ color: "var(--text-primary)" }}>
                See the work →
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );

  const shell = "group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-background";
  return href ? (
    <Link href={href} className={`${shell} transition-colors duration-200 hover:border-[var(--border-strong)]`}>
      {inner}
    </Link>
  ) : (
    <div className={shell}>{inner}</div>
  );
}

export default function TeamWork() {
  const work = getAllWork();

  return (
    <section
      id="team-work"
      aria-labelledby="team-work-heading"
      className="px-6 md:px-10"
      style={{ background: "var(--bg-secondary)", paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}
    >
      <div className="layout-grid">
        <AnimateOnScroll className="mb-12">
          <span className="label-eyebrow mb-6 block" style={{ color: "var(--accent-text)" }}>
            Proof
          </span>
          <h2 id="team-work-heading" className="mb-4 text-foreground text-balance">
            Work by our team
          </h2>
          <p className="text-lg leading-relaxed text-body text-pretty" style={{ maxWidth: "38rem" }}>
            Brands our team members have worked with, what we made for them, and what it did.
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col gap-14">
          {WORK_LANES.map((lane) => {
            const pieces = work.filter((w) => w.lane === lane);
            if (pieces.length === 0) return null;
            return (
              <div key={lane}>
                <h3 className="mb-6 text-foreground">{lane}</h3>
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {pieces.map((w, i) => (
                    <li key={w.slug}>
                      <AnimateOnScroll delay={(i % 3) * 0.06} className="h-full">
                        <WorkCard w={w} />
                      </AnimateOnScroll>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
