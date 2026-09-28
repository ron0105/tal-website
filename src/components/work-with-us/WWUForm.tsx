"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export default function WWUForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", workingOn: "", helpWith: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow block mb-8">The form</span>
          <h2>
            Tell us about
            <br />
            <span className="text-muted">your situation.</span>
          </h2>
        </AnimateOnScroll>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl border border-border-subtle p-12"
            style={{ background: "var(--bg-secondary)" }}
          >
            <h3
              className="mb-6"
            >
              Received.
            </h3>
            <p className="body-copy mb-8" style={{ color: "var(--text-muted)" }}>
              We read every submission personally. If there&apos;s a fit, you&apos;ll hear from us within 48 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm font-bold underline underline-offset-4"
              style={{ color: "var(--text-muted)" }}
            >
              Back to form
            </button>
          </motion.div>
        ) : (
          <AnimateOnScroll>
            <form onSubmit={handleSubmit} className="max-w-3xl flex flex-col gap-12">
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="label-eyebrow">Your name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="What should we call you?"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-transparent border-b border-border-subtle py-4 text-xl md:text-2xl font-bold tracking-tight focus:border-text-primary outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="workingOn" className="label-eyebrow">What are you working on?</label>
                <input
                  id="workingOn"
                  type="text"
                  placeholder="Describe your business or idea in 1–2 lines"
                  required
                  value={form.workingOn}
                  onChange={(e) => setForm({ ...form, workingOn: e.target.value })}
                  className="bg-transparent border-b border-border-subtle py-4 text-xl md:text-2xl font-bold tracking-tight focus:border-text-primary outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="helpWith" className="label-eyebrow">What do you need help with?</label>
                <textarea
                  id="helpWith"
                  rows={4}
                  placeholder="Describe the problem or what you want to improve"
                  required
                  value={form.helpWith}
                  onChange={(e) => setForm({ ...form, helpWith: e.target.value })}
                  className="bg-transparent border border-border-subtle p-6 text-lg font-medium resize-y focus:border-text-primary outline-none transition-colors"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button type="submit" className="btn-primary px-12 py-5 text-sm font-bold">
                  Send →
                </button>
              </div>
            </form>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
