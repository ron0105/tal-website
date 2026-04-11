"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const mistakes = [
  {
    action: "Hire people",
    before: "before roles are clear",
    result: "Everyone does everything. Nothing gets owned.",
  },
  {
    action: "Run ads",
    before: "before positioning is locked",
    result: "Spend without signal. Visibility without traction.",
  },
  {
    action: "Add tools",
    before: "before processes exist",
    result: "Automation of chaos. Not efficiency.",
  },
  {
    action: "Raise funding",
    before: "before the model is clean",
    result: "More capital. Same problems. Faster burn.",
  },
];

export default function TALVIProblem() {
  return (
    <section
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A" }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-6">01 — The Problem</span>
            <h2 className="text-section-title text-white mb-6">
              Scaling activity
              <br />
              <span style={{ color: "#2a2a2a" }}>before structure.</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#999" }}>
              Growth doesn&apos;t fix a fragile foundation. It amplifies it.
              Every new hire, new channel, and new feature compounds the gaps
              you ignored while moving fast.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#555" }}>
              TAL VI is built for ventures where the idea works — but the
              systems, the positioning, and the infrastructure haven&apos;t
              caught up.
            </p>

            {/* Quote */}
            <div
              className="pl-5 py-1"
              style={{ borderLeft: "2px solid #6366F1" }}
            >
              <p
                className="text-base font-semibold leading-snug"
                style={{ color: "#999", letterSpacing: "-0.01em" }}
              >
                &ldquo;Growth amplifies weaknesses.
                <br />Structure prevents collapse.&rdquo;
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right: mistake table */}
          <AnimateOnScroll delay={0.15}>
            <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px" }}>
              <div
                className="px-6 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="label-eyebrow" style={{ color: "#333" }}>
                  What happens when you scale too early
                </span>
              </div>
              {mistakes.map((m, i) => (
                <div
                  key={m.action}
                  className="px-6 py-5"
                  style={{ borderBottom: i < mistakes.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                >
                  <div className="flex flex-wrap items-baseline gap-1.5 mb-1.5">
                    <span className="text-sm font-bold" style={{ color: "#fff" }}>{m.action}</span>
                    <span className="text-sm" style={{ color: "#555" }}>{m.before}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span className="text-xs" style={{ color: "#666" }}>{m.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
