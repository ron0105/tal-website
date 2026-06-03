"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, staggerItem } from "@/components/shared/AnimateOnScroll";

const steps = [
  {
    n: "01",
    title: "Understand the idea",
    body: "We start with the core question: what problem are you solving, and who has it? We help you articulate this clearly.",
  },
  {
    n: "02",
    title: "Test your assumptions",
    body: "Every idea is built on assumptions. We identify them and turn them into things we can actually test, without spending a lot.",
  },
  {
    n: "03",
    title: "Find out if people will pay",
    body: "We run the smallest possible test to find real demand signal. Not surveys, not guesses — actual evidence from real people.",
  },
  {
    n: "04",
    title: "Give you a clear decision",
    body: "At the end, you know whether to move forward, change direction, or stop. No vague next steps — just clarity.",
  },
];

const whyValidate = [
  {
    before: "You spend months building something nobody wants",
    after: "You know what people want before you build",
  },
  {
    before: "You invest money based on excitement, not evidence",
    after: "Every decision is based on real feedback",
  },
  {
    before: "You pivot too late, after burning resources",
    after: "You change direction early, when it's cheap",
  },
];

export default function FNIProcess() {
  return (
    <>
      <section className="padding-section bg-bg-secondary border-t border-border-subtle">
        <div className="layout-grid">
          <AnimateOnScroll className="mb-16">
            <span className="label-eyebrow mb-8 block">How it works</span>
            <h2 
              className="font-poppins"
              style={{
                fontSize: "clamp(1.75rem, 8vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              Four steps to
              <br />
              <span className="text-muted">real clarity.</span>
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle">
            {steps.map((step) => (
              <motion.div
                key={step.n}
                variants={staggerItem}
                className="bg-background p-8 md:p-10 flex flex-col gap-5 cursor-default"
                whileHover={{ backgroundColor: "var(--bg-lift)", transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <span className="section-num">{step.n}</span>
                <h3 className="text-xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="padding-section bg-background border-t border-border-subtle">
        <div className="layout-grid">
          <AnimateOnScroll className="mb-16">
            <span className="label-eyebrow mb-8 block">Why validate first?</span>
            <h2 
              className="font-poppins"
              style={{
                fontSize: "clamp(1.75rem, 8vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              Know it works.
              <br />
              <span className="text-muted">Then build it.</span>
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle mb-px">
            <div className="bg-bg-secondary p-6 border-b border-border-subtle">
              <p className="label-eyebrow">Without validation</p>
            </div>
            <div className="bg-background p-6 border-b border-border-subtle">
              <p className="label-eyebrow">With validation</p>
            </div>
          </div>

          <StaggerContainer className="flex flex-col gap-px bg-border-subtle border border-border-subtle border-t-0">
            {whyValidate.map((row, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="grid md:grid-cols-2 gap-px bg-border-subtle"
              >
                <div className="bg-bg-secondary p-6 text-sm font-medium leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {row.before}
                </div>
                <div className="bg-background p-6 text-sm font-semibold leading-relaxed flex items-start gap-2.5" style={{ color: "var(--text-body)" }}>
                  <span className="flex-shrink-0" style={{ color: "var(--text-primary)" }}>✓</span>
                  {row.after}
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
