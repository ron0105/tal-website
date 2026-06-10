"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HomeSplit() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-background border-y border-border-subtle overflow-hidden">
      {/* Section header */}
      <div className="layout-grid px-6 md:px-10 pt-16 md:pt-20 pb-8 md:pb-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <span className="label-eyebrow mb-6 block text-accent">How we work with you</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Two paths. One way of thinking.
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Whether you run a business or are testing a new idea, the same structured thinking guides everything we do.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* For Businesses */}
        <SplitPanel
          eyebrow="For Businesses"
          eyebrowAccent
          headline="We help you run your business better and grow smoothly."
          items={[
            "Improve team clarity",
            "Get more consistent customers",
            "Set simple systems",
          ]}
          itemAccent
          cta="Work with us"
          ctaHref="/for-businesses"
          ctaVariant="primary"
          ghostLabel="01"
          delay={0}
          borderRight
        />

        {/* Think & Build */}
        <SplitPanel
          eyebrow="Think & Build"
          eyebrowAccent={false}
          headline="We help you understand if your idea actually works, before you build it."
          items={[
            "Test if the market is real",
            "Get clarity before you commit",
            "Know what to build before you spend a rupee",
          ]}
          itemAccent={false}
          cta="Explore idea validation"
          ctaHref="/think-and-build"
          ctaVariant="ghost"
          ghostLabel="02"
          delay={0.1}
          borderRight={false}
        />
      </div>
    </section>
  );
}

interface SplitPanelProps {
  eyebrow: string;
  eyebrowAccent: boolean;
  headline: string;
  items: string[];
  itemAccent: boolean;
  cta: string;
  ctaHref: string;
  ctaVariant: "primary" | "ghost";
  ghostLabel: string;
  delay: number;
  borderRight: boolean;
}

function SplitPanel({
  eyebrow, eyebrowAccent, headline, items, itemAccent,
  cta, ctaHref, ctaVariant, ghostLabel, delay, borderRight,
}: SplitPanelProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`relative flex-1 p-10 md:p-24 ${borderRight ? "border-b md:border-b-0 md:border-r" : ""} border-border-subtle flex flex-col justify-center overflow-hidden bg-background transition-colors duration-500 hover:bg-bg-secondary group`}
    >
      {/* Ghost number backdrop */}
      <span
        className="absolute bottom-0 right-4 font-poppins select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(8rem, 16vw, 14rem)",
          letterSpacing: "-0.05em",
          color: "var(--text-primary)",
          opacity: 0.03,
          transition: "opacity 0.5s ease",
          lineHeight: 0.85,
        }}
        aria-hidden="true"
      >
        {ghostLabel}
      </span>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease, delay }}
      >
        <span
          className="label-eyebrow mb-8 block"
          style={{ color: eyebrowAccent ? "var(--accent)" : "var(--text-muted)" }}
        >
          {eyebrow}
        </span>
        <h3
          className="font-poppins"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: "2rem",
            color: "var(--text-primary)",
          }}
        >
          {headline}
        </h3>
        <ul className="flex flex-col gap-5 mb-12">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-4">
              <div
                className="w-2 h-2 flex-shrink-0"
                style={{
                  background: itemAccent ? "var(--accent)" : "var(--text-muted)",
                  borderRadius: "2px",
                }}
              />
              <span className="text-lg font-medium text-body">{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href={ctaHref}
          className={ctaVariant === "primary" ? "btn-primary" : "btn-ghost"}
          style={{ padding: "16px 32px", display: "inline-block" }}
        >
          {cta}
        </Link>
      </motion.div>
    </motion.div>
  );
}
