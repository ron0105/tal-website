"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FNIStatBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="border-y border-border-subtle overflow-hidden"
      style={{ background: "var(--accent)" }}
    >
      <div className="layout-grid px-6 md:px-10 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">

          {/* Stat */}
          <motion.div
            className="flex items-baseline gap-3 shrink-0"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <span
              className="font-poppins font-black"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", lineHeight: 1, color: "var(--bg)" }}
            >
              42%
            </span>
            <span
              className="font-poppins font-bold text-xl"
              style={{ color: "var(--bg)", opacity: 0.5 }}
            >
              of startups
            </span>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px self-stretch" style={{ background: "var(--bg)", opacity: 0.2 }} />

          {/* Context */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
          >
            <p
              className="text-xl md:text-2xl font-semibold leading-snug mb-3"
              style={{ color: "var(--bg)" }}
            >
              fail because there was no market need — not because the idea was bad.
            </p>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--bg)", opacity: 0.55 }}
            >
              Source: CB Insights, &ldquo;The Top 12 Reasons Startups Fail&rdquo;: analysis of 101 startup post-mortems. No market need is the single largest cause of startup failure.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
