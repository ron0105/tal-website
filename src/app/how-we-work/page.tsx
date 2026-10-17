import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import HWWLoop from "@/components/how-we-work/HWWLoop";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "One simple loop: ideate, build, test and scale, then begin again a little wiser. Design thinking guides every step.",
};

// Lab positioning (Oct 2026): one title, one line, one loop, one CTA.
// The earlier HWWHero, HWWSteps and HWWIdeas stay on disk but are no longer imported.
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
            <span className="label-eyebrow text-accent">Our framework</span>
          </div>
          <h1 className="font-poppins mb-6">How we work</h1>
          <p className="text-lg leading-relaxed text-body" style={{ maxWidth: "34rem" }}>
            One simple loop, repeated until an idea is ready for the world.
          </p>
        </div>
      </section>

      <section
        aria-label="The loop: ideate, build, test, scale"
        className="px-6 md:px-10 py-14"
        style={{ background: "var(--bg-secondary)" }}
      >
        <AnimateOnScroll className="layout-grid">
          <HWWLoop />
          <p className="text-lg text-body text-center mx-auto mt-6" style={{ maxWidth: "36rem" }}>
            Design thinking guides every step, so what we make stays useful to real people.
          </p>
        </AnimateOnScroll>
      </section>

      <section aria-labelledby="hww-cta-heading" className="padding-section text-center bg-background">
        <AnimateOnScroll className="layout-grid">
          <h2 id="hww-cta-heading" className="mb-10 text-foreground">
            Have an idea to start the loop with?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary" style={{ padding: "18px 44px", fontSize: "1.05rem" }}>
              Start a conversation
            </Link>
            <Link href="/work" className="btn-ghost" style={{ padding: "18px 36px", fontSize: "1.05rem" }}>
              See what we work on
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
