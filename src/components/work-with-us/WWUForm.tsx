"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { IntakeAbstractVisual } from "@/components/visuals";



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
  const [form, setForm] = useState({ name: "", workingOn: "", helpWith: "" });

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
        <div className="flex flex-col lg:flex-row gap-16 mb-24 items-start">
          <AnimateOnScroll className="flex-1">
            <span className="label-eyebrow block mb-8">System Initiation</span>
            <h2 className="text-section-title">
              Tell us about
              <br />
              <span className="text-muted">your problem.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="w-full lg:w-[320px] shrink-0">
            <div className="aspect-[4/3] bg-bg-secondary border border-border-subtle p-6 flex flex-col justify-center items-center text-center">
              <IntakeAbstractVisual />
            </div>
          </AnimateOnScroll>
        </div>

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
              {/* Name */}
              <div className="flex flex-col gap-4">
                <span className="label-eyebrow !text-muted">[ 01 ] IDENTIFIER</span>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-transparent border-b border-border-subtle py-4 text-xl md:text-2xl font-black italic tracking-tight focus:border-text-primary outline-none transition-colors"
                />
              </div>

              {/* What are you working on */}
              <div className="flex flex-col gap-4">
                <span className="label-eyebrow !text-muted">[ 02 ] CURRENT STATE</span>
                <input
                  id="workingOn"
                  type="text"
                  placeholder="What are you working on? (1–2 lines)"
                  required
                  value={form.workingOn}
                  onChange={(e) => setForm({ ...form, workingOn: e.target.value })}
                  className="bg-transparent border-b border-border-subtle py-4 text-xl md:text-2xl font-black italic tracking-tight focus:border-text-primary outline-none transition-colors"
                />
              </div>

              {/* What do you need help with */}
              <div className="flex flex-col gap-4">
                <span className="label-eyebrow !text-muted">[ 03 ] REQUEST</span>
                <textarea
                  id="helpWith"
                  rows={4}
                  placeholder="What do you need help with?"
                  required
                  value={form.helpWith}
                  onChange={(e) => setForm({ ...form, helpWith: e.target.value })}
                  className="bg-transparent border border-border-subtle p-6 text-lg font-medium resize-y focus:border-text-primary outline-none transition-colors"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="btn-primary px-12 py-6 text-sm"
                >
                  Start the conversation
                </button>
              </div>
            </form>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
