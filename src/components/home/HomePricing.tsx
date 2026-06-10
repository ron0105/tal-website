"use client";

import { AnimateOnScroll } from "../shared/AnimateOnScroll";
import Link from "next/link";

export default function HomePricing() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow mb-6 block text-accent">Pricing</span>
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
            Transparent pricing for clear results.
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <AnimateOnScroll>
            <div className="p-10 md:p-14 bg-bg-secondary rounded-2xl border border-border-subtle h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-10 text-primary">India</h3>
              
              <div className="mb-10">
                <p className="text-[10px] font-black uppercase tracking-widest mb-4 text-muted">One-time setup:</p>
                <p className="text-3xl font-poppins text-primary">₹25,000 – ₹1,00,000</p>
                <p className="text-sm text-muted mt-2">Depends on business size and complexity</p>
              </div>

              <div className="mb-12">
                <p className="text-[10px] font-black uppercase tracking-widest mb-4 text-muted">Ongoing support:</p>
                <p className="text-3xl font-poppins text-primary">₹15,000 – ₹50,000 / mo</p>
                <p className="text-sm text-muted mt-2">Optional monthly guide and maintenance</p>
              </div>

              <div className="mt-auto">
                <Link href="/contact" className="btn-primary w-full text-center">
                  👉 Start with a conversation
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="p-10 md:p-14 bg-background rounded-2xl border border-border-subtle h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-10 text-primary">International</h3>
              
              <div className="mb-12 flex-1">
                <p className="text-xl font-medium leading-relaxed text-body mb-8">
                  We work with businesses globally. Because every market and scale is different, we share pricing after understanding your business goals and current setup.
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    "Customized scope of work",
                    "Global best practices",
                    "Dedicated support hours",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base font-semibold text-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link href="/contact" className="btn-ghost w-full text-center">
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
