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
      <div className="layout-grid"        <AnimateOnScroll className="mb-24">
          <span className="label-eyebrow block mb-8">System Initiation</span>
          <h2 className="text-section-title">
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
            className="max-w-xl border border-border-subtle bg-bg-secondary p-12 italic"
          >
            <h3 className="text-display !text-3xl md:!text-4xl mb-6 italic tracking-tighter">
              RECEIVED.
            </h3>
            <p className="body-copy !text-muted mb-8 uppercase font-black tracking-widest text-sm">
              We read every submission personally. If the problem is worth
              exploring, you&apos;ll hear from us within 48 hours.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-xs font-black uppercase tracking-widest underline underline-offset-4"
            >
              Back to form
            </button>
          </motion.div>
        ) : (
          <AnimateOnScroll>
            <form onSubmit={handleSubmit} className="max-w-3xl flex flex-col gap-12">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                  <span className="label-eyebrow !text-muted">[ 01 ] IDENTIFIER</span>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border-b border-border-subtle py-4 text-xl md:text-2xl font-black italic tracking-tight focus:border-text-primary outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="label-eyebrow !text-muted">[ 02 ] CHANNEL</span>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@domain.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-transparent border-b border-border-subtle py-4 text-xl md:text-2xl font-black italic tracking-tight focus:border-text-primary outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Interest */}
              <div className="flex flex-col gap-6">
                <span className="label-eyebrow !text-muted">[ 03 ] INTENT</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interests.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setInterest(opt.id)}
                      className="group flex flex-col justify-between p-6 text-left border border-border-subtle hover:border-text-primary transition-all duration-200"
                      style={{
                        background: interest === opt.id ? "var(--bg-lift)" : "transparent",
                        borderColor: interest === opt.id ? "var(--text-primary)" : "var(--border-subtle)",
                      }}
                    >
                      <span className="text-[10px] font-black tracking-widest text-muted mb-4">
                        {interest === opt.id ? "SELECTED" : "DESELECTED"}
                      </span>
                      <span className="text-sm md:text-base font-black uppercase italic italic-accent tracking-tighter">
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stage */}
              <div className="flex flex-col gap-6">
                <span className="label-eyebrow !text-muted">[ 04 ] STATUS</span>
                <div className="relative">
                  <select
                    id="stage"
                    required
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="w-full bg-transparent border-b border-border-subtle py-4 text-xl md:text-2xl font-black italic tracking-tight focus:border-text-primary outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-background">Current venture stage</option>
                    {stages.map((s) => (
                      <option key={s} value={s} className="bg-background text-sm font-bold">{s}</option>
                    ))}
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none text-muted">↓</div>
                </div>
              </div>

              {/* Problem */}
              <div className="flex flex-col gap-6">
                <span className="label-eyebrow !text-muted">[ 05 ] SPECIFICATION</span>
                <textarea
                  id="problem"
                  rows={4}
                  required
                  placeholder="The real problem you're trying to solve. Be clinical."
                  value={form.problem}
                  onChange={(e) => setForm({ ...form, problem: e.target.value })}
                  className="bg-transparent border border-border-subtle p-8 text-lg font-bold tracking-tight focus:border-text-primary outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
                <button
                  type="submit"
                  className="btn-primary px-16 py-8 w-full md:w-auto text-xl"
                >
                  Submit: Response in 48h
                </button>
                <div className="label-eyebrow !text-muted leading-relaxed max-w-[280px]">
                  No automated replies. A real person reads every submission.
                </div>
              </div>
            </form>
          </AnimateOnScroll>
        )}    )}
      </div>
    </section>
  );
}
