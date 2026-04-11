"use client";

import { AnimateOnScroll } from "../shared/AnimateOnScroll";

const rhythm = [
  { day: "MONDAY", task: "Problem framing", sub: "Stripping assumptions. Aligning objectives." },
  { day: "WEDNESDAY", task: "Experiment design", sub: "Building pilots. Deploying tests." },
  { day: "FRIDAY", task: "Decision gate", sub: "Reviewing evidence. Build/Pivot/Kill decision." },
];

export default function HomeTimeline() {
  return (
    <section className="padding-section bg-background border-t border-border-subtle">
      <div className="layout-grid">
        <AnimateOnScroll>
          <span className="label-eyebrow mb-12 block">Operating Model</span>
          <h2 className="text-section-title mb-24">
            The internal rhythm.
            <br />
            <span className="text-muted">High-velocity precision.</span>
          </h2>
        </AnimateOnScroll>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line — Hidden on small screens if layout changes */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border-subtle hidden md:block" />
          
          <div className="flex flex-col gap-20">
            {rhythm.map((item, i) => (
              <AnimateOnScroll key={item.day} delay={i * 0.1}>
                <div className="relative md:pl-16 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                  {/* Dot */}
                  <div className="absolute left-0 top-3 w-4 h-4 bg-background border-4 border-text-primary rounded-full hidden md:block" />
                  
                  <span className="text-2xl md:text-3xl font-black tracking-tighter w-[200px] flex-shrink-0 italic">
                    {item.day}
                  </span>
                  
                  <div>
                    <h3 className="text-2xl md:text-4xl font-black mb-3 uppercase tracking-tight">
                      {item.task}
                    </h3>
                    <p className="body-copy !text-lg text-muted">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
