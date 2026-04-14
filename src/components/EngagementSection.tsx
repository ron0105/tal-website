"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const models = [
  {
    name: "Validation Sprint",
    duration: "4 – 6 weeks",
    description:
      "A focused 4–6 week engagement to find out if your core idea holds up — with structured research and a clear go/refine decision at the end.",
    forWhom: "New ideas, pivots, early-stage founders",
    includes: [
      "Problem framing workshop",
      "Assumption risk matrix",
      "Primary research (10–15 interviews)",
      "Demand proxy experiment",
      "Decision memo",
    ],
    featured: false,
  },
  {
    name: "Pilot Blueprint",
    duration: "6 – 10 weeks",
    description:
      "The full journey — from business model clarity through to a lean market test and a clear recommendation on what to do next.",
    forWhom: "Validated ideas ready for first market contact",
    includes: [
      "All Sprint deliverables",
      "Business model + unit economics",
      "Pilot design & execution support",
      "Cohort analysis",
      "Scale / pause / exit recommendation",
    ],
    featured: true,
  },
  {
    name: "Monthly Validation",
    duration: "Retainer",
    description:
      "Ongoing support for founders who are moving fast and running multiple ideas at once. Monthly structured sprints and weekly check-ins keep you clear and on track.",
    forWhom: "Active builders running parallel experiments",
    includes: [
      "2 validation sprints per month",
      "Weekly async review calls",
      "Assumption tracker maintenance",
      "Priority access to lab resources",
    ],
    featured: false,
  },
  {
    name: "Co-Build Ventures",
    duration: "Selective",
    description:
      "For select opportunities where we go all-in as co-founders. We co-design, co-validate, and co-build from zero to first revenue — with the full weight of the Lab behind it.",
    forWhom: "Selective. For founders whose ideas show real signal.",
    includes: [
      "Full lab commitment",
      "Equity-based engagement",
      "Founder-level operational involvement",
      "Lab network & partner access",
    ],
    featured: false,
  },
];

export default function EngagementSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="engagement"
      ref={ref}
      className="px-6 md:px-10 py-28 md:py-36"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#2563EB" }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#555", letterSpacing: "0.14em" }}
              >
                Engagement Models
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: "#F0F0F0", letterSpacing: "-0.025em" }}
            >
              An engagement that fits
              <br />
              <span style={{ color: "#444" }}>where you are right now.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-end"
          >
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#666" }}
            >
              Every model we offer is built around a specific outcome and a clear next step — no vague retainers, no open-ended timelines. You know what you&apos;re getting from day one.
            </p>
          </motion.div>
        </div>

        {/* Models grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative p-8 md:p-10 flex flex-col gap-6"
              style={{
                border: model.featured
                  ? "1px solid rgba(37,99,235,0.3)"
                  : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                background: model.featured
                  ? "rgba(37,99,235,0.04)"
                  : "#0D0D0D",
              }}
            >
              {model.featured && (
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 text-xs font-semibold"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    color: "#2563EB",
                    borderRadius: "4px",
                    letterSpacing: "0.04em",
                  }}
                >
                  Most Chosen
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3
                    className="text-lg font-semibold tracking-tight"
                    style={{ color: "#E0E0E0", letterSpacing: "-0.01em" }}
                  >
                    {model.name}
                  </h3>
                  <span
                    className="text-xs font-medium flex-shrink-0"
                    style={{
                      color: "#555",
                      border: "1px solid rgba(255,255,255,0.06)",
                      padding: "4px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    {model.duration}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#666" }}
                >
                  {model.description}
                </p>
              </div>

              <div
                className="text-xs font-medium py-2.5 px-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "6px",
                  color: "#555",
                }}
              >
                <span style={{ color: "#444" }}>Best for: </span>
                {model.forWhom}
              </div>

              <ul className="flex flex-col gap-2 mt-auto">
                {model.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs"
                    style={{ color: "#666" }}
                  >
                    <svg
                      className="flex-shrink-0 mt-0.5"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 py-3 text-sm font-semibold cursor-pointer transition-all duration-200 mt-2"
                style={{
                  border: model.featured
                    ? "1px solid rgba(37,99,235,0.4)"
                    : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  color: model.featured ? "#2563EB" : "#666",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(37,99,235,0.5)";
                  (e.currentTarget as HTMLElement).style.color = "#3B82F6";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    model.featured
                      ? "rgba(37,99,235,0.4)"
                      : "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.color = model.featured
                    ? "#2563EB"
                    : "#666";
                }}
              >
                Ask us about this
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
