"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeV-vC7Y2Ze5irz8_13z9KhsyfbxrZCslY4ryQbgc4BtSW8Og/viewform";

const WHO_MEETS = [
  { who: "Business owners", meets: "Other owners, and freelancers who can take work off your plate" },
  { who: "Consultants", meets: "Business owners looking for someone who has done it before" },
  { who: "Freelancers", meets: "Other freelancers to team up with, and owners who need your skill" },
];

export default function EventsHero() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      style={{ padding: "clamp(9rem, 18vh, 13rem) 0 clamp(4rem, 10vh, 6rem)" }}
    >
      {/* Gradient blob, matches HomeLabHero */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, var(--accent), transparent 65%)",
          }}
        />
      </div>

      <div className="layout-grid px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-6 h-px" style={{ background: "var(--accent)" }} aria-hidden="true" />
          <span className="label-eyebrow">Events · Mumbai</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
          className="font-poppins mb-6"
          style={{ color: "var(--text-primary)", maxWidth: "860px" }}
        >
          Evenings built around who you want to meet.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="text-lg leading-relaxed text-body mb-10"
          style={{ maxWidth: "34rem" }}
        >
          We&apos;re bringing business owners, consultants and freelancers together. Tell us who you want to meet and what would help, and we&apos;ll shape the first evening around your answers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
        >
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
            Tell us what you&apos;d come to →
          </a>
          <p className="text-sm mt-6" style={{ color: "var(--text-muted)", maxWidth: "34rem" }}>
            About 4 minutes. Leave your WhatsApp if you&apos;d like a spot, and we&apos;ll only use it for event details.{" "}
            <Link href="/privacy" className="underline underline-offset-4" style={{ color: "var(--brand)" }}>
              How we handle your information
            </Link>
            .
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid gap-6 md:grid-cols-3 mt-20"
        >
          {WHO_MEETS.map(({ who, meets }) => (
            <li
              key={who}
              className="p-6 rounded-xl"
              style={{ border: "1px solid var(--border-subtle)" }}
            >
              <p className="font-poppins text-lg mb-2" style={{ color: "var(--text-primary)" }}>
                {who}
              </p>
              <p className="text-sm leading-relaxed text-body">{meets}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
