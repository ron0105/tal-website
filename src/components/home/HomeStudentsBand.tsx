import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export default function HomeStudentsBand() {
  return (
    <section
      aria-label="For students"
      className="border-y border-border-subtle"
      style={{ background: "var(--bg-lift)", padding: "clamp(2.5rem, 6vh, 4rem) 1.5rem" }}
    >
      <AnimateOnScroll className="layout-grid md:px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <p className="text-lg text-foreground">Learn by doing, on real projects.</p>
        <Link href="/live-projects?src=site" className="btn-ghost" style={{ padding: "14px 28px" }}>
          Live Projects for students →
        </Link>
      </AnimateOnScroll>
    </section>
  );
}
