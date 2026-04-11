"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const models = [
  {
    name: "Validation Sprint",
    tag: "Most Common",
    duration: "4–6 weeks",
    price: "Fixed fee",
    best: "You have an idea and want to know if it's worth building before spending more time or money.",
    what: [
      "Full 6-stage validation process",
      "10–15 customer interviews",
      "Demand proxy test",
      "Business model structuring",
      "Decision memo: Build / Pivot / Kill",
    ],
    featured: true,
  },
  {
    name: "Pilot Blueprint",
    tag: null,
    duration: "6–10 weeks",
    price: "Fixed fee",
    best: "Your idea is validated and you're ready for your first real market test.",
    what: [
      "Everything in a Validation Sprint",
      "Full pilot design and execution",
      "Real customer cohort analysis",
      "Scale / pause / exit recommendation",
    ],
    featured: false,
  },
  {
    name: "Monthly Validation",
    tag: null,
    duration: "Monthly retainer",
    price: "Monthly",
    best: "You're running multiple ideas or iterating quickly and need ongoing validation support.",
    what: [
      "2 validation sprints per month",
      "Weekly review sessions",
      "Assumption tracker and evidence log",
      "Priority access to the lab",
    ],
    featured: false,
  },
  {
    name: "TAL VI — Growth",
    tag: "Growth Arm",
    duration: "8–12 weeks",
    price: "Fixed fee",
    best: "You have a validated idea and need help building revenue, go-to-market, and growth systems.",
    what: [
      "Revenue model and pricing design",
      "Go-to-market plan (first 100 customers)",
      "Growth loop and channel design",
      "Unit economics modeling",
      "Full playbook handed over at the end",
    ],
    featured: false,
  },
];

export default function WWUModels() {
  return (
    <section
      className="padding-section"
      style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg)" }}
    >
      <div className="layout-grid">

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-6">Engagement Models</span>
            <h2 className="text-section-title text-foreground">
              Choose what fits
              <br />
              <span className="text-muted">where you are.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="flex items-end">
            <p className="text-lg leading-relaxed text-body">
              Not sure which one is right? Describe your situation in the form
              below and we&apos;ll suggest the right starting point.
            </p>
          </AnimateOnScroll>
        </div>

        <div
          className="grid md:grid-cols-2"
          style={{ gap: "1px", background: "var(--border-color)" }}
        >
          {models.map((m, i) => (
            <AnimateOnScroll key={m.name} delay={0.08 * i}>
              <div
                className="flex flex-col h-full p-7 md:p-8"
                style={{
                  background: m.featured ? "var(--bg-secondary)" : "var(--bg)",
                  borderLeft: m.featured ? "3px solid var(--text-primary)" : "3px solid transparent",
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3
                      className="font-bold tracking-tight mb-1.5 text-foreground"
                      style={{ fontSize: "1.2rem", letterSpacing: "-0.01em" }}
                    >
                      {m.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted">{m.duration}</span>
                      <span style={{ color: "var(--border-color)" }}>·</span>
                      <span className="text-xs text-muted">{m.price}</span>
                    </div>
                  </div>
                  {m.tag && (
                    <span
                      className="flex-shrink-0 text-xs font-bold px-2 py-0.5"
                      style={{
                        background: "var(--bg-lift)",
                        color: "var(--text-primary)",
                        borderRadius: "0px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {m.tag}
                    </span>
                  )}
                </div>

                {/* Best for */}
                <div
                  className="px-4 py-3.5 mb-6"
                  style={{ background: "var(--bg-lift)", borderLeft: "2px solid var(--border-color)" }}
                >
                  <p className="text-xs font-semibold mb-1 text-muted">Best for</p>
                  <p className="text-base leading-relaxed text-body">{m.best}</p>
                </div>

                {/* What's included */}
                <p className="text-xs font-bold uppercase tracking-widest mb-3.5 text-muted" style={{ letterSpacing: "0.12em" }}>
                  Includes
                </p>
                <div className="flex flex-col gap-2.5 mb-8">
                  {m.what.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-base text-body">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact-form"
                  className="mt-auto btn-ghost flex items-center justify-center gap-2 py-3 text-xs font-bold cursor-pointer transition-all duration-200"
                  style={{ letterSpacing: "0.04em", textTransform: "uppercase" }}
                >
                  Enquire →
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
