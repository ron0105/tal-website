import Link from "next/link";

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is it paid?",
    a: "The training is a learning period with a certificate on completion. The full-time internship that follows is paid, with a bonus for calls booked and clients won.",
  },
  {
    q: "Is it full-time?",
    a: "Yes. Both the training and the internship are full-time, Monday to Friday, at our office in CBD Belapur, Navi Mumbai. This cohort is for full-time applicants.",
  },
  {
    q: "What happens after I apply?",
    a: "You hear back within a week. If you join the talent pool when you apply, we keep you in mind for future cohorts and paid opportunities, and you hear about them first.",
  },
  {
    q: "What experience do I need?",
    a: "We focus on how you think and what you can create with AI tools. Your work sample matters more than your CV.",
  },
  {
    q: "What will I work on?",
    a: "During training, you work on real assignments for TAL's own growth: outreach, content, research and tools. During the internship, you also work on client projects alongside Rohan, who reviews everything before it is shared.",
  },
  {
    q: "What do I gain from the training?",
    a: "Every participant who completes the training receives a certificate. You also leave with portfolio pieces and clear feedback on your next steps.",
  },
  {
    q: "Is it on-site?",
    a: "Yes, at our office in CBD Belapur, Navi Mumbai, Monday to Friday. Working together in person is the fastest way to learn.",
  },
  {
    q: "I applied through your old form. Should I apply again?",
    a: "Yes, please apply here if one of the tracks suits you. Our hiring process has been updated, and you can save your progress as you go.",
  },
  {
    q: "What happens to the information I send?",
    a: (
      <>
        We use it only to assess your application, keep it for a limited period, and delete it whenever you ask.
        Details are in our{" "}
        <Link href="/privacy" className="underline underline-offset-4" style={{ color: "var(--brand)" }}>
          privacy notice
        </Link>
        .
      </>
    ),
  },
];

export default function CareersFAQ() {
  return (
    <section className="padding-section" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="layout-grid px-6 md:px-10 grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20">
        <div>
          <span className="label-eyebrow block mb-6">Questions</span>
          <h2 style={{ color: "var(--text-primary)" }}>
            Good to know <span style={{ color: "var(--accent)" }}>before you apply.</span>
          </h2>
        </div>
        <div className="flex flex-col">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group py-5"
              style={{ borderBottom: "1px solid var(--border-color)" }}
            >
              <summary
                className="flex items-center justify-between gap-6 cursor-pointer list-none text-base font-semibold [&::-webkit-details-marker]:hidden"
                style={{ color: "var(--text-primary)" }}
              >
                {f.q}
                <span
                  className="text-xl leading-none transition-transform duration-200 group-open:rotate-45 flex-shrink-0"
                  style={{ color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-body)", maxWidth: "560px" }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
