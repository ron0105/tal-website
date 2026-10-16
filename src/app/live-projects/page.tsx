import { Metadata } from "next";
import Link from "next/link";
import TrackFinder from "@/components/live-projects/TrackFinder";
import HeroAsk from "@/components/live-projects/HeroAsk";
import { ByVariant, VariantProvider } from "@/components/live-projects/VariantContext";
import { SEATS_PER_ROUND, SEATS_PER_TRACK, depositLabel } from "@/lib/live-projects";

export const metadata: Metadata = {
  title: "Live Projects for students",
  description:
    "15 days of real projects at a real firm, with the founder's feedback along the way. Leave with portfolio work to show and a certificate that names it.",
  // A demand test: shared by link, kept out of search until it's a running programme
  robots: { index: false, follow: false },
};

const FACTS = [
  { big: "Real businesses", small: "You take on the kind of projects our own team works on, so your portfolio shows real experience." },
  { big: "Founder feedback", small: "Three one-on-one reviews where you learn how a founder judges good work." },
  { big: "A route in", small: "Top performers are invited to interview for a paid internship at TAL." },
];

// The named mechanism, shown right under the hero
const THREE_TWO_ONE = [
  { n: "3", what: "founder reviews", line: "One-on-one on day 4, day 9 and day 11, so you learn what strong work looks like while you build it." },
  { n: "2", what: "real projects", line: "Work on real businesses that you can show and talk about in interviews and placements." },
  { n: "1", what: "certificate", line: "It names the work you did, giving employers proof they can read." },
];

const DAYS = [
  { when: "Day 1", what: "Settle in, meet the founder, get your brief." },
  { when: "Days 2–4", what: "Project one. Review with the founder on day 4." },
  { when: "Days 5–9", what: "Project two. Review with the founder on day 9." },
  { when: "Day 10", what: "Polish both projects and write a short note on each, ready for your portfolio." },
  { when: "Day 11", what: "Final review, and your certificate." },
];

const FAQS = [
  {
    q: "Is this a job or an internship?",
    a: "It is a paid training programme built around real projects. The top performers in each round are invited to interview for a paid internship at TAL. The invitation is to interview, and the internship decision follows the interview.",
  },
  {
    q: "Can I show the work afterwards?",
    a: "Yes. Each project comes as a version you can show at placements and in interviews, with the business's private details removed.",
  },
  {
    q: "Will my college count it?",
    a: "You receive a certificate and a short letter describing your work, which you can share with your college. Credit is decided by your college, so a quick check with them is a good idea.",
  },
  {
    q: "Can I do it remotely?",
    a: "Yes. You can join at our office in CBD Belapur, Navi Mumbai, or remotely. Remote reviews happen on a video call, and the projects are the same.",
  },
  {
    q: "When are the rounds?",
    a: "Each round is 11 working days, Monday to Friday. We'll set the dates around college breaks, using what people on the list tell us.",
  },
  {
    q: "What does the refund guarantee cover?",
    a: `You receive 3 founder reviews, 2 live projects and 1 certificate. Attend the 11 days and hand in your work, and TAL delivers all three, or your full fee comes back. Interview invitations for a paid internship go to the top performers and sit alongside the guarantee.`,
  },
  {
    q: "How and when do I pay?",
    a: (
      <ByVariant
        a={`Payment is by UPI. You will see the fee and how to pay once you qualify for a track. Booking your seat takes ${depositLabel()}, and everyone who is not shortlisted gets that ${depositLabel()} back in full.`}
        b="Payment is by UPI. Applying is free. You will see the fee and how to pay once you qualify for a track, covered by the guarantee above."
      />
    ),
  },
  {
    q: "How many seats are there?",
    a: `${SEATS_PER_ROUND} seats a round, ${SEATS_PER_TRACK} in each of the four tracks. We keep groups small so every piece of work gets the founder's attention.`,
  },
  {
    q: "Who is this for?",
    a: "Anyone with curiosity, a laptop and a wish to grow through feedback. You can start from wherever you are.",
  },
];

