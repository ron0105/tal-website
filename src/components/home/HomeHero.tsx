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

export default function HomeHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative bg-background overflow-hidden"
      style={{
        paddingTop: "clamp(10rem, 20vh, 16rem)",
        paddingBottom: "clamp(7rem, 14vh, 12rem)",
      }}
    >
      {/* Gradient blob — parallaxes up as you scroll */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-[0.07]"
          style={{ background: "radial-gradient(circle at 60% 40%, var(--accent), transparent 65%)" }}
        />
      </motion.div>

      {/* Decorative corner grid lines */}
      <div className="absolute top-28 right-0 w-px h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--border-subtle), transparent)" }} aria-hidden="true" />
      <div className="absolute top-28 right-16 w-px h-28 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--border-subtle), transparent)", opacity: 0.5 }} aria-hidden="true" />

      <motion.div style={{ y: textY }} className="layout-grid px-6 md:px-10 relative z-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
          <span className="label-eyebrow text-accent">TAL Consulting</span>
        </motion.div>

        {/* Headline — line reveal */}
        <LineReveal
          lines={["We help you build", "something that", "actually works."]}
          delay={0.1}
          stagger={0.12}
          className="font-poppins mb-10"
          lineClassName=""
          as="h1"
        />
        <style>{`
          h1 span.block > span.block {
            font-size: clamp(3rem, 8vw, 6.5rem);
            font-weight: 800;
            letter-spacing: -0.04em;
            line-height: 1.05;
            color: var(--text-primary);
          }
          h1 span.block:last-child > span.block {
            background: linear-gradient(105deg, var(--text-primary) 0%, var(--accent) 75%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}</style>

        {/* Subtext + CTAs side by side on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
          className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-end max-w-4xl"
        >
          <div>
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-body mb-4" style={{ maxWidth: "520px" }}>
              Whether you run a growing business or have an idea ready to test, we bring structure and clarity so you can move with confidence.
            </p>
            <p className="text-base text-muted" style={{ maxWidth: "440px" }}>
              Built from years of working with real businesses and founders. No guesswork.
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <Link href="/for-businesses" className="btn-primary" style={{ padding: "16px 36px", fontSize: "1rem", whiteSpace: "nowrap" }}>
              I run a business →
            </Link>
            <Link href="/think-and-build" className="btn-ghost" style={{ padding: "16px 36px", fontSize: "1rem", whiteSpace: "nowrap" }}>
              I have a new idea →
            </Link>
            <a
              href="https://wa.me/918169315080?text=Hi%2C%20I%20found%20TAL%20Consulting%20and%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <WhatsAppIcon />
              Or message us on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center gap-3 mt-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 relative overflow-hidden"
            style={{ background: "var(--border-subtle)" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2"
              style={{ background: "var(--accent)" }}
              animate={{ y: ["0%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Scroll</span>
        </motion.div>

      </motion.div>
    </section>
  );
}
