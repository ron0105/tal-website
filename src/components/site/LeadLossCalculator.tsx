"use client";

import { useState } from "react";
import Link from "next/link";
import { CALCULATOR as C } from "@/content/tools";
import { track } from "@/lib/track";

/** Indian rupee wording: ₹15,000 · ₹12 lakh · ₹1 crore (spec section 4). */
export function rupees(n: number): string {
  if (n >= 1e7) return `₹${trim(n / 1e7)} crore`;
  if (n >= 1e5) return `₹${trim(n / 1e5)} lakh`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
const trim = (n: number) => (Math.round(n * 10) / 10).toLocaleString("en-IN");

/** Lead Loss Calculator (spec 5.7): a labelled estimate with its formula shown. */
export default function LeadLossCalculator() {
  const [v, setV] = useState({ enquiries: "", replied: "", value: "" });
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const work = (e: React.FormEvent) => {
    e.preventDefault();
    const enquiries = Number(v.enquiries);
    const replied = Number(v.replied);
    const value = Number(v.value.replace(/,/g, ""));
    if (!(enquiries > 0) || !(replied >= 0 && replied <= 100) || !(value > 0)) {
      setError("Please fill all three: enquiries above 0, a reply share from 0 to 100, and a customer value above 0.");
      return;
    }
    setError("");
    const atRisk = enquiries * ((100 - replied) / 100) * value;
    setResult(atRisk);
    track("tool_lead_calculator_complete", { at_risk: Math.round(atRisk) });
  };

  const field = (id: keyof typeof v, label: string, hint?: string) => (
    <div>
      <label htmlFor={`llc-${id}`} className="block text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
        {label}
      </label>
      <input
        id={`llc-${id}`}
        inputMode="numeric"
        value={v[id]}
        onChange={(e) => setV((s) => ({ ...s, [id]: e.target.value.replace(/[^\d,]/g, "") }))}
        placeholder={hint}
        className="w-full min-h-[48px] px-4 rounded-lg text-base outline-none tabular"
        style={{ background: "#fff", border: "1px solid var(--border-strong)", color: "var(--text-primary)" }}
      />
    </div>
  );

  return (
    <div className="card-hover p-6 md:p-8" style={{ background: "var(--bg)" }}>
      <form onSubmit={work} noValidate className="grid gap-5">
        {field("enquiries", C.inputs.enquiries, "e.g. 60")}
        {field("replied", C.inputs.replied, "e.g. 40")}
        {field("value", C.inputs.value, "e.g. 8,000")}
        {error && (
          <p className="text-sm" role="alert" style={{ color: "#B42318" }}>
            {error}
          </p>
        )}
        <button type="submit" className="btn-primary btn-lg">
          {C.button}
        </button>
      </form>
      {result !== null && (
        <div className="mt-8 pt-8" style={{ borderTop: "1px solid var(--hairline)" }} role="status">
          <p className="stat-label">{C.resultLabel}</p>
          <p className="stat-number mt-3">{rupees(result)}</p>
          <p className="source-line mt-4">{C.formula}</p>
          <p className="source-line mt-1">{C.caveat}</p>
          <Link href="/call" className="btn-primary mt-6" data-cta="book-call">
            {C.cta}
          </Link>
        </div>
      )}
    </div>
  );
}
