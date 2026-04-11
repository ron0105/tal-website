"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "../shared/AnimateOnScroll";

const offerings = [
  {
    title: "VALIDATION SPRINT",
    duration: "4–6 weeks",
    output: "Build / Pivot / Kill decision",
    price: "₹2.5L – ₹5L",
    desc: "A rigorous stress-test of your core business assumptions using real-world customer data and demand signals.",
  },
  {
    title: "PILOT BLUEPRINT",
    duration: "Experiment design",
    output: "Clinical system map",
    price: "₹75K – ₹1.5L",
    desc: "We design the architecture of your validation experiments: from user acquisition flows to conversion metrics.",
  },
  {
    title: "VALIDATION RETAINER",
    duration: "Monthly support",
    output: "Ongoing risk mitigation",
    price: "₹60K – ₹1.2L / mo",
    desc: "Long-term partnership to validate new features, markets, or models as your venture evolves.",
  },
  {
    title: "VENTURE CO-BUILD",
    duration: "3–6 months",
    output: "Equity + Growth systems",
    price: "Mixed Model",
    desc: "Strategic partnership where we build the infrastructure for highly validated, high-conviction ventures.",
  },
];

export default function HomeOfferingsGrid() {
  return (
    <section className="padding-section bg-bg-secondary border-t border-border-subtle">
      <div className="layout-grid">
        <AnimateOnScroll>
          <span className="label-eyebrow mb-12 block">Service Modules</span>
          <h2 className="text-section-title mb-24">
            Structured engagement.
            <br />
            <span className="text-muted">No black boxes.</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10">
          {offerings.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 0.08}>
              <motion.div
                className="p-10 border border-border-subtle bg-background flex flex-col justify-between min-h-[400px] cursor-default"
                whileHover={{
                  y: -4,
                  borderColor: "var(--text-primary)",
                  boxShadow: "0 8px 32px -8px rgba(0,0,0,0.12)",
                  transition: { duration: 0.22, ease: "easeOut" },
                }}
                style={{ willChange: "transform" }}
              >
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <span className="label-eyebrow !text-text-primary bg-bg-lift px-3 py-1">
                      {item.duration}
                    </span>
                    <motion.span
                      className="text-xl font-black tracking-tight"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.price}
                    </motion.span>
                  </div>

                  <h3 className="text-2xl font-black mb-4 tracking-tighter uppercase italic">
                    {item.title}
                  </h3>
                  <p className="body-copy !text-base text-muted mb-8 max-w-[400px]">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-8 border-t border-border-subtle">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">Primary Output:</p>
                  <p className="text-base font-bold uppercase">{item.output}</p>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
