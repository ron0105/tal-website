"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { EASE, MOTION, motionScale } from "@/lib/motion";
import { FilterChips } from "./FilterChips";

/**
 * M10 filter transition. On a change, leaving cards fade out (150ms), the grid reflows (300ms),
 * and arriving cards come in with the M3 stagger. Phones run 30% shorter; reduced motion swaps instantly.
 * `onFilter` is where the page reports work_filter_used to analytics.
 */
export function FilterGrid<T extends { id: string }>({
  filters,
  items,
  matches,
  render,
  label,
  className = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
  onFilter,
}: {
  filters: string[];
  items: T[];
  matches: (item: T, filter: string) => boolean;
  render: (item: T) => ReactNode;
  label: string;
  className?: string;
  onFilter?: (filter: string) => void;
}) {
  const [active, setActive] = useState(filters[0]);
  const reduce = useReducedMotion();
  const k = reduce ? 0 : motionScale();
  const shown = items.filter((item) => matches(item, active));

  return (
    <LayoutGroup>
      <FilterChips
        filters={filters}
        active={active}
        label={label}
        onChange={(f) => {
          setActive(f);
          onFilter?.(f);
        }}
      />
      <motion.div layout transition={{ duration: MOTION.layout * k, ease: EASE }} className={className}>
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 24 * k }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: MOTION.base * k, ease: EASE, delay: Math.min(i, MOTION.maxStagger - 1) * MOTION.stagger * k },
              }}
              exit={{ opacity: 0, transition: { duration: MOTION.exit * k } }}
              transition={{ layout: { duration: MOTION.layout * k, ease: EASE } }}
            >
              {render(item)}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}
