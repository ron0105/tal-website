"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const points = [
  "Assumptions are not validated",
  "Customers are not clearly defined",
  "Business models are not thought through",
  "Execution starts before clarity",
];

export default function FNIReframe() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <h2
              className="font-poppins mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              Most ideas don’t fail because they’re bad. <br />
              <span className="text-muted">They fail because they’re not tested properly.</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="flex flex-col gap-6">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white border border-border-subtle flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors">
                    <span className="text-red-500 font-bold">✕</span>
                  </div>
                  <p className="text-lg md:text-xl font-semibold text-body">
                    {point}
                  </p>
                </div>
              ))}
              <div className="mt-8 pt-8 border-t border-border-subtle">
                <p className="text-2xl font-bold text-primary">
                  We bring <span className="text-accent underline decoration-2 underline-offset-4">structure before execution.</span>
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
