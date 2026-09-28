"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, staggerItem } from "../shared/AnimateOnScroll";

const problems = [
  "Team keeps asking the same questions",
  "Work depends too much on you",
  "Customers come in, but follow-ups are messy",
  "Things are working, but not smoothly",
];

export default function HomeSystem() {
  return (
    <section id="problem" className="padding-section bg-bg-secondary border-t border-border-subtle">
      <div className="layout-grid">
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow mb-8 block">Sound familiar?</span>
          <h2>
            Does this feel familiar?
          </h2>
        </AnimateOnScroll>

        <StaggerContainer className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle mb-16">
          {problems.map((p) => (
            <motion.div
              key={p}
              variants={staggerItem}
              className="bg-background p-8 md:p-10 flex items-start gap-5 cursor-default"
              whileHover={{ backgroundColor: "var(--bg-lift)", transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <div className="w-1.5 h-1.5 mt-[10px] flex-shrink-0" style={{ background: "var(--text-primary)" }} />
              <p className="text-lg font-semibold leading-snug" style={{ color: "var(--text-body)" }}>
                {p}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimateOnScroll>
          <p
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            It&apos;s not a growth problem. It&apos;s a clarity problem.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
