"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimateOnScroll, StaggerContainer, staggerItem } from "@/components/shared/AnimateOnScroll";

const outcomes = [
  {
    decision: "Build",
    title: "The idea holds up. Build it.",
    body: "You get a clear build brief: what to build, who to build it for, what to charge, and which assumptions to keep testing. No ambiguity about what version one should be.",
  },
  {
    decision: "Pivot",
    title: "Something needs to change. Here's what.",
    body: "The core idea has signal: but something is wrong. We tell you exactly what: the wrong customer, the wrong price, the wrong problem framing. A new direction, not a dead end.",
  },
  {
    decision: "Kill",
    title: "The market doesn't support it. Stop now.",
    body: "A clean stop is not a failure. It is capital preserved and time protected. You leave with a clear explanation of why: and what, if anything, is worth taking from the wreckage.",
  },
];

export default function VLOutcomes() {
  return (
    <section
      className="padding-section"
      style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-secondary)" }}
    >
      <div className="layout-grid">

        <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-8">System Output</span>
            <h2 className="text-section-title">
              Three possible
              <br />
              <span className="text-muted">outcomes.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="flex items-end">
            <p className="body-copy">
              The criteria for each decision are defined before the sprint
              starts: not invented at the end. What you find is the evidence.
              What you decide is the outcome. No surprises.
            </p>
          </AnimateOnScroll>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle">
          {outcomes.map((o, i) => (
            <motion.div variants={staggerItem} key={o.decision} className="flex flex-col gap-6 p-10 bg-background h-full">
              <span className="label-eyebrow !text-primary bg-bg-lift/30 px-3 py-1 self-start">
                [{o.decision}]
              </span>
              <h3 className="text-2xl font-black italic uppercase italic-accent leading-none mb-2">
                {o.title}
              </h3>
              <p className="text-sm font-bold text-muted uppercase tracking-tight leading-relaxed">
                {o.body}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimateOnScroll delay={0.25} className="mt-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 p-12 border border-border-subtle bg-bg-secondary italic">
            <div>
              <p className="text-display !text-3xl md:!text-4xl mb-4 italic tracking-tighter">
                START YOUR
                <br />
                VALIDATION SPRINT.
              </p>
              <p className="label-eyebrow !text-muted">
                Tell us the problem. We&apos;ll tell you if it&apos;s worth building.
              </p>
            </div>
            <Link href="/work-with-us" className="flex-shrink-0 btn-primary px-12 py-6">
              Start a Sprint
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
