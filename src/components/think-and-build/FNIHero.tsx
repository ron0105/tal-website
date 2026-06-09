"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { LineReveal } from "@/components/shared/LineReveal";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* Radial constellation — branches of possibility radiating from a center seed */
function IdeaConstellation() {
  const cx = 260;
  const cy = 260;

  /* Branches: angle, length, dot at tip, optional sub-branch */
  const branches = [
    { angle: -80,  len: 130, sub: [{ dAngle: -30, len: 60 }, { dAngle: 20, len: 50 }] },
    { angle: -20,  len: 110, sub: [{ dAngle: 25, len: 70 }] },
    { angle:  40,  len: 145, sub: [{ dAngle: -20, len: 55 }, { dAngle: 35, len: 65 }] },
    { angle:  110, len: 100, sub: [{ dAngle: 30, len: 50 }] },
    { angle:  170, len: 125, sub: [{ dAngle: -25, len: 58 }, { dAngle: 20, len: 48 }] },
    { angle:  230, len:  95, sub: [{ dAngle: -30, len: 55 }] },
    { angle:  290, len: 120, sub: [{ dAngle: 25, len: 60 }, { dAngle: -20, len: 52 }] },
  ];

  type SubBranch = { dAngle: number; len: number };
  type Branch = { angle: number; len: number; sub: SubBranch[] };

  function toRad(deg: number) { return (deg * Math.PI) / 180; }

  function tipPoint(ox: number, oy: number, angle: number, len: number) {
    return { x: ox + len * Math.cos(toRad(angle)), y: oy + len * Math.sin(toRad(angle)) };
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, ease, delay: 0.2 }}
      className="relative w-full mx-auto"
      style={{ maxWidth: "520px" }}
    >
      {/* Floating drift */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 520 520" className="w-full h-auto" aria-hidden="true">

          {/* Soft glow behind center */}
          <circle cx={cx} cy={cy} r={80} style={{ fill: "var(--accent)", opacity: 0.05 }} />
          <circle cx={cx} cy={cy} r={50} style={{ fill: "var(--accent)", opacity: 0.07 }} />

          {/* Outer dashed orbit */}
          <motion.circle
            cx={cx} cy={cy} r={155}
            style={{ fill: "none", stroke: "var(--accent)", transformOrigin: `${cx}px ${cy}px` }}
            strokeWidth="1"
            strokeDasharray="4 18"
            opacity={0.18}
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />

          {/* Branch lines and nodes */}
          {(branches as Branch[]).map((b, bi) => {
            const tip = tipPoint(cx, cy, b.angle, b.len);
            const mainDelay = 0.5 + bi * 0.1;

            return (
              <g key={bi}>
                {/* Main branch */}
                <motion.line
                  x1={cx} y1={cy} x2={tip.x} y2={tip.y}
                  style={{ stroke: "var(--border-color)" }}
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 0.7, delay: mainDelay }}
                />
                {/* Tip dot */}
                <motion.circle
                  cx={tip.x} cy={tip.y} r={4}
                  style={{ fill: "var(--accent)" }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.9, scale: 1 }}
                  transition={{ duration: 0.4, delay: mainDelay + 0.7 }}
                />

                {/* Sub-branches */}
                {b.sub.map((s: SubBranch, si: number) => {
                  const subTip = tipPoint(tip.x, tip.y, b.angle + s.dAngle, s.len);
                  const subDelay = mainDelay + 0.75 + si * 0.12;
                  return (
                    <g key={si}>
                      <motion.line
                        x1={tip.x} y1={tip.y} x2={subTip.x} y2={subTip.y}
                        style={{ stroke: "var(--border-subtle)" }}
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 0.5, delay: subDelay }}
                      />
                      <motion.circle
                        cx={subTip.x} cy={subTip.y} r={2.5}
                        style={{ fill: "var(--accent)" }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.65, scale: 1 }}
                        transition={{ duration: 0.35, delay: subDelay + 0.5 }}
                      />
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* Center hub ring */}
          <motion.circle
            cx={cx} cy={cy} r={22}
            style={{ fill: "none", stroke: "var(--accent)", transformOrigin: `${cx}px ${cy}px` }}
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          />
          {/* Center dot */}
          <motion.circle
            cx={cx} cy={cy} r={8}
            style={{ fill: "var(--accent)" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45, ease }}
          />

          {/* Pulsing outer ring */}
          <motion.circle
            cx={cx} cy={cy} r={22}
            style={{ fill: "none", stroke: "var(--accent)" }}
            strokeWidth="1.5"
            animate={{ r: [22, 38, 22], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />

        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function FNIHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative bg-background overflow-hidden"
      style={{
        paddingTop: "clamp(10rem, 20vh, 16rem)",
        paddingBottom: "clamp(7rem, 14vh, 12rem)",
      }}
    >
      {/* Gradient blob */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-[0.06]"
          style={{ background: "radial-gradient(circle at 40% 40%, var(--accent), transparent 65%)" }}
        />
      </motion.div>

      {/* Decorative corner lines — left side */}
      <div className="absolute top-28 left-0 w-px h-44 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--border-subtle), transparent)" }} aria-hidden="true" />
      <div className="absolute top-32 left-14 w-px h-28 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--border-subtle), transparent)", opacity: 0.5 }} aria-hidden="true" />

      <motion.div style={{ y: textY }} className="fni-hero layout-grid px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-12 items-center">

          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
              <span className="label-eyebrow text-accent">Think & Build</span>
            </motion.div>

            {/* Headline */}
            <LineReveal
              lines={["You have an idea.", "Let's find out if", "it can become a business."]}
              delay={0.1}
              stagger={0.12}
              className="font-poppins mb-10"
              as="h1"
            />
            <style>{`
              .fni-hero h1 span.block > span.block {
                font-size: clamp(2.5rem, 6vw, 5rem);
                font-weight: 800;
                letter-spacing: -0.04em;
                line-height: 1.05;
                color: var(--text-primary);
              }
              .fni-hero h1 span.block:last-child > span.block {
                color: var(--accent);
              }
            `}</style>

            {/* Body copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.55 }}
            >
              <p className="text-xl leading-relaxed font-medium text-body mb-4" style={{ maxWidth: "480px" }}>
                Before you build, spend, or commit, we help you pressure-test the idea with structured thinking and real market insight.
              </p>
              <p className="text-base text-muted mb-10" style={{ maxWidth: "420px" }}>
                Most ideas fail not because of execution, but because of assumptions that were never tested.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                  style={{ padding: "14px 32px" }}
                >
                  Talk through your idea
                </Link>
                <a
                  href="https://wa.me/918169315080?text=Hi%2C%20I%20have%20a%20new%20business%20idea%20and%20would%20like%20to%20know%20more%20about%20TAL%20Consulting."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                  style={{ padding: "14px 0" }}
                >
                  <WhatsAppIcon />
                  Or message us on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — constellation graphic */}
          <div className="hidden lg:block">
            <IdeaConstellation />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
