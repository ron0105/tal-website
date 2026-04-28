"use client";

import { AnimateOnScroll } from "../shared/AnimateOnScroll";
import { UnstructuredEffortVisual, AlignedGrowthVisual } from "@/components/visuals";

export default function HomeManifestoBlocks() {
  return (
    <section id="manifesto" className="padding-section bg-bg-secondary border-t border-border-subtle">
      <div className="layout-grid">
        <AnimateOnScroll>
          <span className="label-eyebrow mb-12 block">Stance</span>
          <h2 className="text-section-title mb-24">
            Evidence over guesswork.
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle">
          {/* WE REJECT */}
          <div className="bg-background p-10 md:p-16">
            <AnimateOnScroll>
              <h3 className="text-xl font-black mb-12 text-muted uppercase tracking-widest">[ WHAT WE AVOID ]</h3>
              <ul className="flex flex-col gap-10 mb-16">
                {[
                  "Building before you know it works",
                  "Excitement mistaken for demand",
                  "Moving fast without moving smart",
                ].map((item, i) => (
                  <li key={i} className="flex flex-col gap-2">
                    <span className="text-3xl md:text-4xl font-black tracking-tight leading-none uppercase">
                      {item}
                    </span>
                    <div className="w-full h-1 bg-bg-lift" />
                  </li>
                ))}
              </ul>
              <div className="w-full h-48 bg-bg-secondary border border-border-subtle p-6 flex flex-col justify-center items-center text-center">
                <UnstructuredEffortVisual />
              </div>
            </AnimateOnScroll>
          </div>

          {/* WE BELIEVE */}
          <div className="bg-background p-10 md:p-16 flex flex-col justify-between">
            <AnimateOnScroll delay={0.15}>
              <h3 className="text-xl font-black mb-12 text-text-primary uppercase tracking-widest">[ OUR STANCE ]</h3>
              <ul className="flex flex-col gap-10 mb-16">
                {[
                  "Real data beats best guesses",
                  "The right foundation beats rushing",
                  "Know it works, then grow it big",
                ].map((item, i) => (
                  <li key={i} className="flex flex-col gap-2">
                    <span className="text-3xl md:text-4xl font-black tracking-tight leading-none uppercase italic italic-accent">
                      {item}
                    </span>
                    <div className="w-full h-1 bg-text-primary" />
                  </li>
                ))}
              </ul>
              <div className="w-full h-48 bg-bg-lift/20 border border-border-subtle p-6 flex flex-col justify-center items-center text-center">
                <AlignedGrowthVisual />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
