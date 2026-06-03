"use client";

import Link from "next/link";

// ─── HiringMarquee ───────────────────────────────────────────────────────────
// Drop this anywhere on the home page (or any page).
// Uses the .marquee-track class already defined in globals.css.
// The entire strip is a clickable link to /careers.

const MARQUEE_TEXT = [
  "We're Hiring",
  "Content Creator",
  "Growth Hacker",
  "Join TAL",
  "Open Roles →",
  "We're Hiring",
  "Content Creator",
  "Growth Hacker",
  "Join TAL",
  "Open Roles →",
];

export default function HiringMarquee() {
  return (
    <Link href="/careers" className="block group" aria-label="View open roles at TAL">
      <div
        className="overflow-hidden py-4 border-y"
        style={{
          borderColor: "var(--border-subtle)",
          background: "var(--bg-secondary)",
        }}
      >
        {/* Duplicate the track content so the loop is seamless */}
        <div className="marquee-track">
          {[...MARQUEE_TEXT, ...MARQUEE_TEXT].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 px-6 text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors group-hover:text-accent"
              style={{ color: "var(--text-muted)" }}
            >
              {item}
              {/* Dot separator */}
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: "var(--border-color)" }}
                aria-hidden="true"
              />
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
