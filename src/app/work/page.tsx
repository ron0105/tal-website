import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import WorkCards from "@/components/work/WorkCards";

export const metadata: Metadata = {
  title: "What we work on",
  description:
    "The Adda Labs works across business and marketing, technology, sustainability, public causes and new ventures, with design thinking running through all of it.",
};

export default function WorkPage() {
  return (
    <div>
      <section
        className="bg-background"
        style={{ paddingTop: "clamp(9rem, 16vh, 12rem)", paddingBottom: "clamp(2.5rem, 6vh, 4rem)" }}
      >
        <div className="layout-grid px-6 md:px-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} aria-hidden="true" />
            <span className="label-eyebrow text-accent">The Adda Labs</span>
          </div>
          <h1 className="font-poppins mb-6">What we work on</h1>
          <p className="text-lg leading-relaxed text-body" style={{ maxWidth: "34rem" }}>
            Five lines of work, one way of thinking.
          </p>
        </div>
      </section>

      <section aria-label="Lines of work" className="bg-background px-6 md:px-10" style={{ paddingBottom: "clamp(3rem, 7vh, 5rem)" }}>
        <WorkCards />
      </section>

      <section aria-labelledby="work-thread-heading" className="px-6 md:px-10 py-14 text-center" style={{ background: "var(--bg-secondary)" }}>
        <AnimateOnScroll className="layout-grid">
          <h2 id="work-thread-heading" className="mb-3 text-foreground">
            Design thinking runs through all of it
          </h2>
          <p className="text-lg text-body mx-auto" style={{ maxWidth: "36rem" }}>
            One human-centred way of solving problems, which is why we work across fields, marketing included.
          </p>
        </AnimateOnScroll>
      </section>

      <section aria-labelledby="work-cta-heading" className="padding-section text-center bg-background">
        <AnimateOnScroll className="layout-grid">
          <h2 id="work-cta-heading" className="mb-10 text-foreground">
            Have something worth building?
          </h2>
          <Link href="/contact" className="btn-primary" style={{ padding: "18px 44px", fontSize: "1.05rem" }}>
            Start a conversation
          </Link>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