export default function LiveProjectsPage() {
  return (
    <VariantProvider>
    <main>
      {/* Hero */}
      <section className="relative bg-background overflow-hidden" style={{ padding: "clamp(10rem, 18vh, 14rem) 1.5rem clamp(4rem, 9vh, 7rem)" }}>
        <div className="layout-grid px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
            <span className="label-eyebrow" style={{ color: "var(--accent)" }}>TAL Live Projects · for students</span>
          </div>
          <h1 className="mb-8" style={{ color: "var(--text-primary)", maxWidth: "860px" }}>
            Do real work at a real firm,{" "}
            <span style={{ color: "var(--accent)" }}>and leave with proof.</span>
          </h1>
          <p className="body-copy mb-12" style={{ maxWidth: "620px" }}>
            Spend 15 days with TAL, on-site in Navi Mumbai or remote. We&apos;re a frugal ideation and venture-building lab,
            working across business, technology and sustainability. You take on real business projects, learn from the founder&apos;s feedback on every piece, and leave
            with two portfolio projects and a certificate that names your work.
          </p>
          <div className="mb-10">
            <HeroAsk />
          </div>
          <div className="mb-16 p-6 md:p-8 max-w-4xl" style={{ background: "#fff", border: "2px solid var(--brand)", borderRadius: "var(--radius-card)" }}>
            <span className="label-eyebrow block mb-3" style={{ color: "var(--brand)" }}>Full refund guarantee</span>
            <p className="font-poppins text-xl md:text-2xl mb-2" style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              You receive 3 founder reviews, 2 live projects and 1 certificate.
            </p>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
              TAL delivers all three, or your full fee comes back.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-px max-w-4xl" style={{ background: "var(--border-color)", border: "1px solid var(--border-color)" }}>
            {FACTS.map((f) => (
              <div key={f.big} className="p-6" style={{ background: "var(--bg)" }}>
                <p className="font-poppins text-2xl mb-2" style={{ color: "var(--brand)", fontWeight: 500 }}>{f.big}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-2-1 */}
      <section className="padding-section" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="layout-grid px-6 md:px-10">
          <span className="label-eyebrow block mb-6">The 3-2-1</span>
          <h2 className="mb-12" style={{ color: "var(--text-primary)", maxWidth: "760px" }}>
            Fifteen days, <span style={{ color: "var(--accent)" }}>three things you keep.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-px" style={{ background: "var(--border-color)", border: "1px solid var(--border-color)" }}>
            {THREE_TWO_ONE.map((x) => (
              <div key={x.n} className="p-8" style={{ background: "var(--bg)" }}>
                <p className="font-poppins mb-2" style={{ color: "var(--accent)", fontSize: "4rem", lineHeight: 1, fontWeight: 500 }}>{x.n}</p>
                <p className="font-poppins text-2xl mb-3" style={{ color: "var(--text-primary)", fontWeight: 500 }}>{x.what}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{x.line}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8" style={{ background: "#fff", border: "1px solid var(--brand)", borderRadius: "var(--radius-card)" }}>
            <span className="label-eyebrow flex-shrink-0" style={{ color: "var(--brand)" }}>Refund guarantee</span>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
              Do the work and you leave with all three. TAL delivers the 3 reviews, the 2 projects and the
              certificate, or your full fee comes back.
            </p>
          </div>
        </div>
      </section>

      {/* Find your track: the demand test */}
      <section id="find-your-track" className="padding-section scroll-mt-20" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="layout-grid px-6 md:px-10 grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20">
          <div>
            <span className="label-eyebrow block mb-6">Find your track</span>
            <h2 className="mb-6" style={{ color: "var(--text-primary)" }}>
              A few quick questions, <span style={{ color: "var(--accent)" }}>then your track.</span>
            </h2>
            <p className="body-copy mb-6">
              Research, Build, Content or Outreach. Answer a few questions and we&apos;ll suggest where you&apos;d do your
              best work. Takes about two minutes.
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {SEATS_PER_ROUND} seats a round, {SEATS_PER_TRACK} per track, so every student gets close feedback on every piece of work.
            </p>
          </div>
          <TrackFinder />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="padding-section" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-secondary)" }}>
        <div className="layout-grid px-6 md:px-10 grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20">
          <div>
            <span className="label-eyebrow block mb-6">How it works</span>
            <h2 className="mb-10" style={{ color: "var(--text-primary)" }}>
              11 working days, <span style={{ color: "var(--accent)" }}>3 reviews with the founder.</span>
            </h2>
            <ol className="flex flex-col">
              {DAYS.map((d) => (
                <li key={d.when} className="grid grid-cols-[7rem_1fr] gap-4 py-4" style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <span className="text-sm font-semibold" style={{ color: "var(--brand)" }}>{d.when}</span>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{d.what}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="self-start p-8" style={{ background: "#fff", border: "1px solid var(--border-color)", borderRadius: "var(--radius-card)" }}>
            <p className="label-eyebrow mb-4">What you keep</p>
            <ul className="flex flex-col gap-3 mb-6">
              {["3 one-on-one founder reviews to learn from", "2 real projects to show in interviews", "1 certificate with proof an employer can read"].map((x) => (
                <li key={x} className="flex gap-3 text-sm" style={{ color: "var(--text-body)" }}>
                  <span style={{ color: "var(--brand)" }} aria-hidden="true">✓</span>{x}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Full refund guarantee:</strong> TAL delivers all
              three, or your full fee comes back.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <ByVariant
                a={`Pay by UPI. ${depositLabel()} books your seat, and it is refunded in full to anyone who is not shortlisted. You will see the full fee once you qualify for a track.`}
                b="Pay by UPI. Applying is free. You will see the fee and how to pay once you qualify for a track."
              />
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="padding-section" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="layout-grid px-6 md:px-10 grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20">
          <div>
            <span className="label-eyebrow block mb-6">Questions</span>
            <h2 style={{ color: "var(--text-primary)" }}>
              Good to know <span style={{ color: "var(--accent)" }}>before you start.</span>
            </h2>
          </div>
          <div className="flex flex-col">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5" style={{ borderBottom: "1px solid var(--border-color)" }}>
                <summary
                  className="flex items-center justify-between gap-6 cursor-pointer list-none text-base font-semibold [&::-webkit-details-marker]:hidden"
                  style={{ color: "var(--text-primary)" }}
                >
                  {f.q}
                  <span className="text-xl leading-none transition-transform duration-200 group-open:rotate-45 flex-shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true">+</span>
                </summary>
                <p className="body-copy mt-4">{f.a}</p>
              </details>
            ))}
            <p className="text-sm mt-8" style={{ color: "var(--text-muted)" }}>
              Interested in a full-time role? See the{" "}
              <Link href="/careers" className="underline underline-offset-4" style={{ color: "var(--brand)" }}>Founder&apos;s Office Cohort</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
    </VariantProvider>
  );
}
