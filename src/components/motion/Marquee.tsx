import type { ReactNode } from "react";

/**
 * M8 marquee: a 40s loop that pauses on hover and while off-screen, and becomes one still,
 * wrapped row under reduced motion. Children are the items; they're drawn twice for the
 * seamless loop, and the copy is hidden from screen readers.
 */
export function Marquee({ label, children, gap = 64 }: { label: string; children: ReactNode; gap?: number }) {
  return (
    <div className="marquee" data-marquee role="region" aria-label={label}>
      <div className="marquee-row" style={{ columnGap: gap }}>
        <ul className="flex items-center shrink-0" style={{ columnGap: gap, paddingRight: gap }}>
          {children}
        </ul>
        <ul className="marquee-dup flex items-center shrink-0" style={{ columnGap: gap, paddingRight: gap }} aria-hidden="true">
          {children}
        </ul>
      </div>
    </div>
  );
}
