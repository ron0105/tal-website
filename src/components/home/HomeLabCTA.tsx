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
        <h2 id="home-cta-heading" className="mb-10 text-foreground">
          Bring us an idea worth building.
        </h2>
        <Link href="/contact" className="btn-primary btn-lg">
          Start a conversation
        </Link>
      </AnimateOnScroll>
    </section>
  );
}
