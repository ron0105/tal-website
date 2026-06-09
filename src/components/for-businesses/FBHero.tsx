"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const hubNodes = [
  { label: ["Get Found.", "Get Trusted."], angle: -90 },
  { label: ["Show Up.", "Consistently."], angle: 30 },
  { label: ["Let It", "Run Itself."], angle: 150 },
];

function HubDiagram() {
  const cx = 260;
  const cy = 260;
  const r = 165;
  const orbitR = 115;
  const orbitC = 2 * Math.PI * orbitR;

  const nodes = hubNodes.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return { ...n, x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease, delay: 0.25 }}
      className="relative w-full mx-auto"
      style={{ maxWidth: "520px" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 520 520" className="w-full h-auto" aria-hidden="true">

          {/* Rotating orbit ring */}
          <motion.circle
            cx={cx} cy={cy} r={orbitR}
            style={{ fill: "none", stroke: "var(--accent)", transformOrigin: `${cx}px ${cy}px` }}
            strokeWidth="1"
            strokeDasharray={`${orbitC * 0.18} ${orbitC * 0.82}`}
            opacity={0.3}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />

          {/* Connecting lines */}
          {nodes.map((n, i) => (
            <motion.line
              key={i}
              x1={cx} y1={cy} x2={n.x} y2={n.y}
              style={{ stroke: "var(--border-color)" }}
              strokeWidth="1.5"
              strokeDasharray="5 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 0.9, delay: 0.55 + i * 0.15 }}
            />
          ))}

          {/* Center pulse glow */}
          <motion.circle
            cx={cx} cy={cy} r={54}
            style={{ fill: "var(--accent)" }}
            initial={{ opacity: 0.08 }}
            animate={{ r: [54, 68, 54], opacity: [0.08, 0.03, 0.08] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Center hub */}
          <circle cx={cx} cy={cy} r={40} style={{ fill: "var(--accent)" }} />
          <rect
            x={cx - 12} y={cy - 12} width="24" height="24" rx="6"
            style={{ fill: "var(--bg)", opacity: 0.25 }}
          />
          <rect
            x={cx - 5} y={cy - 5} width="10" height="10" rx="3"
            style={{ fill: "var(--bg)" }}
          />

          {/* Node cards */}
          {nodes.map((n, i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.15, ease }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            >
              <rect
                x={n.x - 60} y={n.y - 32}
                width="120" height="64"
                rx="12"
                style={{ fill: "var(--bg-secondary)", stroke: "var(--border-color)" }}
                strokeWidth="1.5"
              />
              {n.label.map((line, li) => (
                <text
                  key={li}
                  x={n.x}
                  y={n.y + (li === 0 ? -10 : 10)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="11.5"
                  fontWeight="700"
                  fontFamily="Poppins, sans-serif"
                  style={{ fill: "var(--text-primary)" }}
                >
                  {line}
                </text>
              ))}
            </motion.g>
          ))}

        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function FBHero() {
  return (
    <section
      className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      style={{ background: "var(--navy)", borderBottom: "3px solid #CA8A04" }}
    >
      <div className="layout-grid px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease }}
              className="label-eyebrow mb-6 block"
              style={{ color: "#EAB308" }}
            >
              For Businesses
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="font-poppins mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "#FFFFFF",
              }}
            >
              You built something real.
              <br />
              Now let's make sure{" "}
              <span style={{ color: "#EAB308" }}>the right people see it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="text-lg mb-10 max-w-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              You&apos;re not here for more posts. You&apos;re here because you want customers, trust, and growth — without spending half your week figuring out the internet. That&apos;s exactly what we do.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-widest transition-opacity hover:opacity-90 cursor-pointer"
                style={{ padding: "14px 32px", background: "#CA8A04", color: "#fff", borderRadius: "var(--radius-btn)" }}
              >
                Start a Conversation
              </Link>
              <a
                href="https://wa.me/918169315080?text=Hi%2C%20I%20have%20a%20running%20business%20and%20would%20like%20to%20know%20more%20about%20TAL%20Consulting."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-widest transition-colors cursor-pointer"
                style={{ padding: "14px 32px", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: "var(--radius-btn)" }}
              >
                <WAIcon />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right — hub diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="hidden lg:block"
          >
            <HubDiagram />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
