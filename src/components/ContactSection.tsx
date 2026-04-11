"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    problem: "",
    stage: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const stages = [
    "Early idea / hypothesis",
    "Research phase",
    "Ready to pilot",
    "Post-pilot / scaling decision",
    "Co-build opportunity",
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 md:px-10 py-28 md:py-36"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "#0A0A0A",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#2563EB" }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#555", letterSpacing: "0.14em" }}
              >
                Contact
              </span>
            </div>

            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight leading-snug mb-8"
              style={{ color: "#F0F0F0", letterSpacing: "-0.025em" }}
            >
              Bring us a problem
              <br />
              <span style={{ color: "#444" }}>worth solving.</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "#666" }}
            >
              We don&apos;t need a pitch deck. We need a clear problem statement
              and an honest account of what you currently know and what you
              don&apos;t. That is where good work begins.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                  label: "Email",
                  value: "founder@theaddalabs.com",
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Base",
                  value: "Mumbai, India",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(37,99,235,0.08)",
                      borderRadius: "8px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs font-medium mb-0.5"
                      style={{ color: "#444" }}
                    >
                      {item.label}
                    </div>
                    <div className="text-sm" style={{ color: "#999" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col items-start justify-center py-12"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(34,197,94,0.1)",
                    borderRadius: "10px",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold tracking-tight mb-3"
                  style={{ color: "#F0F0F0", letterSpacing: "-0.02em" }}
                >
                  Received.
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#666" }}>
                  We review every submission personally. If the problem is worth
                  exploring, you will hear from us within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "name", label: "Name", placeholder: "Your name", type: "text" },
                    { id: "email", label: "Email", placeholder: "you@domain.com", type: "email" },
                  ].map((field) => (
                    <div key={field.id} className="flex flex-col gap-2">
                      <label
                        htmlFor={field.id}
                        className="text-xs font-semibold"
                        style={{ color: "#555" }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={form[field.id as "name" | "email"]}
                        onChange={(e) =>
                          setForm({ ...form, [field.id]: e.target.value })
                        }
                        className="px-4 py-3 text-sm outline-none transition-all duration-200"
                        style={{
                          background: "#111",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "8px",
                          color: "#F0F0F0",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(37,99,235,0.4)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.08)")
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* Stage */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="stage"
                    className="text-xs font-semibold"
                    style={{ color: "#555" }}
                  >
                    Where are you?
                  </label>
                  <select
                    id="stage"
                    required
                    value={form.stage}
                    onChange={(e) => setForm({ ...form, stage: e.target.value })}
                    className="px-4 py-3 text-sm outline-none transition-all duration-200 cursor-pointer"
                    style={{
                      background: "#111",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      color: form.stage ? "#F0F0F0" : "#444",
                      appearance: "none",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)")
                    }
                  >
                    <option value="" disabled style={{ color: "#444" }}>
                      Select your stage
                    </option>
                    {stages.map((s) => (
                      <option
                        key={s}
                        value={s}
                        style={{ background: "#111", color: "#F0F0F0" }}
                      >
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Problem */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="problem"
                    className="text-xs font-semibold"
                    style={{ color: "#555" }}
                  >
                    Describe the problem
                  </label>
                  <textarea
                    id="problem"
                    rows={5}
                    placeholder="What is the problem you are trying to solve? Who has it? What is your current hypothesis?"
                    required
                    value={form.problem}
                    onChange={(e) => setForm({ ...form, problem: e.target.value })}
                    className="px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "#111",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      color: "#F0F0F0",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2.5 py-3.5 text-sm font-semibold cursor-pointer transition-all duration-200 mt-1"
                  style={{
                    background: "#2563EB",
                    color: "#fff",
                    borderRadius: "8px",
                    border: "none",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "#3B82F6")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "#2563EB")
                  }
                >
                  Submit the problem
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-xs" style={{ color: "#444" }}>
                  We read every submission. No automated filters. No pitch decks
                  required.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
