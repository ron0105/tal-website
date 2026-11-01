import type { Metadata } from "next";
import CallFlow from "@/components/call/CallFlow";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { WordReveal, HeroFollow } from "@/components/motion/WordReveal";
import { CALL_PAGE as C } from "@/content/call";

// Shared by hand as well as linked from the nav; kept out of search as before
export const metadata: Metadata = {
  title: C.meta.title,
  description: C.meta.description,
  robots: { index: false, follow: false },
};

// Rebuild master prompt section 5.9: H1, the three steps of the call, then the existing flow
// (its last button reads Book My Call), Chat on WhatsApp, and the reply-time line.
export default function CallPage() {
  return (
    <div className="bg-background" style={{ padding: "clamp(8rem, 14vh, 10rem) 0 clamp(5rem, 10vh, 7rem)" }}>
      <div className="wrap" style={{ maxWidth: 816 }}>
        <WordReveal text={C.h1} className="mb-5" style={{ fontSize: "clamp(2.25rem, 5vw, 3.4rem)" }} />
        <HeroFollow after={C.h1} step={1}>
          <p className="body-copy mb-10">{C.sub}</p>
        </HeroFollow>
        <HeroFollow after={C.h1} step={2}>
          <p className="label-eyebrow mb-4">{C.stepsTitle}</p>
          <ol className="grid gap-3 mb-14 sm:grid-cols-3">
            {C.steps.map((s, i) => (
              <li key={s} className="card-hover p-5" style={{ background: "var(--bg)" }}>
                <p className="stat-label">0{i + 1}</p>
                <p className="mt-2 font-semibold" style={{ color: "var(--text-primary)" }}>
                  {s}
                </p>
              </li>
            ))}
          </ol>
        </HeroFollow>
        <CallFlow />
        <div className="mt-10 pt-8 flex flex-wrap items-center gap-4" style={{ borderTop: "1px solid var(--hairline)" }}>
          <WhatsAppButton text={C.whatsapp} />
        </div>
      </div>
    </div>
  );
}
