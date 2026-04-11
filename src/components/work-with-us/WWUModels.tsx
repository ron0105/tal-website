"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const models = [
  {
    name: "Validation Sprint",
    tag: "Most Common",
    tagColor: "#2563EB",
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
    tagColor: null,
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
    tagColor: null,
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
    tagColor: "#6366F1",
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
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A" }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-6">Engagement Models</span>
            <h2 className="text-section-title text-white">
              Choose what fits
              <br />
              <span style={{ color: "#2a2a2a" }}>where you are.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="flex items-end">
            <p className="text-base leading-relaxed" style={{ color: "#999" }}>
              Not sure which one is right? Describe your situation in the form
              below and we&apos;ll suggest the right starting point.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {models.map((m, i) => (
            <AnimateOnScroll key={m.name} delay={0.08 * i}>
              <div
                className="flex flex-col h-full p-7 md:p-8"
                style={{
                  border: m.featured ? "1px solid rgba(37,99,235,0.2)" : "1px solid transparent",
                  borderRadius: "2px",
                  background: m.featured ? "rgba(37,99,235,0.03)" : "#0D0D0D",
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3
                      className="font-bold tracking-tight mb-1.5"
                      style={{ fontSize: "1.1rem", color: "#E8E8E8", letterSpacing: "-0.01em" }}
                    >
                      {m.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: "#555" }}>{m.duration}</span>
                      <span style={{ color: "#333" }}>·</span>
                      <span className="text-xs" style={{ color: "#555" }}>{m.price}</span>
                    </div>
                  </div>
                  {m.tag && (
                    <span
                      className="flex-shrink-0 text-xs font-bold px-2 py-0.5"
                      style={{
                        background: `${m.tagColor}14`,
                        color: m.tagColor ?? "#fff",
                        borderRadius: "2px",
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
                  style={{ background: "rgba(255,255,255,0.02)", borderRadius: "2px", borderLeft: "2px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-xs font-semibold mb-1" style={{ color: "#444" }}>Best for</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#888" }}>{m.best}</p>
                </div>

                {/* What's included */}
                <p className="text-xs font-semibold uppercase tracking-widest mb-3.5" style={{ color: "#333", letterSpacing: "0.12em" }}>
                  Includes
                </p>
                <div className="flex flex-col gap-2.5 mb-8">
                  {m.what.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={m.tagColor ?? "#2563EB"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-sm" style={{ color: "#888" }}>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact-form"
                  className="mt-auto flex items-center justify-center gap-2 py-3 text-xs font-bold cursor-pointer transition-all duration-200"
                  style={{
                    border: m.featured ? "1px solid rgba(37,99,235,0.3)" : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "4px",
                    color: m.featured ? "#2563EB" : "#555",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,99,235,0.45)";
                    (e.currentTarget as HTMLElement).style.color = "#3B82F6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = m.featured ? "rgba(37,99,235,0.3)" : "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = m.featured ? "#2563EB" : "#555";
                  }}
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
