"use client";

import { AnimateOnScroll } from "../shared/AnimateOnScroll";
import { VelocityVisual } from "@/components/visuals";

const rhythm = [
  { day: "WEEK OPEN", task: "Problem Framing", sub: "We start with the question, not the answer. What is the real problem here?" },
  { day: "MID WEEK", task: "Experiment Design", sub: "We build the smallest test that can give us a real answer." },
  { day: "WEEK CLOSE", task: "Decision Gate", sub: "We look at what the evidence actually says. Build, pivot or kill." },
];

export default function HomeTimeline() {
  return (
    <section className="padding-section bg-background border-t border-border-subtle">
      <div className="layout-grid">
        <AnimateOnScroll>
          <span className="label-eyebrow mb-12 block">Pace</span>
          <h2 className="text-section-title mb-24">
            The internal rhythm.
          </h2>
        </AnimateOnScroll>

        {/* Timeline Layout with Visual Placeholder */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="relative flex-1">
            {/* Vertical Line — Hidden on small screens if layout changes */}
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border-subtle hidden md:block" />
            
            <div className="flex flex-col gap-20">
              {rhythm.map((item, i) => (
                <AnimateOnScroll key={item.day} delay={i * 0.1}>
                  <div className="relative md:pl-16 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
                    {/* Dot */}
                    <div className="absolute left-0 top-3 w-4 h-4 bg-background border-4 border-text-primary rounded-full hidden md:block" />
                    
                    <span className="text-2xl md:text-3xl font-black tracking-tighter w-[180px] flex-shrink-0 italic">
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

          <AnimateOnScroll delay={0.2} className="w-full lg:w-[400px] shrink-0 mt-12 lg:mt-0">
            <div className="aspect-[3/4] bg-bg-secondary border border-border-subtle p-8 flex flex-col justify-center items-center text-center">
              <VelocityVisual />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
