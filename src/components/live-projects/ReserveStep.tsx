"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { DEPOSIT_URL, UPI_ID, UPI_NUMBER, depositLabel, paymentRef, upiLink } from "@/lib/live-projects";

// Step 2 after a seat request: pay the reservation fee by UPI. On a phone, one tap opens the
// student's UPI app with the amount and reference filled in; on a laptop, they scan the QR.
// There's no gateway, so "I've paid" records the UPI transaction ID for the founder to match.
// With no UPI ID set, it falls back to a payment link on WhatsApp (or DEPOSIT_URL if set).

type Post = (body: Record<string, unknown>) => Promise<Response>;

export default function ReserveStep({ session, phone, post }: { session: string; phone: string; post: Post }) {
  const [stage, setStage] = useState<"offer" | "pay" | "sending" | "paid" | "asked">("offer");
  const [qr, setQr] = useState("");
  const [utr, setUtr] = useState("");
  const [utrError, setUtrError] = useState("");
  const [copied, setCopied] = useState(false);
  const ref = paymentRef(session);
  const link = upiLink(ref);

  useEffect(() => {
    if (stage !== "pay" || !link) return;
    QRCode.toDataURL(link, { margin: 1, width: 220, color: { dark: "#14201E", light: "#FFFFFF" } })
      .then(setQr)
      .catch(() => setQr(""));
  }, [stage, link]);

  async function start() {
    if (UPI_ID) {
      setStage("pay");
      post({ stage: "deposit" }).catch(() => {});
      // On a phone, go straight into the UPI app with the amount filled in: one tap to pay.
      // Laptops have no UPI app, so they stay on the page and scan the QR.
      if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = link;
      }
      return;
    }
    setStage("sending");
    const tab = DEPOSIT_URL ? window.open(DEPOSIT_URL, "_blank", "noopener") : null;
    await post({ stage: "deposit" }).catch(() => {});
    setStage("asked");
    if (DEPOSIT_URL && !tab) window.location.href = DEPOSIT_URL;
  }

  async function confirmPaid() {
    const clean = utr.replace(/\s/g, "");
    if (clean && !/^\d{12}$/.test(clean)) {
      setUtrError("A UPI transaction ID is 12 digits. You can also leave it blank.");
      return;
    }
    setUtrError("");
    setStage("sending");
    await post({ stage: "paid", utr: clean, ref }).catch(() => {});
    setStage("paid");
  }

  const [copiedNumber, setCopiedNumber] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(UPI_ID).then(() => setCopied(true)).catch(() => {});
  };
  const copyNumber = () => {
    navigator.clipboard?.writeText(UPI_NUMBER).then(() => setCopiedNumber(true)).catch(() => {});
  };

  return (
    <div className="p-6 mb-6" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-card)" }}>
      <p className="label-eyebrow mb-3" style={{ color: "var(--accent)" }}>Step 2 · Reserve your seat</p>

      {stage === "offer" && (
        <>
          <p className="body-copy mb-5">
            A reservation fee of {depositLabel()} secures your seat in round 1. It is adjusted against your
            programme fee and is fully refundable until the round begins.
          </p>
          <button type="button" className="btn-primary" style={{ padding: "13px 28px" }} onClick={start}>
            Reserve my seat · {depositLabel()} →
          </button>
        </>
      )}

      {(stage === "pay" || (stage === "sending" && UPI_ID)) && (
        <div className="flex flex-col gap-5">
          <p className="body-copy">
            Pay {depositLabel()} by UPI. The amount and your reference, <strong>{ref}</strong>, are filled in for you.
          </p>

          {/* Phones: one tap opens GPay, PhonePe, Paytm or any UPI app */}
          {/* Wrapped, because .btn-primary sets its own display and would beat md:hidden */}
          <div className="md:hidden">
            <a href={link} className="btn-primary w-full justify-center" style={{ padding: "14px 28px" }}>
              Pay {depositLabel()} with UPI →
            </a>
          </div>

          {/* Laptops: scan with any UPI app */}
          <div className="hidden md:flex items-center gap-6">
            {qr ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={qr} alt={`UPI QR code to pay ${depositLabel()}`} width={160} height={160} style={{ borderRadius: 6, border: "1px solid var(--border-color)" }} />
            ) : (
              <div style={{ width: 160, height: 160, background: "#fff", border: "1px solid var(--border-color)", borderRadius: 6 }} />
            )}
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
              Scan with GPay, PhonePe, Paytm or any UPI app.
            </p>
          </div>

          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            UPI ID: <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{UPI_ID}</span>{" "}
            <button type="button" onClick={copy} className="underline underline-offset-4 ml-1" style={{ color: "var(--brand)" }}>
              {copied ? "Copied" : "Copy"}
            </button>
          </p>
          {UPI_NUMBER && (
            <p className="text-sm -mt-3" style={{ color: "var(--text-muted)" }}>
              Or pay to UPI number:{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{UPI_NUMBER}</span>{" "}
              <button type="button" onClick={copyNumber} className="underline underline-offset-4 ml-1" style={{ color: "var(--brand)" }}>
                {copiedNumber ? "Copied" : "Copy"}
              </button>
              <span className="block mt-1">Add {ref} in the note so we can match your payment.</span>
            </p>
          )}

          <div className="flex flex-col gap-2 pt-5" style={{ borderTop: "1px solid var(--border-color)" }}>
            <label htmlFor="lp-utr" className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              Paid? Add your UPI transaction ID <span className="font-normal" style={{ color: "var(--text-muted)" }}>optional, 12 digits</span>
            </label>
            <input
              id="lp-utr"
              inputMode="numeric"
              className="w-full px-4 py-3 text-base outline-none"
              style={{ background: "#fff", border: "1px solid var(--border-color)", color: "var(--text-primary)", borderRadius: "var(--radius-btn)" }}
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
            />
            {utrError && <p role="alert" className="text-xs font-semibold" style={{ color: "var(--accent-hover)" }}>{utrError}</p>}
            <div>
              <button type="button" className="btn-primary mt-2" style={{ padding: "13px 28px" }} onClick={confirmPaid} disabled={stage === "sending"}>
                {stage === "sending" ? "One moment…" : "I've paid →"}
              </button>
            </div>
          </div>
        </div>
      )}

      {stage === "paid" && (
        <p className="body-copy">
          Thank you. We match your payment to <strong>{ref}</strong> and confirm your seat on WhatsApp within one
          working day.
        </p>
      )}

      {stage === "sending" && !UPI_ID && <p className="body-copy">One moment…</p>}

      {stage === "asked" && (
        <p className="body-copy">
          {DEPOSIT_URL
            ? "Your secure payment page is open in a new tab. Your seat is reserved once the payment is complete."
            : `Thank you. Your secure payment link will be sent on WhatsApp to ${phone} within one working day.`}
        </p>
      )}

    </div>
  );
}
