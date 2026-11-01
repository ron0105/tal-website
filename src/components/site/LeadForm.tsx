"use client";

import { useEffect, useRef, useState } from "react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { indianMobile, PHONE_ERROR } from "@/lib/phone";
import { getUtm, utmLine } from "@/lib/utm";
import { track } from "@/lib/track";

type Field = "name" | "business" | "city" | "phone" | "link";

const FIELDS: { id: Field; label: string; type: string; auto: string; optional?: boolean; hint?: string }[] = [
  { id: "name", label: "Your name", type: "text", auto: "name" },
  { id: "business", label: "Business name", type: "text", auto: "organization" },
  { id: "city", label: "City", type: "text", auto: "address-level2" },
  { id: "phone", label: "WhatsApp number", type: "tel", auto: "tel", hint: "We send your report here." },
  { id: "link", label: "Website or Google listing link", type: "text", auto: "url", optional: true },
];

/**
 * The Free Business Check form (spec 5.7). Sector pages pass `sector`, so every version posts
 * to the same place with a sector field. Labels are real labels, errors are inline, a hidden
 * honeypot catches bots (no captcha), and the visit's UTM source rides along.
 */
export default function LeadForm({ sector, button = "Get My Free Check", whatsapp }: { sector?: string; button?: string; whatsapp?: string }) {
  const startedAt = useRef(0);
  // When the form first rendered in the browser; the API drops anything filled in faster than a person could
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const [values, setValues] = useState<Record<Field, string>>({ name: "", business: "", city: "", phone: "", link: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const honeypot = useRef<HTMLInputElement>(null);

  const validate = () => {
    const e: Partial<Record<Field, string>> = {};
    if (values.name.trim().length < 2) e.name = "Please add your name";
    if (values.business.trim().length < 2) e.business = "Please add your business name";
    if (values.city.trim().length < 2) e.city = "Please add your city";
    if (!indianMobile(values.phone)) e.phone = PHONE_ERROR;
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setState("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: "free-check", ...values, sector, website: honeypot.current?.value, startedAt: startedAt.current, utm: utmLine(getUtm()) }),
      });
      const out = (await res.json()) as { ok?: boolean; saved?: boolean };
      if (!out.ok || !out.saved) throw new Error("not saved");
      track("form_free_check_submit", sector ? { sector } : {});
      setState("done");
    } catch {
      setState("failed");
    }
  };

  if (state === "done") {
    return (
      <div className="card-hover p-6 md:p-8" style={{ background: "var(--bg)" }} role="status">
        <p className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
          Thanks, {values.name.split(" ")[0]}. Your check is on its way.
        </p>
        <p className="mt-3" style={{ color: "var(--text-body)" }}>
          {"We'll check your Google listing, website and WhatsApp replies, and send the report to your WhatsApp. Want to talk sooner?"}
        </p>
        <WhatsAppButton text={whatsapp} className="btn-ghost mt-6" />
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="card-hover p-6 md:p-8 grid gap-5" style={{ background: "var(--bg)" }}>
      {FIELDS.map((f) => (
        <div key={f.id}>
          <label htmlFor={`lf-${f.id}`} className="block text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
            {f.label}
            {f.optional && <span style={{ color: "var(--text-muted)", fontWeight: 400 }}> (optional)</span>}
          </label>
          <input
            id={`lf-${f.id}`}
            name={f.id}
            type={f.type}
            autoComplete={f.auto}
            inputMode={f.id === "phone" ? "tel" : undefined}
            value={values[f.id]}
            onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
            aria-invalid={!!errors[f.id]}
            aria-describedby={errors[f.id] ? `lf-${f.id}-err` : f.hint ? `lf-${f.id}-hint` : undefined}
            className="w-full min-h-[48px] px-4 rounded-lg text-base outline-none"
            style={{ background: "#fff", border: `1px solid ${errors[f.id] ? "#B42318" : "var(--border-strong)"}`, color: "var(--text-primary)" }}
          />
          {errors[f.id] ? (
            <p id={`lf-${f.id}-err`} className="text-sm mt-2" style={{ color: "#B42318" }}>
              {errors[f.id]}
            </p>
          ) : (
            f.hint && (
              <p id={`lf-${f.id}-hint`} className="source-line mt-2">
                {f.hint}
              </p>
            )
          )}
        </div>
      ))}
      {/* Honeypot: hidden from people and screen readers, filled only by bots */}
      <div aria-hidden="true" className="absolute -left-[9999px]" style={{ width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Leave this empty
          <input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" className="btn-primary btn-lg" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : button}
      </button>
      {state === "failed" && (
        <p className="text-sm" role="alert" style={{ color: "#B42318" }}>
          {"That didn't go through. Please send it to us on WhatsApp instead. "}
          <WhatsAppButton text={whatsapp} className="link-arrow" />
        </p>
      )}
    </form>
  );
}
