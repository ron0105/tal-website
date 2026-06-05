"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const outcomes = [
  {
    tag: "Step One",
    title: "Get found. Get trusted.",
    headline: "When someone searches your business at 11pm, what do they find? If the answer is \"not much\" — this is where we start.",
    body: "We build you a website that works like a 24/7 salesperson. It loads fast, looks sharp on every phone, and says exactly what it needs to so a stranger becomes a customer. Then we make sure you show up right where your customers are looking.",
    bullets: [
      "A website that converts visitors, not just impresses them",
      "Your Google Business Profile set up and optimised",
      "SEO so you rank when it matters",
      "You get all of this — and it credits back if you continue with us",
    ],
  },
  {
    tag: "Step Two",
    title: "Show up. Consistently.",
    headline: "Consistency is the thing most businesses can't pull off. Not because they don't want to — because they're busy running a business.",
    body: "We become your brand's voice online. Every month, fresh content goes out — posts, stories, reels, captions — that sound like you, represent you well, and quietly build an audience that trusts you before they've even met you.",
    bullets: [
      "12–20 posts a month, written and designed — you just approve",
      "Content that tells your story, not just sells your product",
      "Facebook, Instagram, LinkedIn — wherever your customers are",
      "Monthly check-in so we stay aligned with your world",
    ],
  },
  {
    tag: "Step Three",
    title: "Let it run itself.",
    headline: "What if every new enquiry got followed up automatically, even while you were asleep?",
    body: "We wire your business for automation. Lead capture, follow-up messages, WhatsApp replies, booking confirmations — all of it runs in the background so nothing falls through the cracks. You focus on delivery. The system handles the follow-through.",
    bullets: [
      "Automated lead capture and follow-up",
      "WhatsApp sequences that feel human, not robotic",
      "Your funnel set up once, optimised over time",
      "Less time chasing leads. More time closing them",
    ],
  },
];

const beforeItems = [
  "People search you — can't find you",
  "Your feed looks like it hasn't been touched in months",
  "New customers don't know you exist",
  "You're doing this yourself at midnight",
  "Enquiries come in randomly, then stop",
];

const afterItems = [
  "You appear exactly where they're looking",
  "Your brand looks like it means business",
  "Referrals come with a credible page to send them to",
  "It runs while you focus on what you're good at",
  "Your pipeline is predictable, not accidental",
];

const quickCards = [
  {
    benefit: "Your customers can find you.",
    plain: "We build your website, set up your Google profile, and make sure you show up when people search for what you do.",
    features: ["Website design & development", "Google Business Profile", "Local SEO"],
    step: "Step 1",
  },
  {
    benefit: "Your brand stays active — without you touching it.",
    plain: "We write, design, and post content for you every month. You stay consistent online without spending your evenings on it.",
    features: ["12–20 posts/month across your platforms", "Captions, creatives, stories", "Monthly review call"],
    step: "Step 2",
  },
  {
    benefit: "Every lead gets followed up. Automatically.",
    plain: "We set up a system so every enquiry — WhatsApp, form, DM — gets a response and a follow-up. Even when you're heads-down.",
    features: ["Automated WhatsApp sequences", "Lead capture & follow-up flows", "CRM setup"],
    step: "Step 3",
  },
];

