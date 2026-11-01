import { GUARANTEE } from "@/content/common";

// The guarantee (spec section 5.1 #8): teal-tinted band, centred, and deliberately still.
// No Reveal here: its stillness after the motion above is what makes it feel solid.
export default function GuaranteeBand() {
  return (
    <section aria-label="Our guarantee" className="section" style={{ background: "var(--brand-tint)" }}>
      <div className="wrap text-center">
        <p className="label-eyebrow mb-5">Our guarantee</p>
        <p className="mx-auto text-balance" style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 500, fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", lineHeight: 1.2, maxWidth: "28ch", color: "var(--text-primary)" }}>
          {GUARANTEE.text}
        </p>
        <p className="source-line mt-5">{GUARANTEE.small}</p>
      </div>
    </section>
  );
}
