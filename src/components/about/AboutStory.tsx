"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const beliefs = [
  "Clarity beats complexity. Simple systems work better than sophisticated ones.",
  "Real data beats best guesses. We test assumptions before acting on them.",
  "The right foundation beats rushing. Getting it right early saves more time.",
  "People do better work when they know what is expected of them.",
];

export default function AboutStory() {
  return (
    <>
      <section className="py-24 md:py-32 bg-bg-secondary border-t border-border-subtle">
        <div className="layout-grid px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <AnimateOnScroll>
              <span className="label-eyebrow mb-8 block text-accent">The story</span>
              <h2
                className="font-poppins"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: "var(--text-primary)",
                }}
              >
                The foundation.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-6 pt-2">
                <p className="text-lg leading-relaxed text-body">
                  We started by helping people figure out if their ideas were worth building. Not with opinions, but with a structured process: map assumptions, test them cheaply, get a real answer before spending real money.
                </p>
                <p className="text-lg leading-relaxed text-body">
                  While doing that work, we consistently found the same pattern: businesses that were running but structurally fragile. Good ideas, paying customers, and a founder who could not step back because everything depended on them.
                </p>
                <p className="text-lg leading-relaxed text-body">
                  The discipline proved identical in both cases: understand the real problem first, then build the right structure around it. That is what TAL does, whether you have an idea or a business.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
        <div className="layout-grid px-6 md:px-10">
          <AnimateOnScroll className="mb-16">
            <span className="label-eyebrow mb-6 block text-accent">What we believe</span>
            <h2
              className="font-poppins"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              Our approach.
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-4 mb-16">
            {beliefs.map((b, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="bg-bg-secondary p-8 rounded-2xl border border-border-subtle flex items-start gap-6">
                  <span className="text-sm font-bold text-accent mt-1">0{i + 1}</span>
                  <p className="text-xl font-bold font-poppins text-primary leading-snug">
                    {b}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/contact"
                className="btn-primary"
                style={{ padding: "16px 40px", fontSize: "1rem" }}
              >
                Start the conversation
              </Link>
              <Link
                href="/how-we-work"
                className="btn-ghost"
                style={{ padding: "16px 40px", fontSize: "1rem" }}
              >
                See how we work
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
