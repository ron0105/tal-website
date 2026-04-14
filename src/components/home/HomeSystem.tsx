"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, staggerItem } from "../shared/AnimateOnScroll";

const steps = [
  { n: "01", title: "Problem Framing", body: "We work with you to uncover the real problem underneath the idea. The one worth solving." },
  { n: "02", title: "Hypothesis Definition", body: "We turn your idea into a set of clear statements we can actually test in the real world." },
  { n: "03", title: "User Identification", body: "We identify exactly who experiences this problem, and who has the most reason to pay for a solution." },
  { n: "04", title: "Pilot Design", body: "We design the simplest test that gives you the clearest answer, with minimal time and cost." },
  { n: "05", title: "Metrics & Success", body: "We agree upfront on what success looks like, so you know exactly what you\'re measuring and why." },
  { n: "06", title: "Decision Gate", body: "A clear, evidence-backed recommendation: build with confidence, refine the approach, or redirect your energy." },
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
        <AnimateOnScroll>
          <span className="label-eyebrow mb-12 block">The System</span>
          <h2 className="text-section-title mb-24">
            A clear process
            <br />
            <span className="text-muted">for making your most important call.</span>
          </h2>
        </AnimateOnScroll>

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
              [ BUILD / REFINE / REDIRECT ]
            </h3>
            <p className="body-copy text-muted max-w-[600px]">
              How we use evidence to reach a clear, confident recommendation, together.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="overflow-x-auto border border-border-subtle">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-subtle bg-bg-secondary">
                  <th className="p-6 label-eyebrow !text-primary">Decision Matrix</th>
                  <th className="p-6 label-eyebrow !text-primary bg-bg-lift/50">BUILD</th>
                  <th className="p-6 label-eyebrow !text-primary">REFINE</th>
                  <th className="p-6 label-eyebrow !text-primary">REDIRECT</th>
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
