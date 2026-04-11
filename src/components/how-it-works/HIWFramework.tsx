"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, AnimatedLine } from "@/components/shared/AnimateOnScroll";

const steps = [
  {
    n: "01",
    title: "Problem Framing",
    duration: "2-3 days",
    question: "Is this a problem people actually care about?",
    description:
      "Before we talk about products or apps, we look for a real problem. We help you figure out if what you want to build solves a genuine pain point for people, or if it's just a nice-to-have. Many great ideas fail because they solve a problem that nobody actually has.",
    whatHappens: [
      "1:1 founder session to map your assumptions",
      "Customer pain hypothesis written in plain language",
      "Problem statement refined and stress-tested",
      "Scope defined: what we're testing and what we're not",
    ],
    output: "Problem Statement Document",
  },
  {
    n: "02",
    title: "Assumption Mapping",
    duration: "2-3 days",
    question: "What are the biggest risks to this idea?",
    description:
      "Every new business is built on a few 'must-be-true' guesses. We list everything you're assuming—like what people will pay or why they'll switch—and rank them. We test the scariest, most important guesses first so you don't waste time on the small stuff.",
    whatHappens: [
      "Full assumption list across customer, product, and revenue",
      "Each assumption scored by risk and uncertainty",
      "High-risk assumptions flagged for immediate testing",
      "Research questions drafted for each critical assumption",
    ],
    output: "Assumption Risk Matrix",
  },
  {
    n: "03",
    title: "Research & Validation",
    duration: "1-2 weeks",
    question: "Will people actually use this and pay for it?",
    description:
      "We go out and talk to your future customers. These aren't just polite surveys, but deep conversations to find the truth. We want to know if they have the problem, how they deal with it now, and what they would give up to have your solution instead.",
    whatHappens: [
      "10–15 in-depth customer interviews",
      "Demand proxy test (e.g. landing page, pre-sales)",
      "Evidence collected against each critical assumption",
      "Patterns and insights documented",
    ],
    output: "Validation Evidence Report",
  },
  {
    n: "04",
    title: "Business Model Structuring",
    duration: "2-3 days",
    question: "Will this business actually make money?",
    description:
      "A great idea still needs a way to pay the bills. We look at the basic math of your business: how much it costs to find a customer, how much they spend, and how long it takes to become profitable. We do this with simple models before you spend a single rupee on building anything.",
    whatHappens: [
      "Revenue model options mapped and compared",
      "Customer acquisition cost estimated",
      "Lifetime value and payback period modeled",
      "Breakeven point and capital requirement clarified",
    ],
    output: "Business Model + Unit Economics Model",
  },
  {
    n: "05",
    title: "Frugal Pilot",
    duration: "1-3 weeks",
    question: "Do people put their money where their mouth is?",
    description:
      "A pilot isn't a finished product, but it's a real test. We create the smallest, fastest version of your idea to see if people will actually commit or pay. It's the best way to get a real 'yes' or 'no' from the market without over-investing in a full build.",
    whatHappens: [
      "Pilot scope and success criteria defined",
      "Pilot designed and launched",
      "Real customers, real transactions (where possible)",
      "Data collected and analyzed",
    ],
    output: "Pilot Results + Demand Analysis",
  },
  {
    n: "06",
    title: "Decision Gate",
    duration: "1-2 days",
    question: "Based on the evidence, what is the next step?",
    description:
      "Every sprint ends with a clear path forward. We look at everything we learned and make a final choice. We either 'Build' (the idea is a winner), 'Pivot' (good idea, wrong direction), or 'Stop' (the evidence says save your money and move on).",
    whatHappens: [
      "All evidence reviewed against original assumptions",
      "Decision criteria assessed (defined at the start)",
      "Clear recommendation with supporting evidence",
      "Next steps defined for all three outcomes",
    ],
    output: "Decision Memo + Next-Step Roadmap",
  },
];

export default function HIWFramework() {
  return (
    <section
      style={{
        paddingTop: "clamp(5rem, 10vh, 8rem)",
        paddingBottom: "clamp(7rem, 14vh, 11rem)",
        background: "var(--bg)",
      }}
    >
      <AnimatedLine className="mb-20" />
      <div className="layout-grid px-6 md:px-10">

        {/* Section header — left-aligned, no symmetry */}
        <AnimateOnScroll>
          <p className="label-eyebrow mb-8">The 6-stage framework</p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              color: "var(--text-primary)",
              maxWidth: "640px",
              marginBottom: "clamp(4rem, 8vh, 7rem)",
            }}
          >
            What happens
            <br />
            <span style={{ color: "var(--text-muted)" }}>at each stage.</span>
          </h2>
        </AnimateOnScroll>

        {/* Steps — vertical stack, full width, no cards, no tabs */}
        <div>
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.n} delay={0.06 * Math.min(i, 3)}>
              <div
                style={{
                  paddingTop: "clamp(3rem, 6vh, 5rem)",
                  paddingBottom: "clamp(3rem, 6vh, 5rem)",
                }}
              >
                <AnimatedLine className="mb-12" />
                {/* Stage number + title + duration — one line, no box */}
                <div
                  className="flex flex-wrap items-baseline gap-4 mb-6"
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {step.n}
                  </span>
                  <h3
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.05,
                      color: "var(--text-primary)",
                      margin: 0,
                    }}
                  >
                    {step.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step.duration}
                  </span>
                </div>

                {/* The key question — italicised, prominent */}
                <p
                  style={{
                    fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                    fontWeight: 600,
                    fontStyle: "italic",
                    color: "var(--text-body)",
                    letterSpacing: "-0.01em",
                    marginBottom: "1.75rem",
                    maxWidth: "640px",
                  }}
                >
                  &ldquo;{step.question}&rdquo;
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "var(--text-body)",
                    maxWidth: "680px",
                    marginBottom: "3rem",
                  }}
                >
                  {step.description}
                </p>

                {/* What happens — plain text list */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-20px" }}
                  variants={{
                    show: { transition: { staggerChildren: 0.05 } }
                  }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "0.5rem 3rem",
                    marginBottom: "2rem",
                    maxWidth: "720px",
                  }}
                >
                  {step.whatHappens.map((item) => (
                    <motion.p
                      key={item}
                      variants={{
                        hidden: { opacity: 0, x: -5 },
                        show: { opacity: 1, x: 0 }
                      }}
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--text-body)",
                        lineHeight: 1.7,
                        paddingLeft: "1.25rem",
                        borderLeft: "1.5px solid var(--border-color)",
                      }}
                    >
                      {item}
                    </motion.p>
                  ))}
                </motion.div>

                {/* Output — inline, no badge */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  What you get:
                  <span
                    style={{
                      fontWeight: 600,
                      textTransform: "none",
                      letterSpacing: "0",
                      color: "var(--text-primary)",
                      marginLeft: "1rem",
                    }}
                  >
                    {step.output}
                  </span>
                </p>
              </div>
            </AnimateOnScroll>
          ))}

          {/* Final rule — the decision */}
          <div style={{ paddingTop: "clamp(3rem, 6vh, 5rem)" }}>
            <AnimatedLine className="mb-12" />
            <AnimateOnScroll>
              <p
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: "var(--text-primary)",
                  maxWidth: "560px",
                }}
              >
                Every sprint ends with one answer.
                <br />
                <span style={{ color: "var(--text-muted)" }}>
                  Build. Change the approach. Or stop.
                </span>
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
