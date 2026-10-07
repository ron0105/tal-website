import type { Metadata } from "next";
import CallFlow from "@/components/call/CallFlow";
import { CALL } from "@/lib/call";

// Sent by hand to people who reply yes to an outreach message, so it stays out of search and the nav
export const metadata: Metadata = {
  title: "Book a call",
  description: `A ${CALL.minutes}-minute call with TAL about turning more of your enquiries into customers.`,
  robots: { index: false, follow: false },
};

export default function CallPage() {
  return (
    <div className="bg-background" style={{ padding: "clamp(8rem, 14vh, 10rem) 1.5rem clamp(5rem, 10vh, 7rem)" }}>
      <div className="mx-auto w-full" style={{ maxWidth: 720 }}>
        <p className="label-eyebrow mb-5" style={{ color: "var(--accent)" }}>
          {CALL.minutes}-minute call with TAL
        </p>
        <h1 className="mb-5" style={{ color: "var(--text-primary)", fontSize: "clamp(2.25rem, 5vw, 3.4rem)" }}>
          More customers from the enquiries you already get.
        </h1>
        <p className="text-lg mb-14" style={{ color: "var(--text-body)" }}>
          Three quick steps, about 3 minutes. Then pick a time that suits you.
        </p>
        <CallFlow />
      </div>
    </div>
  );
}
