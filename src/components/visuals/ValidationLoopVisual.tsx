"use client";

import { motion } from "framer-motion";

export function ValidationLoopVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle / track */}
      <circle cx="100" cy="100" r="60" stroke="var(--border-subtle)" strokeWidth="1" />
      
      {/* Animated loop */}
      <motion.circle
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        cx="100"
        cy="100"
        r="60"
        stroke="var(--text-primary)"
        strokeWidth="3"
        strokeDasharray="40 337"
        strokeLinecap="round"
        transform="rotate(-90 100 100)"
      />

      {/* Nodes on the loop */}
      {[0, 120, 240].map((angle, i) => {
        const rad = (angle - 90) * (Math.PI / 180);
        const x = 100 + 60 * Math.cos(rad);
        const y = 100 + 60 * Math.sin(rad);
        return (
          <motion.circle
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
            cx={x}
            cy={y}
            r="4"
            fill="var(--bg)"
            stroke="var(--text-primary)"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
}
