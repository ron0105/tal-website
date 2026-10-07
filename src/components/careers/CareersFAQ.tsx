import Link from "next/link";
import { COHORT } from "@/lib/jobs";

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is it paid?",
    a: `Yes. The ${COHORT.trainingDays}-day training pays ${COHORT.trainingStipend}. The full-time internship after it pays ${COHORT.internshipPay} on calls booked and clients won. We don't ask for free work beyond the short sample in your application.`,
  },
  {
    q: "Is it full-time?",
    a: "Yes. The training and the internship are both full-time and on-site in Mumbai, Monday to Friday. This cohort isn't open to part-time applicants.",
  },
  {
    q: "What if I'm not picked?",
    a: "You'll hear back within 7 days either way. If you tick the talent pool box when you apply, you stay on our list for future cohorts and paid work that fits you, and you'll hear from us first when it comes up.",
  },
  {
    q: "Do I need experience?",
    a: "No. We look at how you think and what you can make with AI tools. The work sample in your application is the real test, not your CV.",
  },
  {
    q: "What will I actually work on?",
    a: "During training, real assignments on TAL's own growth: outreach, content, research and tools. In the internship, client work too, alongside Rohan, who reviews everything before it goes out.",
  },
  {
    q: "What if I don't continue after the 15 days?",
    a: "You still get paid for the training and you still get the certificate, free. You leave with portfolio pieces and an honest note on what to work on next.",
  },
  {
    q: "Is it on-site?",
    a: `Yes, at our office in ${COHORT.location.replace(", on-site", "")}, Monday to Friday. Working in the same room is how you learn fastest here.`,
  },
  {
    q: "I applied through your old form. Should I apply again?",
    a: "Yes, if one of the tracks fits. Our hiring process has changed, and applying here takes about 30 minutes.",
  },
  {
    q: "What happens to the information I send?",
    a: (
      <>
        We use it only to assess your application, keep it for 6 months, and delete it sooner if you ask.
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
