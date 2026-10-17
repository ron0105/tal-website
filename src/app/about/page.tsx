import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import AboutLab from "@/components/about/AboutLab";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Adda Labs is a frugal ideation and venture-building lab. We start with people, build small, test with them and grow what works.",
};

// Lab positioning (Oct 2026): a short story, the founder, three principles.
// The earlier AboutHero, AboutStory and AboutTeam stay on disk but are no longer imported.
export default function About() {
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
          <h1 className="font-poppins">About</h1>
        </div>
      </section>

      <section aria-label="Our story, founder and principles" className="bg-background px-6 md:px-10" style={{ paddingBottom: "clamp(3rem, 7vh, 5rem)" }}>
        <AboutLab />
      </section>

      <section aria-labelledby="about-cta-heading" className="padding-section text-center" style={{ background: "var(--bg-secondary)" }}>
        <AnimateOnScroll className="layout-grid">
          <h2 id="about-cta-heading" className="mb-10 text-foreground">
            Let us build something together.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ padding: "18px 44px", fontSize: "1.05rem" }}>
            Start a conversation
          </Link>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
