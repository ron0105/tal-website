"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "../shared/AnimateOnScroll";

export default function HomeSplit() {
  return (
    <section className="bg-background border-t border-border-subtle overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* LEFT: TAL (Core Lab) */}
          <motion.div 
            className="flex-1 p-10 md:p-20 border-b md:border-b-0 md:border-r border-border-subtle flex flex-col justify-center cursor-default bg-background"
            whileHover={{
              backgroundColor: "var(--bg-secondary)",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            <AnimateOnScroll>
              <span className="label-eyebrow mb-8 block">Phase 01</span>
              <h3 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">
                TAL
                <br />
                <span className="text-muted">Core Lab</span>
              </h3>
              
              <ul className="flex flex-col gap-6">
                {[
                  "Rigorous Validation",
                  "Pre-build Testing",
                  "Question: Should this exist?",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-text-primary rounded-full" />
                    <span className="text-xl font-bold uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </motion.div>

        <motion.div 
          className="flex-1 p-10 md:p-20 flex flex-col justify-center cursor-default bg-bg-secondary"
          whileHover={{
            backgroundColor: "var(--bg-lift)",
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          <AnimateOnScroll delay={0.15}>
            <span className="label-eyebrow mb-8 block">Phase 02</span>
            <h3 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">
              TAL VI
              <br />
              <span className="text-muted">Infrastructure</span>
            </h3>
            
            <ul className="flex flex-col gap-6">
              {[
                "Growth Systems",
                "Post-validation Execution",
                "Question: How do we scale this?",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-text-muted rounded-full" />
                  <span className="text-xl font-bold uppercase tracking-tight text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </motion.div>
      </div>
    </section>
  );
}
