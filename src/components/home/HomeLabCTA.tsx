import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export default function HomeLabCTA() {
  return (
    <section
      aria-labelledby="home-cta-heading"
      className="padding-section text-center"
      style={{ background: "var(--bg-secondary)" }}
    >
      <AnimateOnScroll className="layout-grid">
        <h2 id="home-cta-heading" className="mb-4 text-foreground text-balance">
          Let&apos;s look at your enquiries together.
        </h2>
        <p className="text-lg text-body mx-auto mb-10 text-pretty" style={{ maxWidth: "32rem" }}>
          {/* Same promise as the /call flow: a few quick questions, then pick a time */}
          Answer a few quick questions and pick a time. It takes about 3 minutes.
        </p>
        <Link href="/call" className="btn-primary btn-lg">
          Book a call
        </Link>
      </AnimateOnScroll>
    </section>
  );
}
