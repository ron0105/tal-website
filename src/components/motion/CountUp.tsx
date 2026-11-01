"use client";

import { useEffect, useRef } from "react";
import { motionScale } from "@/lib/motion";

const DURATION = 1200;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function format(n: number, decimals: number) {
  return n.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

/**
 * M4 stat count-up. The server renders the final number, so crawlers and slow phones never
 * see a 0. On the client it counts from 0 over 1.2s (0.84s on phones) once the stat is half in
 * view, unless the visitor prefers reduced motion. Prefix and suffix
 * stay fixed, and a hidden copy of the final value holds the width so nothing jumps.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // The ticking number is written straight to this span, so 60 frames a second never re-render React
  const live = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const out = live.current;
    if (!el || !out || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const duration = DURATION * motionScale();

    const paint = (n: number) => {
      out.textContent = `${prefix}${format(n, decimals)}${suffix}`;
    };
    paint(0);
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          paint(value * easeOut(t));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      paint(value);
    };
  }, [value, prefix, suffix, decimals]);

  const final = `${prefix}${format(value, decimals)}${suffix}`;
  return (
    <span ref={ref} className={`tabular${className ? ` ${className}` : ""}`}>
      <span className="sr-only">{final}</span>
      <span aria-hidden="true" className="inline-grid">
        <span className="invisible col-start-1 row-start-1">{final}</span>
        <span ref={live} className="col-start-1 row-start-1">
          {final}
        </span>
      </span>
    </span>
  );
}