export default function FBServices() {
  return (
    <>
      {/* 10-second overview */}
      <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
        <div className="layout-grid px-6 md:px-10">

          <AnimateOnScroll className="mb-14">
            <span className="label-eyebrow mb-4 block text-accent">What we do</span>
            <h2
              className="font-poppins mb-3"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              Three things. Clear outcomes.
            </h2>
            <p className="text-lg text-muted max-w-lg">No jargon. No 47-step playbooks. Here&apos;s exactly what you get.</p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle">
            {quickCards.map((card, i) => (
              <AnimateOnScroll key={card.step} delay={i * 0.1}>
                <div className="bg-background p-8 md:p-10 flex flex-col gap-5 h-full">
                  <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                    {card.step}
                  </p>
                  <h3
                    className="font-poppins font-bold leading-snug"
                    style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}
                  >
                    {card.benefit}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted flex-1">{card.plain}</p>
                  <ul className="flex flex-col gap-2 pt-4 border-t border-border-subtle">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-muted">
                        <span className="shrink-0 font-bold mt-0.5" style={{ color: "var(--accent)" }}>→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* Honest truth */}
      <section className="py-24 md:py-32 bg-bg-secondary border-t border-border-subtle">
        <div className="layout-grid px-6 md:px-10">
          <AnimateOnScroll className="max-w-2xl">
            <span className="label-eyebrow mb-6 block">The honest truth</span>
            <h2
              className="font-poppins mb-6"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.25,
                color: "var(--text-primary)",
              }}
            >
              Most businesses are invisible online. Not because they&apos;re bad — because no one told them what to fix.
            </h2>
            <p className="text-base leading-relaxed text-muted mb-4">
              You could have the best product in your category, the warmest service, the most loyal customers — and still be losing to someone half as good, simply because they show up everywhere and you don&apos;t.
            </p>
            <p className="text-base leading-relaxed text-muted">
              We fix that. Quietly, professionally, and without making you feel like you&apos;re behind. Because you&apos;re not behind — you just haven&apos;t had the right team yet.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What shifts — full-width before/after */}
      <section className="border-t border-border-subtle bg-background">
        <div className="layout-grid px-6 md:px-10 py-6">
          <AnimateOnScroll>
            <p className="text-[11px] font-black uppercase tracking-widest text-muted">What shifts</p>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll delay={0.05}>
          <div className="grid grid-cols-2 gap-px bg-border-subtle border-y border-border-subtle">
            {/* Before */}
            <div className="bg-bg-secondary px-8 md:px-16 py-14 md:py-20">
              <p className="text-[11px] font-black uppercase tracking-widest text-muted mb-10 pb-5 border-b border-border-subtle">Before</p>
              <ul className="flex flex-col gap-6">
                {beforeItems.map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="text-muted opacity-40 shrink-0 text-lg leading-tight">·</span>
                    <span className="text-base md:text-lg text-muted leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="bg-background px-8 md:px-16 py-14 md:py-20">
              <p className="text-[11px] font-black uppercase tracking-widest mb-10 pb-5 border-b border-border-subtle" style={{ color: "var(--accent)" }}>After</p>
              <ul className="flex flex-col gap-6">
                {afterItems.map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="shrink-0 font-black text-lg leading-tight" style={{ color: "var(--accent)" }}>→</span>
                    <span className="text-base md:text-lg font-semibold leading-snug" style={{ color: "var(--text-body)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Three outcomes */}
      <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
        <div className="layout-grid px-6 md:px-10">

          <AnimateOnScroll className="mb-16">
            <span className="label-eyebrow mb-4 block text-accent">What we actually do</span>
            <h2
              className="font-poppins mb-3"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              Three things. Done properly.
            </h2>
            <p className="text-lg text-muted max-w-lg">We don&apos;t spread thin. We go deep in three areas that compound.</p>
          </AnimateOnScroll>

          <div className="flex flex-col divide-y divide-border-subtle border-y border-border-subtle">
            {outcomes.map((o, i) => (
              <AnimateOnScroll key={o.tag} delay={i * 0.08}>
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 py-12">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
                      {o.tag}
                    </p>
                    <h3
                      className="font-poppins"
                      style={{
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.2,
                        color: "var(--text-primary)",
                      }}
                    >
                      {o.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-lg font-medium leading-relaxed mb-4" style={{ color: "var(--text-body)" }}>
                      {o.headline}
                    </p>
                    <p className="text-base leading-relaxed text-muted mb-6">{o.body}</p>
                    <ul className="flex flex-col gap-3">
                      {o.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-muted">
                          <span className="shrink-0 font-bold mt-0.5" style={{ color: "var(--accent)" }}>→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* Flagship */}
      <section className="py-20 border-t border-border-subtle" style={{ background: "#002960" }}>
        <div className="layout-grid px-6 md:px-10">
          <AnimateOnScroll>
            <div className="max-w-2xl">
              <p className="text-[11px] font-black uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                The Complete Story
              </p>
              <h2
                className="font-poppins mb-5"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  color: "#fff",
                }}
              >
                All three, working together.
                <br />
                One team. One direction.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)", maxWidth: "520px" }}>
                The best results come when your website, your content, and your follow-up system all tell the same story. That&apos;s what The Complete Story engagement does — it builds your digital presence as a single, joined-up system. One conversation with us, and everything moves.
              </p>
              <a
                href="https://wa.me/918169315080?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20The%20Complete%20Story%20engagement."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest px-8 py-4 transition-opacity hover:opacity-90"
                style={{ background: "#fff", color: "#002960" }}
              >
                Ask us about this →
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
