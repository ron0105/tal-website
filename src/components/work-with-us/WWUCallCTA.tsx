"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export default function WWUCallCTA() {
  return (
    <section
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="layout-grid px-6 md:px-10 py-16 md:py-20">
        <AnimateOnScroll className="max-w-[640px]">
          <span className="label-eyebrow block mb-6">Low-friction entry point</span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            Not sure where to start?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--text-body)",
              marginBottom: "2rem",
              maxWidth: "520px",
            }}
          >
            Book a free 15-minute call. We&apos;ll figure out together where you are, what you need, and whether TAL is the right fit. No pitch. No preparation needed.
          </p>
          <a
            href="#"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            Book a 15-min call →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
