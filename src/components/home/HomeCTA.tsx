"use client";

import Link from "next/link";
import { AnimateOnScroll } from "../shared/AnimateOnScroll";

export default function HomeCTA() {
  return (
    <section className="padding-section bg-foreground text-background border-t border-border-subtle overflow-hidden">
      <div className="layout-grid py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <h2 className="text-display !text-background mb-8">
              READY TO
              <br />
              <span className="opacity-40 italic">BUILD?</span>
            </h2>
            <p className="body-copy !text-background opacity-80 max-w-[480px] mb-12">
              Let's find out if your idea is worth building.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="flex flex-col gap-6">
              <Link 
                href="/work-with-us" 
                className="btn-primary !bg-background !text-foreground !border-background hover:opacity-90 w-full py-8 text-xl"
              >
                START A VALIDATION SPRINT
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/work-with-us" 
                className="btn-ghost !border-background/20 !text-background hover:!border-background w-full py-8 text-xl"
              >
                START THE CONVERSATION
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Footer info line */}
        <div className="mt-32 pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between gap-6 opacity-40">
          <p className="text-xs font-bold uppercase tracking-widest">The Adda Labs // Venture Lab // Mumbai</p>
          <p className="text-xs font-bold uppercase tracking-widest">© 2024 Built for high-conviction founders</p>
        </div>
      </div>
    </section>
  );
}
