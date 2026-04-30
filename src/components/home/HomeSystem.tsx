"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, staggerItem } from "../shared/AnimateOnScroll";
import { ProgressionVisual } from "@/components/visuals";

const steps = [
  { n: "Stage 01", title: "Problem Framing", body: "Find the actual problem, not just the symptom." },
  { n: "Stage 02", title: "Assumption Mapping", body: "Turn ideas into testable statements." },
  { n: "Stage 03", title: "Research & Validation", body: "Find who pays to solve this." },
  { n: "Stage 04", title: "Business Model Structuring", body: "Work out how the business actually makes money." },
  { n: "Stage 05", title: "Frugal Pilot", body: "Run the smallest test that gets you a real answer." },
  { n: "Stage 06", title: "Decision Gate: THE FINAL DECISION", body: "Build, pivot, or kill based on evidence." },
];

const engineRow = [
  { label: "Demand Signal", build: "Consistent pull from target users", pivot: "Interest in sub-feature only", kill: "No clear demand signal at this time" },
  { label: "Unit Economics", build: "Clear path to profitable LTV/CAC", pivot: "Requires significant model shift", kill: "Model requires fundamental restructuring" },
  { label: "Execution Feasibility", build: "Built within team/capital constraints", pivot: "Requires major tech pivot", kill: "Technical complexity exceeds current constraints" },
  { label: "Competitive Position", build: "10x better than existing alternatives", pivot: "Niche angle with high retention", kill: "Highly competitive market with no differentiated edge yet" },
  { label: "Founder Conviction", build: "Evidence matches internal drive", pivot: "Drive remains, focus changes", kill: "Evidence suggests a different direction may suit you better" },
];

export default function HomeSystem() {
  return (
    <section id="system" className="padding-section bg-background border-t border-border-subtle">
      <div className="layout-grid">
        <div className="flex flex-col lg:flex-row gap-16 mb-24 items-start">
          <AnimateOnScroll className="flex-1">
            <span className="label-eyebrow mb-12 block">The System</span>
            <h2 className="text-section-title">
              How we work.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.15} className="flex-1 w-full">
            <div className="aspect-video bg-bg-secondary border border-border-subtle p-8 flex flex-col justify-center items-center text-center">
              <ProgressionVisual />
            </div>
          </AnimateOnScroll>
        </div>

        {/* 6-Step Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle mb-32 border border-border-subtle">
          {steps.map((step) => (
            <motion.div
              variants={staggerItem}
              key={step.n}
              className="bg-background p-10 flex flex-col gap-6 cursor-default"
              whileHover={{
                backgroundColor: "var(--bg-secondary)",
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              style={{ willChange: "transform" }}
            >
              <span className="section-num">{step.n}</span>
              <h3 className="text-subsection">{step.title}</h3>
              <p className="body-copy !text-base !line-height-relaxed text-muted">
                {step.body}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* DECISION ENGINE TABLE */}
        <StaggerContainer>
          <motion.div variants={staggerItem} className="mb-12">
            <h3 className="text-subsection mb-4 uppercase tracking-wider">
              [ BUILD / PIVOT / KILL ]
            </h3>
            <p className="body-copy text-muted max-w-[600px]">
              Our output: build, pivot, or kill.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="overflow-x-auto border border-border-subtle">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-subtle bg-bg-secondary">
                  <th className="p-6 label-eyebrow !text-primary">Decision Matrix</th>
                  <th className="p-6 label-eyebrow !text-primary bg-bg-lift/50">BUILD</th>
                  <th className="p-6 label-eyebrow !text-primary">PIVOT</th>
                  <th className="p-6 label-eyebrow !text-primary">KILL</th>
                </tr>
              </thead>
              <tbody>
                {engineRow.map((row) => (
                  <motion.tr
                    key={row.label}
                    className="border-b border-border-subtle"
                    whileHover={{
                      backgroundColor: "var(--bg-lift)",
                      transition: { duration: 0.15, ease: "easeOut" },
                    }}
                  >
                    <td className="p-6 font-bold text-sm uppercase tracking-tight" style={{ width: "25%" }}>
                      {row.label}
                    </td>
                    <td className="p-6 text-sm text-body leading-relaxed bg-bg-lift/10" style={{ width: "25%" }}>
                      {row.build}
                    </td>
                    <td className="p-6 text-sm text-muted leading-relaxed" style={{ width: "25%" }}>
                      {row.pivot}
                    </td>
                    <td className="p-6 text-sm text-muted leading-relaxed" style={{ width: "25%" }}>
                      {row.kill}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
}
