"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const steps = [
  {
    n: "01",
    title: "You bring the idea",
    body: "No pitch deck. No business plan. Just a problem you think is worth solving and an honest account of what you know — and don't know.",
  },
  {
    n: "02",
    title: "We run the validation",
    body: "We follow a 6-stage process — problem framing, customer research, demand testing — to find out if the idea holds up before you commit.",
  },
  {
    n: "03",
    title: "You get a clear decision",
    body: "Build it. Change the approach. Or stop — and save months of time and serious capital for something that actually works.",
  },
];

export default function HomeProcess() {
  return (
    <section
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <AnimateOnScroll>
            <span className="label-eyebrow block mb-6">How it works</span>
            <h2 className="text-section-title text-white mb-6">
              Three steps.
              <br />
              <span style={{ color: "#2a2a2a" }}>One clear answer.</span>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#999" }}>
              Every engagement follows the same path. You always know where you
              are, what happens next, and what the result means for your
              decision.
            </p>
            <Link href="/how-it-works" className="btn-ghost">
              See the full 6-stage framework →
            </Link>
          </AnimateOnScroll>

          <div>
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.n} delay={0.1 * i}>
                <div
                  className="flex gap-6 py-8"
                  style={{
                    borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center text-xs font-black flex-shrink-0"
                    style={{
                      background: "rgba(37,99,235,0.08)",
                      color: "#2563EB",
                      borderRadius: "2px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-subsection text-white mb-2">{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#999" }}>{step.body}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
