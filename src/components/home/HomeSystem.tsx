"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, staggerItem } from "../shared/AnimateOnScroll";

const steps = [
  { n: "01", title: "Problem Framing", body: "We strip away assumptions to define the core problem worth solving." },
  { n: "02", title: "Hypothesis Definition", body: "We translate ideas into testable 'must-be-true' statements." },
  { n: "03", title: "User Identification", body: "We find and filter the exact audience who has the problem today." },
  { n: "04", title: "Pilot Design", body: "We design the smallest experiment that generates maximum signal." },
  { n: "05", title: "Metrics & Success", body: "We define clear quantitative gates before the test begins." },
  { n: "06", title: "Decision Gate", body: "Evidence-based conclusion: Build, Pivot, or Kill." },
];

const engineRow = [
  { label: "Demand Signal", build: "Consistent pull from target users", pivot: "Interest in sub-feature only", kill: "No willingness to pay or act" },
  { label: "Unit Economics", build: "Clear path to profitable LTV/CAC", pivot: "Requires significant model shift", kill: "Negative margins at scale" },
  { label: "Execution Feasibility", build: "Built within team/capital constraints", pivot: "Requires major tech pivot", kill: "Unreasonable technical risk" },
  { label: "Competitive Position", build: "10x better than existing alternatives", pivot: "Niche angle with high retention", kill: "Red ocean with zero edge" },
  { label: "Founder Conviction", build: "Evidence matches internal drive", pivot: "Drive remains, focus changes", kill: "Data reveals lack of alignment" },
];

export default function HomeSystem() {
  return (
    <section id="system" className="padding-section bg-background border-t border-border-subtle">
      <div className="layout-grid">
        <AnimateOnScroll>
          <span className="label-eyebrow mb-12 block">The System</span>
          <h2 className="text-section-title mb-24">
            A structured framework
            <br />
            <span className="text-muted">for high-stakes decisions.</span>
          </h2>
        </AnimateOnScroll>

        {/* 6-Step Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle mb-32 border border-border-subtle">
          {steps.map((step) => (
            <motion.div variants={staggerItem} key={step.n} className="bg-background p-10 flex flex-col gap-6">
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
              How the engine processes evidence to reach a definitive conclusion.
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
                  <tr key={row.label} className="border-b border-border-subtle">
                    <td className="p-6 font-bold text-sm uppercase tracking-tight" style={{ width: '25%' }}>
                      {row.label}
                    </td>
                    <td className="p-6 text-sm text-body leading-relaxed bg-bg-lift/10" style={{ width: '25%' }}>
                      {row.build}
                    </td>
                    <td className="p-6 text-sm text-muted leading-relaxed" style={{ width: '25%' }}>
                      {row.pivot}
                    </td>
                    <td className="p-6 text-sm text-muted leading-relaxed" style={{ width: '25%' }}>
                      {row.kill}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
}
