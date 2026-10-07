import Link from "next/link";
import { REPLY_PROMISE_DAYS } from "@/lib/jobs";

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is this a full-time job?",
    a: "Most roles aren't. They're paid per project or per result, so you choose how much you take on, and many people on our bench do this alongside studies, a job or their own clients. Founder's Office is the exception: on-site with Rohan, with a stipend plus a bonus.",
  },
  {
    q: "What does joining the bench mean?",
    a: "You've done a paid trial with us and you're first in line when client work comes in. Roles marked \"Joining the bench\" start paid work with our first Build, and bench members are booked before anyone new.",
  },
  {
    q: "Is the trial really paid?",
    a: "Yes. It's a small piece of real work, paid at the role's normal rate. We don't ask for free work beyond the short sample in your application.",
  },
  {
    q: "How long does the whole thing take?",
    a: `You'll hear back within ${REPLY_PROMISE_DAYS} days of applying. Shortlisted people get a call the following week, and most trials take one to two weeks.`,
  },
  {
    q: "I applied through your old form. Should I apply again?",
    a: "Yes, if one of these roles fits. Our hiring process has changed, and applying here takes about 30 minutes.",
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
