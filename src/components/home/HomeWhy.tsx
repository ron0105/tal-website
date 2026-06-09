"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const points = [
  {
    title: "We tell you what we find, even when it is uncomfortable.",
    body: "If the idea has a problem, we say so. If the business has a structural issue, we name it. You are paying for clarity, not reassurance.",
  },
  {
    title: "We scope honestly.",
    body: "If something is outside what we do well, we say so upfront. We would rather lose the work than do it badly.",
  },
  {
    title: "We measure success by whether the work holds after we leave.",
    body: "We are not interested in dependency. The systems we build and the decisions we help you make should work without us in the room.",
  },
];

export default function HomeWhy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-background py-24 md:py-32 border-t border-border-subtle"
    >
      <div className="layout-grid px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-16 md:gap-24 items-start">

          {/* Left — the honest pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <span className="label-eyebrow mb-6 block text-accent">Why TAL</span>
            <h2
              className="font-poppins mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              We work across both sides of the table.
            </h2>
            <p className="text-lg leading-relaxed text-body mb-5" style={{ maxWidth: "440px" }}>
              Most consultants work with either established businesses or early-stage ideas. We do both, and the discipline is the same in both cases. That means we understand the full arc: what an idea needs before it becomes a business, and what a business needs to stop running on its founder.
            </p>
            <p className="text-lg leading-relaxed text-body" style={{ maxWidth: "440px" }}>
              We do not have a 30-slide deck for every engagement. We listen first, recommend second, and measure success by whether the work holds after we leave, not by how many hours we bill.
            </p>
          </motion.div>

          {/* Right — three honest commitments */}
          <div className="flex flex-col gap-4">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.12 }}
                className="p-8 rounded-2xl border border-border-subtle bg-bg-secondary card-interactive"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-xs font-black shrink-0 mt-1"
                    style={{ color: "var(--accent)", letterSpacing: "0.05em" }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-base font-bold text-primary mb-2 leading-snug">
                      {point.title}
                    </p>
                    <p className="text-sm leading-relaxed text-muted">
                      {point.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
