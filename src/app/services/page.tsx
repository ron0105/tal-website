import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import ServiceCards from "@/components/services/ServiceCards";
import { SITE_URL } from "@/lib/site";

// Services hub (SEO plan section 4). Buyer words live here; /work stays the lab page.
// Copy: RON-HQ/01-tal/tal/brand/Services page - copy (draft).md. No prices until Rohan says so.
export const metadata: Metadata = {
  title: { absolute: "Services · Websites, enquiry follow-up and AI assistants | The Adda Labs (TAL)" },
  description:
    "We help businesses that grow on enquiries turn more of them into customers, using a website people can find, regular posts, and AI follow-ups that reply for you. Based in Mumbai.",
};

const steps = [
  { title: "We listen", d: "M4 5.5h16v10.5H10l-6 4.5zM8.5 9.5h7M8.5 12.5h4" },
  { title: "We map", d: "M4 6.5l5-2 6 2 5-2v13l-5 2-6-2-5 2zM9 4.5v13M15 6.5v13" },
  { title: "We build", d: "M3.5 14h7v6h-7zM13.5 14h7v6h-7zM8.5 4h7v6h-7z" },
  { title: "You grow", d: "M4 20h16M6.5 20v-5M12 20v-9M17.5 20V5" },
];

const faqs = [
  {
    q: "How much does a website cost for a clinic in Mumbai?",
    a: "It depends on pages, booking and WhatsApp. You get a fixed quote after a short call, and pay in parts.",
  },
  {
    q: "How do I reply to WhatsApp enquiries automatically?",
    a: "Connect the WhatsApp Business API to a follow-up flow. Each enquiry gets a reply in seconds and a few follow-ups.",
  },
  {
    q: "How long does a business website take?",
    a: "Usually 4 to 6 weeks, from first call to launch.",
  },
  {
    q: "Can AI answer my customer enquiries?",
    a: "Yes, the common ones: timings, location, booking. Anything personal goes to your team.",
  },
  {
    q: "Do you work outside Mumbai?",
    a: "Yes. We're based in Mumbai and work across India and abroad, online.",
  },
];

// FAQPage lets Google and AI answer tools lift these answers as-is
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}/services`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <section
        className="bg-background text-left sm:text-center"
        style={{ paddingTop: "clamp(9rem, 16vh, 12rem)", paddingBottom: "clamp(2.5rem, 6vh, 4rem)" }}
      >
        <div className="layout-grid px-6 md:px-10">
          <div className="flex items-center gap-4 mb-8 sm:justify-center">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} aria-hidden="true" />
            <span className="label-eyebrow text-accent">Services</span>
          </div>
          <h1 className="font-poppins mb-6 text-balance sm:mx-auto" style={{ maxWidth: "40rem" }}>
            More of your enquiries, turned into customers
          </h1>
          <p className="text-lg leading-relaxed text-body sm:mx-auto mb-10" style={{ maxWidth: "34rem" }}>
            A website people find. Replies that go out on their own.
          </p>
          <Link href="/call" className="btn-primary btn-lg">
            Book a call
          </Link>
        </div>
      </section>

      <section
        aria-label="Services"
        className="px-6 md:px-10"
        style={{ background: "var(--bg-secondary)", paddingTop: "clamp(3rem, 7vh, 5rem)", paddingBottom: "clamp(3rem, 7vh, 5rem)" }}
      >
        <div className="layout-grid" style={{ maxWidth: "72rem" }}>
          <h2 className="sr-only">Services</h2>
          <ServiceCards />
        </div>
      </section>

      <section aria-labelledby="services-steps-heading" className="bg-background px-6 md:px-10 py-16">
        <AnimateOnScroll className="layout-grid" >
          <h2 id="services-steps-heading" className="mb-10 text-center text-foreground">
            How it works
          </h2>
          <ol className="mx-auto grid grid-cols-2 gap-8 sm:grid-cols-4" style={{ maxWidth: "48rem" }}>
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col items-center gap-3 text-center">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "var(--bg)", boxShadow: "inset 0 0 0 1.5px var(--brand)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </span>
                <span className="section-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-semibold text-foreground">{s.title}</span>
              </li>
            ))}
          </ol>
        </AnimateOnScroll>
      </section>

      <section
        aria-labelledby="services-faq-heading"
        className="px-6 md:px-10 py-16"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="layout-grid" style={{ maxWidth: "44rem" }}>
          <h2 id="services-faq-heading" className="mb-8 text-center text-foreground">
            Questions people ask
          </h2>
          <div className="flex flex-col">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b" style={{ borderColor: "var(--border-color)" }}>
                <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className="shrink-0 transition-transform duration-200 group-open:rotate-45"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="pb-5 text-base leading-relaxed text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="services-cta-heading" className="padding-section text-center bg-background">
        <AnimateOnScroll className="layout-grid">
          <h2 id="services-cta-heading" className="mb-10 text-foreground text-balance">
            Let&rsquo;s look at your enquiries together
          </h2>
          <Link href="/call" className="btn-primary btn-lg">
            Book a call
          </Link>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
