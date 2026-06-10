"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    n: "01",
    title: "We listen",
    body: "We spend time with you, your team, and your numbers. Nothing assumed.",
  },
  {
    n: "02",
    title: "We map",
    body: "We identify what to build, fix, or strengthen, and in what order.",
  },
  {
    n: "03",
    title: "We build",
    body: "Clear systems and strategies your team can own and run.",
  },
  {
    n: "04",
    title: "You grow",
    body: "More revenue, better margins, a business that runs without you in every detail.",
  },
];

export default function HomeProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-background py-24 md:py-32 border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-20"
        >
          <span className="label-eyebrow mb-6 block text-accent">How We Work</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            A clear process. Lasting results.
          </h2>
        </motion.div>

        {/* Steps — large number + text layout */}
        <div className="grid md:grid-cols-4 gap-0 relative">

          {/* Connecting line — desktop */}
          <motion.div
            className="hidden md:block absolute h-px"
            style={{
              top: "2.25rem",
              left: "8%",
              right: "8%",
              background: "var(--border-subtle)",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease, delay: 0.2 + i * 0.12 }}
              className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-4 mb-12 md:mb-0"
            >
              {/* Step circle */}
              <div
                className="w-[4.5rem] h-[4.5rem] rounded-full flex flex-col items-center justify-center border-2 mb-8 shrink-0 relative"
                style={{
                  background: i === steps.length - 1 ? "var(--accent)" : "var(--background)",
                  borderColor: i === steps.length - 1 ? "var(--accent)" : "var(--border-subtle)",
                  zIndex: 10,
                }}
              >
                {/* Accent dot on non-last steps */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                  />
                )}
                <span
                  className="text-xs font-black uppercase tracking-widest"
                  style={{ color: i === steps.length - 1 ? "var(--bg)" : "var(--text-muted)", lineHeight: 1 }}
                >
                  Step
                </span>
                <span
                  className="text-lg font-black leading-none"
                  style={{ color: i === steps.length - 1 ? "var(--bg)" : "var(--text-primary)" }}
                >
                  {step.n}
                </span>
              </div>

              {/* Text */}
              <h3
                className="text-lg font-bold mb-3"
                style={{
                  color: i === steps.length - 1 ? "var(--accent)" : "var(--text-primary)",
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed" style={{ maxWidth: "160px" }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
