import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import HWWFlow from "@/components/how-we-work/HWWFlow";
import { WORK_WITH_YOU } from "@/lib/process";

export const metadata: Metadata = {
  title: "How we work: from first call to more customers",
  description:
    "Four steps from your first call to more customers: we listen, we map where enquiries drop off, we build the fix, and you grow.",
};

// What a client gets at each step (Rohan, Oct 29 2026). The ideate-build-test-scale loop and the
// 6-step idea validation were cut: founders are parked till June 2027. HWWLoop, HWWHero, HWWSteps
// and HWWIdeas stay on disk but are no longer imported.
const whatYouGet = [
  { title: "A fixed quote", line: "After one call. No packages to decode, no surprises later." },
  { title: "Pay in parts", line: "You pay as the work lands, not all up front." },
  { title: "Yours to run", line: "We hand over what we build, and show your team how to use it." },
];

export default function HowWeWork() {
  return (
    <div>
      <section
        className="bg-background"
        style={{ paddingTop: "clamp(9rem, 16vh, 12rem)", paddingBottom: "clamp(2.5rem, 6vh, 4rem)" }}
      >
        <div className="layout-grid px-6 md:px-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} aria-hidden="true" />
            <span className="label-eyebrow text-accent">How we work</span>
          </div>
          <h1 className="font-poppins mb-6" style={{ maxWidth: "16ch" }}>
            From first call to more customers
          </h1>
          <p className="text-lg leading-relaxed text-body text-pretty" style={{ maxWidth: "36rem" }}>
            Four steps. At each one you know what you get, what it costs, and what happens next.
          </p>
        </div>
      </section>

      <section
        aria-label="How we work with you"
        className="px-6 md:px-10"
        style={{ background: "var(--bg-secondary)", paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}
      >
        <AnimateOnScroll className="layout-grid">
          <HWWFlow
            id="hww-process-heading"
            eyebrow="Working together"
            heading="The four steps"
            intro="We start with your enquiries, not with a pitch."
            steps={WORK_WITH_YOU}
            cols={4}
            emphasiseLast
          />
        </AnimateOnScroll>
      </section>

      <section
        aria-labelledby="hww-terms-heading"
        className="bg-background px-6 md:px-10"
        style={{ paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}
      >
        <div className="layout-grid">
          <AnimateOnScroll className="mb-10">
            <span className="label-eyebrow mb-6 block" style={{ color: "var(--accent-text)" }}>
              Terms
            </span>
            <h2 id="hww-terms-heading" className="text-foreground">
              Simple terms
            </h2>
          </AnimateOnScroll>
          <ul className="grid gap-4 md:grid-cols-3">
            {whatYouGet.map((t, i) => (
              <li key={t.title}>
                <AnimateOnScroll delay={i * 0.06} className="h-full">
                  <div className="h-full rounded-2xl p-6" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}>
                    <h3 className="text-foreground mb-2">{t.title}</h3>
                    <p className="text-base leading-relaxed text-body">{t.line}</p>
                  </div>
                </AnimateOnScroll>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="hww-cta-heading" className="padding-section text-center" style={{ background: "var(--bg-secondary)" }}>
        <AnimateOnScroll className="layout-grid">
          <h2 id="hww-cta-heading" className="mb-10 text-foreground text-balance">
            Step one is a short call.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/call" className="btn-primary btn-lg">
              Book a call
            </Link>
            <Link href="/work#team-work" className="btn-ghost btn-lg">
              See our work
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
