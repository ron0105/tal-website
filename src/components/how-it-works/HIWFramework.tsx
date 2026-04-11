"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, AnimatedLine, StaggerContainer, staggerItem } from "@/components/shared/AnimateOnScroll";

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
      "Every new business is built on a few 'must-be-true' guesses. We list everything you're assuming (like what people will pay or why they'll switch) and rank them. We test the scariest, most important guesses first so you don't waste time on the small stuff.",
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
          <span className="label-eyebrow mb-8 block">Process Specification</span>
          <h2 className="text-section-title mb-24">
            Six stages.
            <br />
            <span className="text-muted">One definitive answer.</span>
          </h2>
        </AnimateOnScroll>

        {/* Steps — vertical stack, full width, no cards, no tabs */}
        <div>
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.n} delay={0.06 * Math.min(i, 3)}>
              <div className="py-20">
                <AnimatedLine className="mb-12" />
                {/* Stage number + title + duration — one line, no box */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-10">
                  <span className="section-num text-lg">{step.n}</span>
                  <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
                    {step.title}
                  </h3>
                  <span className="label-eyebrow !text-muted">
                    {step.duration}
                  </span>
                </div>

                {/* The key question — italicised, prominent */}
                <p className="text-xl md:text-2xl font-black italic mb-8 max-w-[640px] text-body">
                  &ldquo;{step.question}&rdquo;
                </p>

                {/* Description */}
                <p className="body-copy mb-12 max-w-[700px]">
                  {step.description}
                </p>

                {/* What happens — plain text list */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 max-w-[800px]">
                  {step.whatHappens.map((item) => (
                    <motion.p
                      key={item}
                      variants={staggerItem}
                      className="text-sm font-bold uppercase tracking-tight text-body border-l-2 border-border-subtle pl-4 py-1"
                    >
                      {item}
                    </motion.p>
                  ))}
                </StaggerContainer>

                {/* Output — inline, no badge */}
                <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <span className="label-eyebrow !text-muted">SYSTEM OUTPUT:</span>
                  <span className="text-lg font-black uppercase tracking-tight">{step.output}</span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}

          {/* Final rule — the decision */}
          <div className="pt-24">
            <AnimatedLine className="mb-16" />
            <AnimateOnScroll>
              <h2 className="text-section-title max-w-[600px]">
                Every sprint ends with one answer:
                <br />
                <span className="text-muted">Build. Pivot. Or Stop.</span>
              </h2>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
