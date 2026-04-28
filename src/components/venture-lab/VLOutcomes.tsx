"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimateOnScroll, StaggerContainer, staggerItem } from "@/components/shared/AnimateOnScroll";
import { DecisionVisual } from "@/components/visuals";

const outcomes = [
  {
    decision: "Build",
    title: "The idea holds up. Build it.",
    body: "You get a build brief: what to build, for whom, and what to charge. No ambiguity.",
  },
  {
    decision: "Pivot",
    title: "Something needs to change. Here's what.",
    body: "The core idea has signal, but something is off. We tell you what needs to change. A new direction, not a dead end.",
  },
  {
    decision: "Kill",
    title: "The market doesn't support it. Stop now.",
    body: "A clean stop saves capital and time. You leave with a clear explanation of why.",
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
              Decision criteria are defined before the sprint starts. Evidence drives the outcome. No surprises.
            </p>
          </AnimateOnScroll>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle">
          {outcomes.map((o) => (
            <motion.div
              variants={staggerItem}
              key={o.decision}
              className="flex flex-col gap-6 p-10 bg-background h-full cursor-default"
              whileHover={{
                y: -3,
                backgroundColor: "var(--bg-secondary)",
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              style={{ willChange: "transform" }}
            >
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-12 border border-border-subtle bg-bg-secondary italic">
            <div className="flex-1">
              <p className="text-display !text-3xl md:!text-4xl mb-4 italic tracking-tighter">
                START YOUR
                <br />
                VALIDATION SPRINT.
              </p>
              <p className="label-eyebrow !text-muted">
                Tell us the problem. We&apos;ll tell you if it&apos;s worth building.
              </p>
            </div>
            <div className="w-full md:w-[240px] shrink-0">
              <div className="aspect-video bg-background border border-border-subtle p-4 flex flex-col justify-center items-center text-center">
                <DecisionVisual />
              </div>
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
