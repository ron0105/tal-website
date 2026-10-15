import { Metadata } from "next";
import Link from "next/link";
import TrackFinder from "@/components/live-projects/TrackFinder";
import { SEATS_PER_ROUND, depositLabel, feeLabel } from "@/lib/live-projects";

export const metadata: Metadata = {
  title: "Live Projects for students",
  description:
    "15 days of real projects at a real firm, reviewed by the founder. Leave with a portfolio piece and a certificate that names your work.",
  // A demand test: shared by link, kept out of search until it's a running programme
  robots: { index: false, follow: false },
};

const FACTS = [
  { big: "Real businesses", small: "You work on the same kind of projects our team does, not made-up cases." },
  { big: "Founder-reviewed", small: "Three one-on-one reviews with TAL's founder." },
  { big: "A route in", small: "Top performers are invited to interview for a paid internship at TAL." },
];

// The named mechanism, shown right under the hero
const THREE_TWO_ONE = [
  { n: "3", what: "founder reviews", line: "One-on-one, on day 4, day 9 and day 11." },
  { n: "2", what: "real projects", line: "On real businesses, ready to show at placements." },
  { n: "1", what: "certificate", line: "It names the work you did, not just that you attended." },
];

const DAYS = [
  { when: "Day 1", what: "Settle in, meet the founder, get your brief." },
  { when: "Days 2–4", what: "Project one. Review with the founder on day 4." },
  { when: "Days 5–9", what: "Project two. Review with the founder on day 9." },
  { when: "Day 10", what: "Polish both and write a short note on each." },
  { when: "Day 11", what: "Final review, and your certificate." },
];

const FAQS = [
  {
    q: "Is this a job or an internship?",
    a: "It's a paid training programme with real projects, not a job. The top performers in each round are invited to interview for a paid internship at TAL. That's an invitation, not a guarantee.",
  },
  {
    q: "Can I show the work afterwards?",
    a: "Yes. That's the point. You get a version of each project you can show at placements, with the business's private details taken out.",
  },
  {
    q: "Will my college count it?",
    a: "You get a certificate and a short letter describing the work you did. Whether it counts for credit is your college's decision, so please check with them.",
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
    q: "What does \"outcome guaranteed\" cover?",
    a: "Your two projects and your certificate. Show up for the 11 days and hand in both projects, and you leave with all three. If anything is unfinished, the founder works with you one to one until it's done. Internship invitations go to the top performers in each round.",
  },
  {
    q: "How does the reservation fee work?",
    a: `Requesting a seat is free. To secure it, you pay a reservation fee of ${depositLabel()}. It is adjusted against your programme fee and is fully refundable until the round begins.`,
  },
  {
    q: "Do I need experience?",
    a: "No. You need curiosity, a laptop, and the willingness to get feedback on your work.",
  },
];

export default function LiveProjectsPage() {
  return (
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
            Spend 15 days with TAL, on-site in Navi Mumbai or remote. We&apos;re a consulting firm that helps businesses
            turn more of their enquiries into customers. You work on real businesses, the founder reviews every piece, and you leave
            with two portfolio projects and a certificate that names what you did.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a href="#find-your-track" className="btn-primary" style={{ padding: "13px 28px" }}>Find your track →</a>
            <a href="#how-it-works" className="btn-ghost" style={{ padding: "13px 28px" }}>How it works</a>
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
            <span className="label-eyebrow flex-shrink-0" style={{ color: "var(--brand)" }}>Outcome guaranteed</span>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
              Do the work and you leave with both projects and your certificate. If anything is unfinished, the founder
              works with you one to one until it&apos;s done.
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
              6 quick questions, <span style={{ color: "var(--accent)" }}>then your track.</span>
            </h2>
            <p className="body-copy mb-6">
              Research, Build, Growth or Content. Answer a few questions and we&apos;ll suggest where you&apos;d do your
              best work. Takes about two minutes.
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {SEATS_PER_ROUND} seats a round, so every piece of work gets proper feedback.
            </p>
          </div>
          <TrackFinder />
        </div>
      </section>

      {/* How it works + price */}
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
            <p className="label-eyebrow mb-4">The fee</p>
            <p className="font-poppins text-4xl mb-6" style={{ color: "var(--text-primary)", fontWeight: 500 }}>{feeLabel()}</p>
            <ul className="flex flex-col gap-3 mb-6">
              {["3 one-on-one reviews with the founder", "2 real projects you can show", "1 certificate that names your work"].map((x) => (
                <li key={x} className="flex gap-3 text-sm" style={{ color: "var(--text-body)" }}>
                  <span style={{ color: "var(--brand)" }} aria-hidden="true">✓</span>{x}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Outcome guaranteed:</strong> do the work and you leave with
              both projects and your certificate, or the founder works with you one to one until you do. If we miss one
              of your reviews, you get your full fee back.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Requesting a seat is free. A reservation fee of {depositLabel()} secures it and is adjusted against the
              programme fee.
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
              Looking for a full-time role instead? See the{" "}
              <Link href="/careers" className="underline underline-offset-4" style={{ color: "var(--brand)" }}>Founder&apos;s Office Cohort</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
