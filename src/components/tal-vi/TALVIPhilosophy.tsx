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
        className="relative overflow-hidden px-6 md:px-10 py-24 md:py-32"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Background ticker */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none" aria-hidden>
          <motion.div
            style={{ x, opacity: 0.018 }}
            className="flex gap-16 whitespace-nowrap font-black text-white"
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

        <div className="relative max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-14">
            <span className="label-eyebrow block mb-6">04 — Our Philosophy</span>
          </AnimateOnScroll>

          <div className="flex flex-col">
            {beliefs.map((b, i) => (
              <AnimateOnScroll key={b.statement} delay={0.06 * i}>
                <div
                  className="grid md:grid-cols-2 gap-8 py-8 items-center"
                  style={{
                    borderBottom: i < beliefs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <h3
                    className="font-black text-white tracking-tight"
                    style={{
                      fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                      letterSpacing: "-0.03em",
                      lineHeight: "1.05",
                    }}
                  >
                    {b.statement}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
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
        className="px-6 md:px-10 py-24 md:py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A" }}
      >
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-12">
            <span className="label-eyebrow block mb-5">05 — Ideal Client</span>
            <h2 className="text-section-title text-white" style={{ maxWidth: "480px" }}>
              This is not for
              <br />
              <span style={{ color: "#2a2a2a" }}>everyone.</span>
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Right for */}
            <AnimateOnScroll>
              <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px" }}>
                <div className="px-7 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="label-eyebrow" style={{ color: "#22C55E", opacity: 0.7 }}>
                    Right for
                  </span>
                </div>
                {whoFor.map((item, i) => (
                  <div key={item} className="flex items-start gap-4 px-7 py-4" style={{ borderBottom: i < whoFor.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-sm" style={{ color: "#888" }}>{item}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Not for */}
            <AnimateOnScroll delay={0.1}>
              <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px" }}>
                <div className="px-7 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <span className="label-eyebrow" style={{ color: "#555" }}>
                    Not for
                  </span>
                </div>
                {notFor.map((item, i) => (
                  <div key={item} className="flex items-start gap-4 px-7 py-4" style={{ borderBottom: i < notFor.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span className="text-sm" style={{ color: "#555" }}>{item}</span>
                  </div>
                ))}

                {/* Callout */}
                <div
                  className="mx-7 mb-7 mt-2 p-4"
                  style={{ background: "rgba(255,255,255,0.02)", borderRadius: "2px" }}
                >
                  <p className="text-xs" style={{ color: "#444" }}>
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
              style={{ border: "1px solid rgba(99,102,241,0.15)", borderRadius: "4px", background: "rgba(99,102,241,0.03)" }}
            >
              <div>
                <p
                  className="font-black tracking-tight mb-2"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", color: "#fff", letterSpacing: "-0.02em" }}
                >
                  Ready to build before you scale?
                </p>
                <p className="text-sm" style={{ color: "#888" }}>
                  Book a diagnostic. We&apos;ll audit where you are and tell you exactly what needs to be built.
                </p>
              </div>
              <Link
                href="/work-with-us"
                className="flex-shrink-0 btn-primary"
                style={{ background: "#6366F1" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#818CF8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#6366F1")}
              >
                Book a Diagnostic
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
