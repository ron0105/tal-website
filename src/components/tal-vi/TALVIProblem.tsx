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
      className="padding-section"
      style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg)" }}
    >
      <div className="layout-grid">

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-6">01 | The Real Problem</span>
            <h2 
              className="text-foreground mb-8"
              style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em" }}
            >
              Growing too fast,
              <br />
              <span className="text-muted">too soon.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--text-body)" }}>
              Growth doesn&apos;t fix a fragile foundation. It amplifies it.
              Every new hire, new channel, and new feature compounds the gaps
              you ignored while moving fast.
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-body)" }}>
              TAL VI is for businesses where the idea works, but the team, the
              tools, and the story haven&apos;t kept up. We build the foundation
              so you can scale with confidence.
            </p>

            {/* Quote */}
            <div
              className="pl-5 py-1"
              style={{ borderLeft: "2px solid var(--text-primary)" }}
            >
              <p
                className="text-lg font-semibold leading-snug"
                style={{ color: "var(--text-body)", letterSpacing: "-0.01em" }}
              >
                &ldquo;Growth amplifies weaknesses.
                <br />Structure prevents collapse.&rdquo;
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right: mistake table */}
          <AnimateOnScroll delay={0.15}>
            <div style={{ border: "1px solid var(--border-color)", background: "var(--bg-secondary)" }}>
              <div
                className="px-6 py-4"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <span className="label-eyebrow">
                  What happens when you scale too early
                </span>
              </div>
              {mistakes.map((m, i) => (
                <div
                  key={m.action}
                  className="px-6 py-5"
                  style={{ borderBottom: i < mistakes.length - 1 ? "1px solid var(--border-subtle)" : "none" }}
                >
                  <div className="flex flex-wrap items-baseline gap-1.5 mb-1.5">
                    <span className="text-base font-bold" style={{ color: "var(--text-primary)" }}>{m.action}</span>
                    <span className="text-base" style={{ color: "var(--text-body)" }}>{m.before}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ color: "var(--text-muted)" }}>
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span className="text-xs" style={{ color: "var(--text-body)" }}>{m.result}</span>
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
