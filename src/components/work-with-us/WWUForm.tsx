"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const stages = [
  "I have an idea, haven't built anything",
  "I'm building / have an early product",
  "I have users but no reliable revenue",
  "I'm generating revenue and want to grow",
  "I'm exploring whether to pivot or stop",
];

const interests = [
  { id: "vl", label: "Venture Lab (validate my idea)" },
  { id: "talvi", label: "TAL VI (grow my business)" },
  { id: "both", label: "Not sure — help me figure it out" },
  { id: "cobuild", label: "Co-build (equity partnership)" },
];

const inputStyle: React.CSSProperties = {
  background: "#0A0A0A",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "4px",
  color: "#F0F0F0",
  outline: "none",
  width: "100%",
  padding: "12px 16px",
  fontSize: "14px",
  transition: "border-color 0.2s",
};

export default function WWUForm() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("");
  const [stage, setStage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", problem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-12">
          <span className="label-eyebrow block mb-6">Get in touch</span>
          <h2 className="text-section-title text-white">
            Tell us about
            <br />
            <span style={{ color: "#2a2a2a" }}>your problem.</span>
          </h2>
        </AnimateOnScroll>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl"
          >
            <div
              className="w-10 h-10 flex items-center justify-center mb-6"
              style={{ background: "rgba(34,197,94,0.08)", borderRadius: "4px" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3
              className="font-black tracking-tight mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#fff", letterSpacing: "-0.03em" }}
            >
              Received.
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "#999" }}>
              We read every submission personally. If the problem is worth
              exploring, you&apos;ll hear from us within 48 hours to schedule a
              short call.
            </p>
          </motion.div>
        ) : (
          <AnimateOnScroll>
            <form onSubmit={handleSubmit} className="max-w-2xl flex flex-col gap-6">
              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold" style={{ color: "#555", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold" style={{ color: "#555", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@domain.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
              </div>

              {/* Interest */}
              <div className="flex flex-col gap-2.5">
                <label className="text-xs font-semibold" style={{ color: "#555", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  What are you looking for?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setInterest(opt.id)}
                      className="flex items-center gap-3 p-3.5 text-left cursor-pointer transition-all duration-200"
                      style={{
                        border: interest === opt.id ? "1px solid rgba(37,99,235,0.3)" : "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "4px",
                        background: interest === opt.id ? "rgba(37,99,235,0.06)" : "#0A0A0A",
                      }}
                    >
                      <div
                        className="w-4 h-4 flex items-center justify-center flex-shrink-0"
                        style={{
                          border: interest === opt.id ? "none" : "1.5px solid rgba(255,255,255,0.12)",
                          background: interest === opt.id ? "#2563EB" : "transparent",
                          borderRadius: "50%",
                        }}
                      >
                        {interest === opt.id && (
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#fff" }} />
                        )}
                      </div>
                      <span className="text-xs font-medium" style={{ color: interest === opt.id ? "#E0E0E0" : "#888" }}>
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stage */}
              <div className="flex flex-col gap-2">
                <label htmlFor="stage" className="text-xs font-semibold" style={{ color: "#555", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Where are you right now?
                </label>
                <select
                  id="stage"
                  required
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer", color: stage ? "#F0F0F0" : "#555" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <option value="" disabled style={{ color: "#555" }}>Select your current stage</option>
                  {stages.map((s) => (
                    <option key={s} value={s} style={{ background: "#0A0A0A", color: "#F0F0F0" }}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Problem */}
              <div className="flex flex-col gap-2">
                <label htmlFor="problem" className="text-xs font-semibold" style={{ color: "#555", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Describe the problem you&apos;re trying to solve
                </label>
                <textarea
                  id="problem"
                  rows={5}
                  required
                  placeholder="What problem are you solving? Who has it? What do you currently know — and what are you not sure about?"
                  value={form.problem}
                  onChange={(e) => setForm({ ...form, problem: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2.5"
              >
                Submit — we&apos;ll respond within 48 hours
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-xs" style={{ color: "#444" }}>
                No spam. No automated replies. A real person reads every submission.
              </p>
            </form>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
