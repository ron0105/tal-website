"use client";

import { CLOSE_DATE, SEATS_PER_ROUND, SEATS_PER_TRACK, SEATS_TAKEN, depositLabel, seatsLeft } from "@/lib/live-projects";
import { useVariant } from "./VariantContext";

// The one part of the hero that changes with ?v=. Stays invisible (but keeps its space) until
// the variant is read, so the wrong ask never flashes.
export default function HeroAsk() {
  const { variant, ready } = useVariant();
  const book = variant === "a";

  return (
    <div style={{ visibility: ready ? "visible" : "hidden" }}>
      {variant === "c" && (
        <p className="font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
          {SEATS_PER_ROUND} seats, {SEATS_PER_TRACK} per track. Applications are open until {CLOSE_DATE}.
          {SEATS_TAKEN > 0 && (
            <span style={{ color: "var(--accent)" }}> {seatsLeft()} of {SEATS_PER_ROUND} seats left.</span>
          )}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <a href="#find-your-track" className="btn-primary" style={{ padding: "13px 28px" }}>
          {book ? `Book your seat for ${depositLabel()}` : "Apply free"} →
        </a>
        <a href="#how-it-works" className="btn-ghost" style={{ padding: "13px 28px" }}>How it works</a>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", maxWidth: "560px" }}>
        {book
          ? `${depositLabel()} books your seat, and it is refunded in full to anyone who is not shortlisted. You will see the full fee at the last step.`
          : "Applying is free. You will see the fee at the last step, covered by the full refund guarantee below."}
      </p>
    </div>
  );
}
