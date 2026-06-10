"use client";

import { AnimateOnScroll } from "../shared/AnimateOnScroll";
import Link from "next/link";

const businessCriteria = [
  "You have a running business",
  "Things feel messy as you grow",
  "You want clarity and control",
];

const founderCriteria = [
  "You have an idea, not a business yet",
  "You're not sure if the market is real",
  "You want to validate before you build",
];

export default function HomeWhoThisIsFor() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow mb-6 block text-accent">Who this is for</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Is this you?
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Businesses */}
          <AnimateOnScroll>
            <div className="bg-background rounded-2xl border border-border-subtle overflow-hidden h-full flex flex-col">
              <div className="p-8 border-b border-border-subtle">
                <span className="label-eyebrow text-accent block mb-2">For Businesses</span>
                <p className="text-base text-muted">Running a business that needs clarity</p>
              </div>
              <div className="p-8 flex flex-col gap-4 flex-1">
                {businessCriteria.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 flex-shrink-0 rounded-sm" style={{ background: "var(--accent)" }} />
                    <p className="text-lg font-semibold text-primary">{item}</p>
                  </div>
                ))}
              </div>
              <div className="p-8 pt-0">
                <Link href="/for-businesses" className="btn-primary w-full text-center" style={{ display: "block" }}>
                  For Businesses →
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Think & Build */}
          <AnimateOnScroll delay={0.1}>
            <div className="bg-background rounded-2xl border border-border-subtle overflow-hidden h-full flex flex-col">
              <div className="p-8 border-b border-border-subtle">
                <span className="label-eyebrow block mb-2">Think & Build</span>
                <p className="text-base text-muted">Testing an idea before building it</p>
              </div>
              <div className="p-8 flex flex-col gap-4 flex-1">
                {founderCriteria.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 flex-shrink-0 rounded-sm" style={{ background: "var(--text-muted)" }} />
                    <p className="text-lg font-semibold text-primary">{item}</p>
                  </div>
                ))}
              </div>
              <div className="p-8 pt-0">
                <Link href="/think-and-build" className="btn-ghost w-full text-center" style={{ display: "block" }}>
                  Think & Build →
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
