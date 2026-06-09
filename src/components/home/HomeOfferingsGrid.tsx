"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "../shared/AnimateOnScroll";

const offerings = [
  {
    title: "VALIDATION MODULE",
    duration: "4–6 weeks",
    output: "Build / Pivot / Stop decision",
    price: "₹2.5L – ₹5L",
    desc: "A rigorous stress-test of your core business assumptions using real-world customer data and demand signals.",
  },
  {
    title: "PILOT BLUEPRINT",
    duration: "2-3 weeks",
    output: "Execution system map",
    price: "₹75K – ₹1.5L",
    desc: "We design the architecture of your validation experiments: from user acquisition flows to conversion metrics.",
  },
  {
    title: "STRATEGIC RETAINER",
    duration: "Monthly support",
    output: "Ongoing risk mitigation",
    price: "₹60K – ₹1.2L / mo",
    desc: "Long-term partnership to validate new features, markets, or models as your venture evolves.",
  },
  {
    title: "VENTURE CO-BUILD",
    duration: "3–6 months",
    output: "Growth systems & Equity",
    price: "Mixed Model",
    desc: "Strategic partnership where we build the infrastructure for highly validated, high-conviction ventures.",
  },
];

export default function HomeOfferingsGrid() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary border-t border-border-subtle overflow-hidden">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-20">
          <span className="label-eyebrow mb-6 block text-accent">Engagement Models</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Structured engagement.
            <br />
            <span className="text-muted">No black boxes.</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 0.08}>
              <motion.div
                className="p-10 md:p-12 border border-border-subtle bg-background flex flex-col justify-between min-h-[420px] rounded-2xl transition-all hover:border-accent"
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)",
                }}
              >
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted bg-bg-lift px-3 py-1 rounded">
                      {item.duration}
                    </span>
                    <span className="text-xl font-bold tracking-tight text-primary">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase italic text-primary">
                    {item.title}
                  </h3>
                  <p className="text-lg text-muted mb-8 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-8 border-t border-border-subtle">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted mb-2">Primary Output:</p>
                  <p className="text-lg font-bold text-primary uppercase tracking-tight">{item.output}</p>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
