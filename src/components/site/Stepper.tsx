import type { CSSProperties } from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * A connected vertical stepper (spec 5.3 #3). The line draws down (M6) and each step appears
 * as the line reaches it. Scroll-triggered through Reveal.
 */
export default function Stepper({ steps, label }: { steps: string[]; label: string }) {
  const per = 800 / Math.max(1, steps.length - 1);
  return (
    <Reveal mode="fade">
      <div className="relative" aria-label={label}>
        <svg className="absolute left-[11px] top-3 bottom-3 w-[2px] h-[calc(100%-24px)]" viewBox="0 0 2 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M1 0 V100" pathLength={1} className="draw" stroke="var(--brand)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" fill="none" />
        </svg>
        <ol className="grid gap-8">
          {steps.map((s, i) => (
            <li key={s} className="draw-node relative pl-12" style={{ "--at": `${Math.round(i * per)}ms` } as CSSProperties}>
              <span
                className="absolute left-0 top-0.5 grid place-items-center w-6 h-6 rounded-full text-xs font-bold tabular"
                style={{ background: "var(--bg)", border: "1.5px solid var(--brand)", color: "var(--accent-text)" }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                {s}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
