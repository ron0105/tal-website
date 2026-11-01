"use client";

import { FilterGrid } from "@/components/motion/FilterGrid";
import ProblemFixResultCard, { type PFRCard } from "./ProblemFixResultCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { track } from "@/lib/track";

export type WorkCard = PFRCard & { group?: string };

/** /work cards with the filter chips (M10) and the CTA that matches the active filter. */
export default function WorkFilter({
  cards,
  filters,
  label,
  ctas,
}: {
  cards: WorkCard[];
  filters: string[];
  label: string;
  ctas: Record<string, { text: string; href: string }>;
}) {
  const [active, setActive] = useState(filters[0]);
  const cta = ctas[active] ?? ctas[filters[0]];
  return (
    <>
      <FilterGrid
        filters={filters}
        items={cards}
        label={label}
        matches={(c, f) => f === filters[0] || c.group === f}
        render={(c) => <ProblemFixResultCard card={c} />}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        onFilter={(f) => {
          setActive(f);
          track("work_filter_used", { filter: f });
        }}
      />
      <Link href={cta.href} className="link-arrow mt-10" data-cta={cta.href === "/call" ? "book-call" : undefined}>
        {cta.text}
        <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
      </Link>
    </>
  );
}
