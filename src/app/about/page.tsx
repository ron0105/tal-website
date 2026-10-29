import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import AboutLab from "@/components/about/AboutLab";
import ImpactStrip from "@/components/work/ImpactStrip";
import { TEAM_BRANDS } from "@/lib/work";

export const metadata: Metadata = {
  title: "About",
  description:
    "TAL, short for The Adda Labs, is a Mumbai team with big-brand experience. We help businesses that grow on enquiries turn more of them into customers.",
};

// Impact first (Rohan, Oct 29 2026): who we help, the numbers, why us, the team, one call.
// The earlier AboutHero, AboutStory and AboutTeam stay on disk but are no longer imported.
export default function About() {
  return (
    <div>
      <section
        className="bg-background"
        style={{ paddingTop: "clamp(9rem, 16vh, 12rem)", paddingBottom: "clamp(1.5rem, 4vh, 2.5rem)" }}
      >
        <div className="layout-grid px-6 md:px-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} aria-hidden="true" />
            <span className="label-eyebrow text-accent">About TAL</span>
          </div>
          <h1 className="font-poppins mb-6" style={{ maxWidth: "18ch" }}>
            Big-brand experience, for businesses like yours
          </h1>
          <p className="text-lg leading-relaxed text-body text-pretty" style={{ maxWidth: "38rem" }}>
            We help businesses that grow on enquiries turn more of them into customers. Between our team and advisors,
            we&apos;ve worked with {TEAM_BRANDS} brands, from Accenture and ONGC to Taiwan Excellence and Pilgrim. Now we
            do it for businesses that can&apos;t afford to lose a single enquiry.
          </p>
        </div>
      </section>

      <ImpactStrip />

      <AboutLab />

      <section aria-labelledby="about-cta-heading" className="padding-section text-center" style={{ background: "var(--bg-secondary)" }}>
        <AnimateOnScroll className="layout-grid">
          <h2 id="about-cta-heading" className="mb-10 text-foreground text-balance">
            Tell us where your enquiries go.
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
