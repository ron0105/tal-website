"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, staggerItem } from "../shared/AnimateOnScroll";

const comparisons = [
  { do: "Framework-first approach", skip: "Deliverables without structure" },
  { do: "Drill-down at every stage", skip: "One-off advice with no follow-through" },
  { do: "Share progress with the team", skip: "Black-box execution" },
  { do: "Gamified KPIs", skip: "Vague success metrics" },
  { do: "High-control engagement", skip: "Taking every client regardless of fit" },
];

export default function HomeComparison() {
  return (
    <section className="padding-section bg-bg-secondary border-t border-border-subtle overflow-hidden">
      <div className="layout-grid">
        <AnimateOnScroll>
          <span className="label-eyebrow mb-12 block">The Difference</span>
          <h2 className="text-section-title mb-24">
            What we do.
            <br />
            <span className="text-muted">What others skip.</span>
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="flex-1 w-full">
            <StaggerContainer className="flex flex-col gap-px bg-border-subtle border border-border-subtle">
              <div className="grid grid-cols-2 bg-bg-secondary">
                <div className="p-6 label-eyebrow !text-text-primary">What We Do</div>
                <div className="p-6 label-eyebrow !text-muted">What Others Skip</div>
              </div>
              {comparisons.map((item, i) => (
                <motion.div
                  variants={staggerItem}
                  key={i}
                  className="grid grid-cols-2 bg-background cursor-default"
                  whileHover={{
                    backgroundColor: "var(--bg-lift)",
                    transition: { duration: 0.15, ease: "easeOut" },
                  }}
                >
                  <div className="p-6 border-r border-border-subtle text-sm md:text-base font-bold text-text-primary pr-8">
                    {item.do}
                  </div>
                  <div className="p-6 text-sm md:text-base text-muted pl-8 line-through decoration-muted/30">
                    {item.skip}
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>

          <AnimateOnScroll delay={0.2} className="w-full lg:w-[400px] shrink-0">
            <div className="aspect-square overflow-hidden border border-border-subtle">
              <img
                src="/process-diagram.png"
                alt="Structured vs chaotic growth diagram"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
