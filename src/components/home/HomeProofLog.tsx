"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, staggerItem } from "../shared/AnimateOnScroll";

const stats = [
  { value: "12", label: "Ideas Tested", sub: "Clinical validation cycles" },
  { value: "07", label: "Ideas Killed", sub: "Saved capital & time" },
  { value: "03", label: "Pivoted", sub: "New objective established" },
  { value: "02", label: "Built", sub: "Validated for scale" },
];

export default function HomeProofLog() {
  return (
    <section className="padding-section bg-background border-t border-border-subtle">
      <div className="layout-grid">
        <AnimateOnScroll>
          <span className="label-eyebrow mb-12 block">Venture Log</span>
          <h2 className="text-section-title mb-24">
            Quantitative Proof.
            <br />
            <span className="text-muted">High-signal output only.</span>
          </h2>
        </AnimateOnScroll>

        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border-subtle border border-border-subtle overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div variants={staggerItem} key={stat.label} className="bg-background p-8 md:p-12 flex flex-col gap-4">
              <span className="text-6xl md:text-8xl font-black tracking-tighter tabular-nums leading-none">
                {stat.value}
              </span>
              <div className="mt-8 flex flex-col gap-1">
                <span className="text-xs font-black uppercase tracking-widest text-text-primary">
                  [ {stat.label} ]
                </span>
                <p className="text-xs font-bold text-muted uppercase tracking-tight">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Log Footer */}
        <div className="mt-12 flex justify-end">
          <p className="text-[10px] font-mono text-muted uppercase tracking-[0.2em]">
            SYSTEM LOG // LAST UPDATE: APRIL 2024 // STATUS: ACTIVE
          </p>
        </div>
      </div>
    </section>
  );
}
