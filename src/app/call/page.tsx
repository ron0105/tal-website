import type { Metadata } from "next";
import CallFlow from "@/components/call/CallFlow";

// The one link for anyone who wants to talk to TAL; sent by hand, so it stays out of search and the nav
export const metadata: Metadata = {
  title: "Book a call",
  description: "A few quick questions, then the right next step with TAL: strategy, online presence and enquiries.",
  robots: { index: false, follow: false },
};

export default function CallPage() {
  return (
    <div className="bg-background" style={{ padding: "clamp(8rem, 14vh, 10rem) 1.5rem clamp(5rem, 10vh, 7rem)" }}>
      <div className="mx-auto w-full" style={{ maxWidth: 720 }}>
        <p className="label-eyebrow mb-5" style={{ color: "var(--accent)" }}>
          Talk to TAL
        </p>
        <h1 className="mb-5" style={{ color: "var(--text-primary)", fontSize: "clamp(2.25rem, 5vw, 3.4rem)" }}>
          Let&apos;s find your next step to grow.
        </h1>
        <p className="text-lg mb-14" style={{ color: "var(--text-body)" }}>
          A few quick questions, about 2 minutes. Then you&apos;ll see your next step.
        </p>
        <CallFlow />
      </div>
    </div>
  );
}
