import Link from "next/link";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";
import { BOOK_CALL, CAPACITY_LINE, FINAL_CTA, GUARANTEE } from "@/content/common";

/**
 * How every buyer page ends (spec rule 6): Book a Free Call, with Chat on WhatsApp as the
 * second action, on a dark band. It also carries the capacity line and the guarantee, so both
 * are visible on every buyer page. `whatsapp` is that page's pre-filled message.
 */
export default function FinalCTA({ whatsapp, title = FINAL_CTA.title, body = FINAL_CTA.body }: { whatsapp?: string; title?: string; body?: string }) {
  return (
    <section aria-label="Book a free call" className="section canvas-dark">
      <Reveal className="wrap">
        <h2 className="text-balance" style={{ maxWidth: "20ch" }}>
          {title}
        </h2>
        <p className="body-copy measure mt-6">{body}</p>
        <div className="flex flex-wrap gap-3 mt-10">
          <Link href="/call" className="btn-primary btn-lg" data-cta="book-call">
            {BOOK_CALL}
          </Link>
          <WhatsAppButton text={whatsapp} className="btn-ghost btn-lg" />
        </div>
        <div className="mt-8 grid gap-1">
          <p className="source-line">{CAPACITY_LINE}</p>
          <p className="source-line">{GUARANTEE.text}</p>
        </div>
      </Reveal>
    </section>
  );
}
