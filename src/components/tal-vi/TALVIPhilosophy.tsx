"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { DiagnosticVisual } from "@/components/visuals";

const beliefs = [
  { statement: "Structure before speed.", detail: "Moving fast on a fragile base just gets you to the wrong destination faster." },
  { statement: "Systems before scale.", detail: "Scale without systems creates exponential inefficiency, not exponential growth." },
  { statement: "Clarity before visibility.", detail: "Spending on ads before your positioning is locked is a donation to platforms." },
  { statement: "Discipline before expansion.", detail: "Adding headcount, channels, or features to a broken operation breaks it further." },
];

const whoFor = [
  "Founder-led ventures (0-30 people)",
  "Teams feeling structural strain",
  "Founders building beyond themselves",
  "Post-validation ventures needing rigour",
];

const notFor = [
  "Quick, low-cost marketing",
  "Opinions without execution",
  "Teams unwilling to document",
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
            <span className="label-eyebrow block mb-6">Infrastructure Beliefs</span>
          </AnimateOnScroll>

          <div className="flex flex-col">
            {beliefs.map((b, i) => (
              <AnimateOnScroll key={b.statement} delay={0.06 * i}>
                <motion.div
                  className="grid md:grid-cols-2 gap-8 py-12 items-center border-b border-border-subtle last:border-0 cursor-default"
                  whileHover={{
                    x: 4,
                    backgroundColor: "var(--bg-secondary)",
                    transition: { duration: 0.18, ease: "easeOut" },
                  }}
                  style={{ willChange: "transform" }}
                >
                  <h3 className="text-display !text-3xl md:!text-5xl uppercase italic italic-accent tracking-tighter">
                    {b.statement}
                  </h3>
                  <p className="body-copy">
                    {b.detail}
                  </p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="padding-section bg-bg-secondary border-t border-border-subtle">
        <div className="layout-grid">
          <AnimateOnScroll className="mb-24">
            <span className="label-eyebrow block mb-8">System Compatibility</span>
            <h2 className="text-section-title max-w-[560px]">
              This is not for
              <br />
              <span className="text-muted">everyone.</span>
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle">
            {/* Right for */}
            <div className="bg-background p-10">
              <span className="label-eyebrow !text-text-primary block mb-12 bg-bg-lift/30 px-3 py-1 self-start inline-block">
                [ COMPATIBLE ]
              </span>
              <ul className="flex flex-col gap-6 mb-12">
                {whoFor.map((item, i) => (
                  <li key={i} className="flex gap-4 items-baseline">
                    <div className="w-1.5 h-1.5 bg-text-primary rounded-full mt-2" />
                    <span className="text-base font-bold text-body uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for */}
            <div className="bg-background p-10">
              <span className="label-eyebrow !text-muted block mb-12 bg-bg-lift/10 px-3 py-1 self-start inline-block">
                [ INCOMPATIBLE ]
              </span>
              <ul className="flex flex-col gap-6 mb-12">
                {notFor.map((item, i) => (
                  <li key={i} className="flex gap-4 items-baseline opacity-50">
                    <div className="w-1.5 h-1.5 bg-text-muted rounded-full mt-2" />
                    <span className="text-base font-bold text-muted uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <AnimateOnScroll delay={0.2} className="mt-24 flex justify-center">
            <div className="w-full max-w-[900px] flex flex-col md:flex-row items-center gap-12 text-left p-12 md:p-16 border border-border-subtle bg-bg-secondary">
              <div className="flex-1">
                <span className="label-eyebrow !text-primary bg-bg-lift/30 px-3 py-1 mb-8 inline-block">
                  [ DIAGNOSTIC REQUIRED ]
                </span>
                <p className="text-display !text-4xl md:!text-5xl mb-8 uppercase italic tracking-tighter text-foreground">
                  SYSTEMS BREAK AT SCALE.
                  <br />
                  FIND THE FRACTURES NOW.
                </p>
                <p className="body-copy !text-xl text-body font-bold tracking-tight leading-relaxed max-w-[640px] mb-10">
                  Run a structural diagnostic to isolate bottlenecks and define what to build next.
                </p>
                <Link
                  href="/work-with-us"
                  className="btn-primary !px-12 !py-6 text-sm uppercase tracking-widest font-black inline-block"
                >
                  Start Diagnostic
                </Link>
              </div>
              <div className="w-full md:w-[300px] shrink-0">
                <div className="aspect-square bg-background border border-border-subtle p-6 flex flex-col justify-center items-center text-center">
                  <DiagnosticVisual />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
