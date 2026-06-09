"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export default function NICTABlock() {
  return (
    <section className="py-24 md:py-28 border-t border-border-subtle" style={{ background: "var(--bg-secondary)" }}>
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll>
          <div className="max-w-2xl">
            <h2
              className="font-poppins mb-5"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 2.9rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "var(--text-primary)",
              }}
            >
              No pitch deck. No prep. Just tell us the idea.
            </h2>
            <p className="text-base leading-relaxed mb-9" style={{ color: "var(--text-muted)", maxWidth: "500px" }}>
              In your own words — a paragraph, a voice note, a rant. The first conversation is free, and we&apos;ll tell you honestly whether validation is worth your money. Sometimes it isn&apos;t, and we&apos;ll say so.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918169315080?text=Hi%2C%20here%27s%20my%20idea%3A%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-widest transition-opacity hover:opacity-90 cursor-pointer"
                style={{ padding: "15px 34px", background: "var(--navy)", color: "#fff", borderRadius: "var(--radius-btn)", borderBottom: "3px solid var(--accent)" }}
              >
                WhatsApp us the idea
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-widest transition-colors cursor-pointer"
                style={{ padding: "15px 34px", border: "1px solid var(--border-color)", color: "var(--text-primary)", borderRadius: "var(--radius-btn)" }}
              >
                Book a call
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
