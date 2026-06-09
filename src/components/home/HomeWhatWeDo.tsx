"use client";

import { AnimateOnScroll } from "../shared/AnimateOnScroll";
import Link from "next/link";

const services = [
  {
    title: "Team & Work Clarity",
    do: ["Clear roles", "Simple processes", "Defined work"],
    get: ["Less confusion", "Faster work", "Fewer mistakes"],
  },
  {
    title: "Getting More Customers",
    do: ["Improve website", "Set up lead tracking", "Build customer flow"],
    get: ["More inquiries", "Better follow-ups", "More conversions"],
  },
  {
    title: "Clear Business Communication",
    do: ["Clear messaging", "Consistent communication", "Better online presence"],
    get: ["Customers understand you", "More trust", "Better leads"],
  },
];

export default function HomeWhatWeDo() {
  return (
    <section className="bg-bg-secondary py-16 md:py-20">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll>
          <span className="label-eyebrow mb-6 block text-accent">What We Do</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(1.75rem, 8vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1rem",
              color: "var(--text-primary)",
            }}
          >
            What we actually do.
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl">
            Two services, built around the same discipline. Here is what each one looks like.
          </p>
        </AnimateOnScroll>

        {/* For Businesses */}
        <AnimateOnScroll className="mb-3">
          <span className="label-eyebrow text-accent block mb-3">For Businesses</span>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {services.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="bg-background p-10 rounded-2xl border border-border-subtle h-full">
                <h3 className="text-2xl font-bold mb-8 text-primary">
                  {service.title}
                </h3>

                <div className="mb-8">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-4 text-muted">We do:</p>
                  <ul className="flex flex-col gap-2">
                    {service.do.map((item) => (
                      <li key={item} className="text-base font-semibold text-body flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-4 text-accent">You get:</p>
                  <ul className="flex flex-col gap-2">
                    {service.get.map((item) => (
                      <li key={item} className="text-base font-semibold text-primary flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Think & Build */}
        <AnimateOnScroll className="mb-3">
          <span className="label-eyebrow block mb-3">Think & Build</span>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <div className="bg-background rounded-2xl border border-border-subtle overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 md:p-14 md:border-r border-b md:border-b-0 border-border-subtle">
                <h3 className="text-2xl font-bold mb-4 text-primary">Idea Validation</h3>
                <p className="text-base text-body mb-6">
                  You have an idea but are not sure if it is worth building. We run it through a structured 6-stage process to find out before you spend real money.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Find out if the problem is real",
                    "Test whether people will pay for the solution",
                    "Walk away with a clear build, pivot, or kill decision",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-semibold text-body">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-0.5 shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 md:p-14 bg-bg-secondary flex flex-col justify-between">
                <div>
                  <p className="label-eyebrow mb-6">The 6 stages</p>
                  <ol className="flex flex-col gap-3">
                    {["Problem Framing", "Assumption Mapping", "Research and Validation", "Business Model Structuring", "Small Test", "Decision Gate"].map((stage, i) => (
                      <li key={stage} className="flex items-center gap-3 text-sm font-medium text-body">
                        <span className="text-muted text-xs font-bold w-6 shrink-0">0{i + 1}</span>
                        {stage}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="mt-8">
                  <Link href="/think-and-build" className="btn-ghost" style={{ padding: "12px 28px" }}>
                    See the full framework →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
