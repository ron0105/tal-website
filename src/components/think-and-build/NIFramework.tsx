"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const stages = [
  { n: "01", name: "Map the assumptions", desc: "Every idea rests on 3–4 beliefs that have to be true. We write them down. Most founders never do — and it shows later." },
  { n: "02", name: "Talk to real customers", desc: "Not friends. Not family. The people who'd actually pay — asked the right way, so they tell you the truth instead of being polite." },
  { n: "03", name: "Check the market reality", desc: "Who else is doing this, what they charge, where they're weak. If the gap you see doesn't exist, better to know now." },
  { n: "04", name: "Test willingness to pay", desc: "“Would you use it?” means nothing. “Will you pay ₹X for it?” means everything. We find the difference." },
  { n: "05", name: "Run the smallest possible test", desc: "A pilot, a pre-sale, a landing page with a price on it — the cheapest experiment that produces a real signal." },
  { n: "06", name: "Make the call", desc: "Go, don't go, or pivot — backed by what we found, not how the idea feels. Either way, you move forward with certainty." },
];

export default function NIFramework() {
  return (
    <section id="how-it-works" className="py-24 md:py-32" style={{ background: "var(--navy)", borderTop: "3px solid var(--accent)" }}>
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-16 max-w-2xl">
          <span className="label-eyebrow mb-5 block" style={{ color: "#EAB308" }}>The validation framework</span>
          <h2
            className="font-poppins mb-4"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 2.9rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "#FFFFFF",
            }}
          >
            Six stages. A few weeks. One honest answer.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "480px" }}>
            This is how Idea Validation works — the same sequence for every idea, structured enough to trust, fast enough that you don&apos;t lose momentum. (Consulting engagements are shaped around your business instead.)
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)" }}>
          {stages.map((s, i) => (
            <AnimateOnScroll key={s.n} delay={i * 0.06}>
              <div className="p-8 h-full" style={{ background: "var(--navy)" }}>
                <p className="font-poppins text-3xl mb-4" style={{ color: "var(--accent)", fontWeight: 500 }}>{s.n}</p>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#FFFFFF" }}>{s.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
