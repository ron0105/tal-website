"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const beliefs = [
  { statement: "Structure before speed.", detail: "Moving fast on a fragile base just gets you to the wrong destination faster." },
  { statement: "Systems before scale.", detail: "Scale without systems creates exponential inefficiency, not exponential growth." },
  { statement: "Clarity before visibility.", detail: "Spending on ads before your positioning is locked is a donation to platforms." },
  { statement: "Discipline before expansion.", detail: "Adding headcount, channels, or features to a broken operation breaks it further." },
];

const whoFor = [
  "Founder-led ventures, 0 to 30 people",
  "Teams experiencing structural strain as they grow",
  "Founders who want to build something that outlasts their daily involvement",
  "Ventures post-validation that need operational rigour before scale",
];

const notFor = [
  "Ventures looking for quick, low-cost marketing campaigns",
  "Founders who want opinions without execution",
  "Teams not willing to document how they work",
];

export default function TALVIPhilosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <>
      {/* ── Philosophy ── */}
      <section
        ref={ref}
        className="relative overflow-hidden padding-section"
        style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg)" }}
      >
        {/* Background ticker */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none" aria-hidden>
          <motion.div
            style={{ x, opacity: 0.035 }}
            className="flex gap-16 whitespace-nowrap font-black text-foreground"
            aria-hidden
          >
            {Array(4).fill("STRUCTURE BEFORE SCALE").map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: "clamp(5rem, 12vw, 10rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: "1",
                  fontWeight: 900,
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative layout-grid">
          <AnimateOnScroll className="mb-14">
            <span className="label-eyebrow block mb-6">04 | Our Philosophy</span>
          </AnimateOnScroll>

          <div className="flex flex-col">
            {beliefs.map((b, i) => (
              <AnimateOnScroll key={b.statement} delay={0.06 * i}>
                <div
                  className="grid md:grid-cols-2 gap-8 py-8 items-center"
                  style={{
                    borderBottom: i < beliefs.length - 1 ? "1px solid var(--border-subtle)" : "none",
                  }}
                >
                  <h3
                    className="font-black text-foreground tracking-tight"
                    style={{
                      fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                      letterSpacing: "-0.03em",
                      lineHeight: "1.05",
                    }}
                  >
                    {b.statement}
                  </h3>
                  <p className="text-lg leading-relaxed text-body">
                    {b.detail}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section
        className="padding-section"
        style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-secondary)" }}
      >
        <div className="layout-grid">
          <AnimateOnScroll className="mb-12">
            <span className="label-eyebrow block mb-5">05 | Ideal Client</span>
            <h2 className="text-section-title text-foreground max-w-[480px]">
              This is not for
              <br />
              <span className="text-muted">everyone.</span>
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Right for */}
            <AnimateOnScroll>
              <div style={{ border: "1px solid var(--border-color)", background: "var(--bg)" }}>
                <div className="px-7 py-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <span className="label-eyebrow">Right for</span>
                </div>
                {whoFor.map((item, i) => (
                  <div key={item} className={`flex items-start gap-4 px-7 py-4 ${i < whoFor.length - 1 ? "border-b" : ""}`} style={{ borderColor: "var(--border-subtle)" }}>
                    <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-base text-body">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Not for */}
            <AnimateOnScroll delay={0.1}>
              <div style={{ border: "1px solid var(--border-color)", background: "var(--bg)" }}>
                <div className="px-7 py-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <span className="label-eyebrow">Not for</span>
                </div>
                {notFor.map((item, i) => (
                  <div key={item} className={`flex items-start gap-4 px-7 py-4 ${i < notFor.length - 1 ? "border-b" : ""}`} style={{ borderColor: "var(--border-subtle)" }}>
                    <svg className="flex-shrink-0 mt-0.5 text-muted" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span className="text-base text-body">{item}</span>
                  </div>
                ))}

                {/* Callout */}
                <div
                  className="mx-7 mb-7 mt-2 p-4"
                  style={{ background: "var(--bg-lift)" }}
                >
                  <p className="text-xs text-muted">
                    &ldquo;This is not a low-cost marketing service. TAL VI is for
                    founders serious about building something that lasts.&rdquo;
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* CTA */}
          <AnimateOnScroll delay={0.2} className="mt-12">
            <div
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8"
              style={{ border: "1px solid var(--border-color)", background: "var(--bg)" }}
            >
              <div>
                <p
                  className="font-black tracking-tight mb-2 text-foreground"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", letterSpacing: "-0.02em" }}
                >
                  Ready to build before you scale?
                </p>
                <p className="text-base text-body">
                  Book a diagnostic. We&apos;ll audit where you are and tell you exactly what needs to be built.
                </p>
              </div>
              <Link
                href="/work-with-us"
                className="flex-shrink-0 btn-primary"
              >
                Book a Diagnostic
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
