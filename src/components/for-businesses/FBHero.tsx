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

const outcomes = ["Get Found. Get Trusted.", "Show Up. Consistently.", "Let It Run Itself."];

/* Decorative mock: what "being found" looks like — search card + instant reply */
function FoundVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease, delay: 0.3 }}
      className="relative w-full mx-auto"
      style={{ maxWidth: "460px" }}
      aria-hidden="true"
    >
      {/* Search result card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 p-6"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border-color)",
          borderRadius: "14px",
          boxShadow: "0 24px 60px rgba(15,23,42,0.10)",
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
          <div className="h-2.5 flex-1 rounded-full" style={{ background: "var(--bg-lift)" }} />
        </div>
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 shrink-0 flex items-center justify-center font-black text-lg rounded-lg"
            style={{ background: "var(--navy)", color: "#fff", border: "2px solid var(--accent)" }}
          >
            B
          </div>
          <div className="flex-1">
            <div className="h-3 w-2/3 rounded-full mb-2" style={{ background: "var(--text-primary)", opacity: 0.85 }} />
            <div className="flex items-center gap-1.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--accent)">
                  <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
                </svg>
              ))}
              <div className="h-2 w-12 rounded-full ml-1" style={{ background: "var(--bg-lift)" }} />
            </div>
            <div className="h-2 w-full rounded-full mb-1.5" style={{ background: "var(--bg-lift)" }} />
            <div className="h-2 w-4/5 rounded-full" style={{ background: "var(--bg-lift)" }} />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full" style={{ background: "rgba(202,138,4,0.1)", color: "var(--accent-hover)" }}>
            Website
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full" style={{ background: "rgba(202,138,4,0.1)", color: "var(--accent-hover)" }}>
            Directions
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full" style={{ background: "rgba(202,138,4,0.1)", color: "var(--accent-hover)" }}>
            Call
          </span>
        </div>
      </motion.div>

      {/* WhatsApp auto-reply bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease, delay: 1.0 }}
        className="relative z-20 flex items-start gap-3 p-4 -mt-5 ml-8 md:ml-16"
        style={{
          background: "var(--navy)",
          borderRadius: "14px",
          borderBottomLeftRadius: "4px",
          boxShadow: "0 16px 40px rgba(15,23,42,0.18)",
          maxWidth: "330px",
        }}
      >
        <span className="shrink-0 mt-0.5" style={{ color: "#25D366" }}>
          <WAIcon />
        </span>
        <div className="flex-1">
          <div className="h-2.5 w-3/4 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.85)" }} />
          <div className="h-2 w-full rounded-full mb-1.5" style={{ background: "rgba(255,255,255,0.3)" }} />
          <div className="h-2 w-1/2 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
        </div>
        <span className="text-[10px] font-bold shrink-0 self-end" style={{ color: "var(--accent)" }}>✓✓</span>
      </motion.div>
    </motion.div>
  );
}

export default function FBHero() {
  return (
    <section className="bg-background pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="layout-grid px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-center">

          {/* Left — copy (unchanged) */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease }}
              className="label-eyebrow mb-6 block"
              style={{ color: "var(--accent)" }}
            >
              For Businesses
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="font-poppins mb-6"
              style={{
                fontSize: "clamp(2.4rem, 4.8vw, 4rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
                color: "var(--text-primary)",
              }}
            >
              You built something real.
              <br />
              Now let&apos;s make sure{" "}
              <span style={{ color: "var(--accent)" }}>the right people see it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="text-lg mb-9 max-w-lg leading-relaxed"
              style={{ color: "var(--text-body)" }}
            >
              You&apos;re not here for more posts. You&apos;re here because you want customers, trust, and growth — without spending half your week figuring out the internet. That&apos;s exactly what we do.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-4 mb-9"
            >
              <a
                href="https://wa.me/918169315080?text=Hi%2C%20I%20have%20a%20running%20business%20and%20would%20like%20to%20know%20more%20about%20TAL%20Consulting."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 font-bold text-sm uppercase tracking-widest transition-opacity hover:opacity-90 cursor-pointer"
                style={{ padding: "16px 32px", background: "var(--navy)", color: "#fff", borderRadius: "10px" }}
              >
                <WAIcon />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-widest transition-colors cursor-pointer hover:border-accent"
                style={{ padding: "16px 32px", border: "1.5px solid var(--border-color)", color: "var(--text-primary)", borderRadius: "10px" }}
              >
                Start a Conversation
              </Link>
            </motion.div>

            {/* Outcome ticks */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.45 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {outcomes.map((o) => (
                <li key={o} className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {o}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — found-online visual */}
          <div className="hidden lg:block">
            <FoundVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
