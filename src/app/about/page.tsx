import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import AboutLab from "@/components/about/AboutLab";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Adda Labs is a frugal ideation and venture-building lab working across business, technology, sustainability and public causes. We build, test and scale ideas.",
};

// Lab positioning (Oct 2026): hero, story, method, team, beliefs, a slim band, one CTA.
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
          <h1 className="font-poppins mb-6">About</h1>
          <p className="text-lg leading-relaxed text-body text-pretty" style={{ maxWidth: "36rem" }}>
            The Adda Labs is a frugal ideation and venture-building lab working across business, technology,
            sustainability and public causes. We build, test and scale ideas.
          </p>
        </div>
      </section>

      <AboutLab />

      <section
        aria-label="Our work and Live Projects"
        className="border-y border-border-subtle px-6 md:px-10"
        style={{ background: "var(--bg-lift)", paddingTop: "clamp(2.5rem, 6vh, 4rem)", paddingBottom: "clamp(2.5rem, 6vh, 4rem)" }}
      >
        <AnimateOnScroll className="layout-grid flex flex-col items-center gap-5 text-center">
          <p className="text-lg text-foreground">Five lines of work, one way of thinking.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/work" className="btn-ghost">
              See what we work on →
            </Link>
            <Link href="/live-projects?src=site" className="btn-ghost">
              Live Projects for students →
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      <section aria-labelledby="about-cta-heading" className="padding-section text-center bg-background">
        <AnimateOnScroll className="layout-grid">
          <h2 id="about-cta-heading" className="mb-10 text-foreground">
            Let us build something together.
          </h2>
          <Link href="/contact" className="btn-primary btn-lg">
            Start a conversation
          </Link>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
