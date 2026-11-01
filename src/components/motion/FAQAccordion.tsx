"use client";

import { useId, useState, type ReactNode } from "react";

export type FAQItem = { q: string; a: ReactNode };

/** M9 FAQAccordion: one item open at a time, keyboard and screen-reader friendly. */
export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();

  return (
    <div className="border-t" style={{ borderColor: "var(--hairline)" }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const btn = `${base}-q${i}`;
        const panel = `${base}-a${i}`;
        return (
          <div key={item.q} className="border-b" style={{ borderColor: "var(--hairline)" }}>
            <h3 className="m-0">
              <button
                id={btn}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full min-h-[56px] items-center justify-between gap-6 py-5 text-left text-base font-semibold cursor-pointer"
                style={{ color: "var(--text-primary)" }}
              >
                {item.q}
                <svg className="acc-chevron shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            {/* inert keeps links in a closed answer out of the tab order */}
            <div id={panel} role="region" aria-labelledby={btn} className="acc-panel" data-open={isOpen ? "" : undefined} inert={!isOpen}>
              <div>
                <div className="pb-6 pr-10 measure" style={{ color: "var(--text-body)" }}>
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
