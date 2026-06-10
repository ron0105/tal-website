"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const beliefs = [
  { statement: "Structure before speed.", detail: "The right foundation makes everything that follows faster, not slower." },
  { statement: "Systems before scale.", detail: "Growth compounds when it runs on clear processes. We build those first." },
  { statement: "Clarity before visibility.", detail: "When your message is sharp, the right people find you and trust you quickly." },
  { statement: "Discipline before expansion.", detail: "Every new hire and new market performs better on a solid operational base." },
];

export default function FBPhilosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32 border-t border-border-subtle bg-background"
    >
      {/* Background ticker */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none" aria-hidden>
        <motion.div
          style={{ x, opacity: 0.03 }}
          className="flex gap-16 whitespace-nowrap font-black text-foreground"
        >
          {Array(4).fill("STRUCTURE BEFORE SCALE").map((t, i) => (
            <span
              key={i}
              className="text-[120px] md:text-[180px] tracking-tighter"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-14">
          <span className="label-eyebrow block mb-6 text-accent">Our Philosophy</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            How we think about growth.
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col">
          {beliefs.map((b, i) => (
            <AnimateOnScroll key={b.statement} delay={0.06 * i}>
              <div
                className="grid md:grid-cols-2 gap-8 py-10 items-center border-b border-border-subtle last:border-0"
              >
                <h3 className="text-3xl md:text-4xl font-poppins tracking-tighter text-primary italic">
                  {b.statement}
                </h3>
                <p className="text-lg md:text-xl text-body font-medium leading-relaxed">
                  {b.detail}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
