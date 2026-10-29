import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { getWork } from "@/lib/work";

// The customer's pain in their own words, then the fix (Rohan, Oct 29 2026).
// The fixes match the cards on /services, so the promise is the same everywhere.
const pains = [
  {
    pain: "People search for what we do, and find someone else.",
    fix: "A website and Google profile that put you first, with one tap to reach you.",
  },
  {
    pain: "Enquiries wait hours for a reply, and go cold.",
    fix: "A reply in seconds, and follow-ups that go out on their own.",
  },
  {
    pain: "Our posts get likes, but nobody calls.",
    fix: "Posts, reels and ads made to bring people in, not just to fill the feed.",
  },
  {
    pain: "Customers can't tell why they should pick us.",
    fix: "One clear line, and an offer that makes yes easy.",
  },
];

export default function HomePains() {
  // Our own data, from the clinic check in content/work, so the number has one home
  const check = getWork("clinic-leads-finder");
  const stat = check?.results[0];

  return (
    <section
      aria-labelledby="pains-heading"
      className="px-6 md:px-10"
      style={{ background: "var(--bg-secondary)", paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}
    >
      <div className="layout-grid">
        <AnimateOnScroll className="mb-12">
          <span className="label-eyebrow mb-6 block" style={{ color: "var(--accent-text)" }}>
            The problem
          </span>
          <h2 id="pains-heading" className="mb-4 text-foreground text-balance">
            Most businesses don&apos;t need more leads. They lose the ones they get.
          </h2>
        </AnimateOnScroll>

        <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-start">
          <ul className="flex flex-col">
            {pains.map((p, i) => (
              <li key={p.pain}>
                <AnimateOnScroll delay={i * 0.06}>
                  <div className="grid gap-2 py-6 md:grid-cols-2 md:gap-8" style={{ borderTop: "1px solid var(--border-color)" }}>
                    <p className="text-lg leading-snug" style={{ color: "var(--text-primary)" }}>
                      &ldquo;{p.pain}&rdquo;
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
                      <span aria-hidden="true" style={{ color: "var(--brand)" }}>→ </span>
                      {p.fix}
                    </p>
                  </div>
                </AnimateOnScroll>
              </li>
            ))}
            <li className="pt-6" style={{ borderTop: "1px solid var(--border-color)" }}>
              <Link href="/services" className="btn-ghost">
                See how we fix each one →
              </Link>
            </li>
          </ul>

          {stat && check && (
            <AnimateOnScroll>
              <Link
                href={`/work/${check.slug}`}
                className="block rounded-2xl p-7 transition-colors hover:border-[var(--border-strong)]"
                style={{ background: "var(--bg)", border: "1px solid var(--border-subtle)" }}
              >
                <span className="label-eyebrow block mb-5" style={{ color: "var(--accent-text)" }}>
                  From our own check
                </span>
                <span className="block font-poppins leading-none mb-3" style={{ color: "var(--brand)", fontSize: "clamp(2.75rem, 5vw, 3.5rem)" }}>
                  {stat.value}
                </span>
                <span className="block text-base leading-snug mb-4" style={{ color: "var(--text-primary)" }}>
                  {stat.label}
                </span>
                <span className="block text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Good clinics, rated 4.8 and up, losing patients online. October 2026. See the check →
                </span>
              </Link>
            </AnimateOnScroll>
          )}
        </div>
      </div>
    </section>
  );
}
