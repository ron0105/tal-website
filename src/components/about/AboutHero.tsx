"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LineReveal } from "@/components/shared/LineReveal";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Abstract timeline dots — suggests journey / history */
function TimelineGraphic() {
  const nodes = [
    { x: 80, y: 260, label: "Observe" },
    { x: 195, y: 180, label: "Structure" },
    { x: 315, y: 240, label: "Validate" },
    { x: 430, y: 160, label: "Build" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease, delay: 0.3 }}
      className="relative w-full mx-auto"
      style={{ maxWidth: "520px" }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 520 420" className="w-full h-auto" aria-hidden="true">

          {/* Ghost text behind */}
          <text
            x="260" y="230"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="900"
            fontSize="160"
            letterSpacing="-8"
            style={{ fill: "var(--text-primary)", opacity: 0.025 }}
          >
            TAL
          </text>

          {/* Curved path connecting nodes */}
          <motion.path
            d={`M ${nodes[0].x} ${nodes[0].y} C ${nodes[0].x + 50} ${nodes[0].y - 40}, ${nodes[1].x - 50} ${nodes[1].y + 40}, ${nodes[1].x} ${nodes[1].y} C ${nodes[1].x + 50} ${nodes[1].y - 30}, ${nodes[2].x - 50} ${nodes[2].y + 30}, ${nodes[2].x} ${nodes[2].y} C ${nodes[2].x + 50} ${nodes[2].y - 40}, ${nodes[3].x - 50} ${nodes[3].y + 40}, ${nodes[3].x} ${nodes[3].y}`}
            style={{ fill: "none", stroke: "var(--border-color)" }}
            strokeWidth="1.5"
            strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 1.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Node circles + labels */}
          {nodes.map((n, i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 1.0 + i * 0.15, ease }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            >
              {/* Outer ring pulse */}
              <motion.circle
                cx={n.x} cy={n.y} r={16}
                style={{ fill: "none", stroke: "var(--accent)" }}
                strokeWidth="1"
                animate={{ r: [16, 26, 16], opacity: [0.25, 0, 0.25] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 + i * 0.5 }}
              />
              {/* Main dot */}
              <circle
                cx={n.x} cy={n.y} r={8}
                style={{ fill: "var(--accent)" }}
              />
              {/* Inner dot */}
              <circle
                cx={n.x} cy={n.y} r={3}
                style={{ fill: "var(--bg)" }}
              />
              {/* Label */}
              <text
                x={n.x}
                y={n.y + 26}
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="700"
                fontSize="11"
                style={{ fill: "var(--text-muted)" }}
              >
                {n.label}
              </text>
            </motion.g>
          ))}

          {/* Year markers */}
          <motion.text
            x={nodes[0].x}
            y={nodes[0].y - 24}
            textAnchor="middle"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontSize="10"
            style={{ fill: "var(--accent)", opacity: 0.6 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.8 }}
          >
            Start
          </motion.text>
          <motion.text
            x={nodes[3].x}
            y={nodes[3].y - 24}
            textAnchor="middle"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontSize="10"
            style={{ fill: "var(--accent)", opacity: 0.6 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 2.1 }}
          >
            Now
          </motion.text>

        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className="about-hero relative bg-background overflow-hidden"
      style={{
        paddingTop: "clamp(10rem, 20vh, 16rem)",
        paddingBottom: "clamp(7rem, 14vh, 12rem)",
      }}
    >
      <style>{`
        .about-hero h1 span.block > span.block {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          color: var(--text-primary);
        }
        .about-hero h1 span.block:last-child > span.block {
          color: var(--text-muted);
          font-style: italic;
        }
      `}</style>

      {/* Gradient blob */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-[0.06]"
          style={{ background: "radial-gradient(circle at 50% 50%, var(--accent), transparent 65%)" }}
        />
      </motion.div>

      {/* Horizontal rule — decorative */}
      <div className="absolute top-28 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(to right, transparent, var(--border-subtle) 20%, var(--border-subtle) 80%, transparent)", opacity: 0.5 }} aria-hidden="true" />

      <motion.div style={{ y: textY }} className="layout-grid px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-16 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
              <span className="label-eyebrow text-accent">Our Story</span>
            </motion.div>

            <LineReveal
              lines={["We started with ideas.", "Businesses", "followed."]}
              delay={0.1}
              stagger={0.12}
              className="font-poppins mb-10"
              as="h1"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.55 }}
            >
              <p className="text-xl md:text-2xl leading-relaxed font-medium text-body mb-5" style={{ maxWidth: "520px" }}>
                TAL was built on one discipline: understand before acting.
              </p>
              <p className="text-base text-muted leading-relaxed" style={{ maxWidth: "480px" }}>
                We applied it to new ideas first, then to running businesses. The problems looked different. The approach never changed.
              </p>
            </motion.div>
          </div>

          {/* Right — timeline graphic */}
          <div className="hidden lg:block">
            <TimelineGraphic />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
