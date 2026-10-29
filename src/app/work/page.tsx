import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import TeamWork from "@/components/work/TeamWork";
import ImpactStrip from "@/components/work/ImpactStrip";
import LogoWall from "@/components/work/LogoWall";

export const metadata: Metadata = {
  title: "Case studies and results from our team",
  description:
    "Brands our team has worked with, what we made for them, and what it did: websites, posts, ads, follow-ups and positioning, with the numbers.",
};

// Proof first (Rohan, Oct 29 2026). The five "lines of work" cards (sustainability, public
// causes, ventures...) were cut as off-offer; WorkCards stays on disk but isn't imported.
export default function WorkPage() {
  return (
    <div>
      <section
        className="bg-background"
        style={{ paddingTop: "clamp(9rem, 16vh, 12rem)", paddingBottom: "clamp(1.5rem, 4vh, 2.5rem)" }}
      >
        <div className="layout-grid px-6 md:px-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} aria-hidden="true" />
            <span className="label-eyebrow text-accent">Our work</span>
          </div>
          <h1 className="font-poppins mb-6" style={{ maxWidth: "16ch" }}>
            Work that moved the numbers
          </h1>
          <p className="text-lg leading-relaxed text-body text-pretty" style={{ maxWidth: "36rem" }}>
            Websites, posts, ads and follow-ups our team has made for brands from gaming gear to restaurants to B2B
            software, and what each one did.
          </p>
        </div>
      </section>

      <ImpactStrip />

      <LogoWall />

      <TeamWork />

      <section aria-labelledby="work-cta-heading" className="padding-section text-center bg-background">
        <AnimateOnScroll className="layout-grid">
          <h2 id="work-cta-heading" className="mb-10 text-foreground text-balance">
            Want results like these for your business?
          </h2>
          <Link href="/call" className="btn-primary btn-lg">
            Book a call
          </Link>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
