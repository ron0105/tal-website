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
  background: "var(--bg-secondary)",
  border: "1px solid var(--border-color)",
  borderRadius: "0px",
  color: "var(--text-primary)",
  outline: "none",
  width: "100%",
  padding: "12px 16px",
  fontSize: "16px",
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
      className="padding-section"
      style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg)" }}
    >
      <div className="layout-grid">
        <AnimateOnScroll className="mb-12">
          <span className="label-eyebrow block mb-6">Get in touch</span>
          <h2 className="text-section-title text-foreground">
            Tell us about
            <br />
            <span className="text-muted">your problem.</span>
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
              style={{ background: "var(--bg-lift)", borderRadius: "0px" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3
              className="font-black tracking-tight mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Received.
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
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
                  <label htmlFor="name" className="text-[0.8rem] font-bold" style={{ color: "var(--text-primary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
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
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--text-primary)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[0.8rem] font-bold" style={{ color: "var(--text-primary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
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
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--text-primary)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                  />
                </div>
              </div>

              {/* Interest */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[0.8rem] font-bold" style={{ color: "var(--text-primary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
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
                        border: interest === opt.id ? "1px solid var(--text-primary)" : "1px solid var(--border-color)",
                        borderRadius: "0px",
                        background: interest === opt.id ? "var(--bg-lift)" : "var(--bg)",
                      }}
                    >
                      <div
                        className="w-4 h-4 flex items-center justify-center flex-shrink-0"
                        style={{
                          border: interest === opt.id ? "none" : "1.5px solid var(--border-color)",
                          background: interest === opt.id ? "var(--text-primary)" : "transparent",
                          borderRadius: "50%",
                        }}
                      >
                        {interest === opt.id && (
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--bg)" }} />
                        )}
                      </div>
                      <span className="text-xs font-semibold" style={{ color: interest === opt.id ? "var(--text-primary)" : "var(--text-body)" }}>
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stage */}
              <div className="flex flex-col gap-2">
                <label htmlFor="stage" className="text-[0.8rem] font-bold" style={{ color: "var(--text-primary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Where are you right now?
                </label>
                <select
                  id="stage"
                  required
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer", color: stage ? "var(--text-primary)" : "var(--text-body)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--text-primary)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                >
                  <option value="" disabled style={{ color: "var(--text-muted)" }}>Select your current stage</option>
                  {stages.map((s) => (
                    <option key={s} value={s} style={{ background: "var(--bg)", color: "var(--text-primary)" }}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Problem */}
              <div className="flex flex-col gap-2">
                <label htmlFor="problem" className="text-[0.8rem] font-bold" style={{ color: "var(--text-primary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
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
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--text-primary)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full mt-4 flex items-center justify-center gap-2.5"
              >
                Submit — we&apos;ll respond within 48 hours
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-sm" style={{ color: "var(--text-body)" }}>
                No spam. No automated replies. A real person reads every submission.
              </p>
            </form>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
