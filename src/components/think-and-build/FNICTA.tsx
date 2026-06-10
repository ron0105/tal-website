"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export default function FNICTA() {
  return (
    <section
      className="py-24 md:py-32 border-t border-border-subtle bg-background"
    >
      <div className="layout-grid px-6 md:px-10">
        <div className="max-w-3xl">
          <AnimateOnScroll>
            <h2
              className="font-poppins mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              Start with clarity <br />
              <span className="text-muted">before you build.</span>
            </h2>
            <p className="text-xl md:text-2xl text-body font-medium leading-relaxed mb-12">
              Every great venture starts with a clear foundation. We help you find it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-primary"
                style={{ padding: "16px 40px", fontSize: "1rem", textAlign: "center" }}
              >
                Start a conversation
              </Link>
              <Link
                href="/contact"
                className="btn-ghost"
                style={{ padding: "16px 40px", fontSize: "1rem", textAlign: "center" }}
              >
                Book a call
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
