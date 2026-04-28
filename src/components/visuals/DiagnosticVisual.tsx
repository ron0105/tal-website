"use client";

import { motion } from "framer-motion";

export function DiagnosticVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer structural rings */}
      <circle cx="100" cy="100" r="80" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="50" stroke="var(--border-subtle)" strokeWidth="1" />
      <circle cx="100" cy="100" r="20" stroke="var(--border-subtle)" strokeWidth="1" />

      {/* Crosshairs */}
      <line x1="100" y1="10" x2="100" y2="190" stroke="var(--border-subtle)" strokeWidth="1" />
      <line x1="10" y1="100" x2="190" y2="100" stroke="var(--border-subtle)" strokeWidth="1" />

      {/* Radar scanning effect */}
      <motion.path
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        d="M 100 100 L 100 20 A 80 80 0 0 1 180 100 Z"
        fill="var(--text-muted)"
        fillOpacity="0.1"
        style={{ transformOrigin: "100px 100px" }}
      />

      {/* Detected anomalies (fractures) */}
      {[
        { cx: 140, cy: 60, delay: 0.5 },
        { cx: 60, cy: 130, delay: 1.5 },
        { cx: 120, cy: 160, delay: 2.5 }
      ].map((anomaly, i) => (
        <motion.circle
          key={`anomaly-${i}`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: anomaly.delay, duration: 0.3 }}
          cx={anomaly.cx}
          cy={anomaly.cy}
          r="6"
          fill="var(--bg)"
          stroke="var(--text-primary)"
          strokeWidth="2"
        />
      ))}
      
      {/* Target lock box */}
      <motion.rect
        initial={{ scale: 2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
        x="130"
        y="50"
        width="20"
        height="20"
        fill="none"
        stroke="var(--text-primary)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
