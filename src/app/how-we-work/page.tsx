import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import HWWLoop from "@/components/how-we-work/HWWLoop";
import HWWFlow from "@/components/how-we-work/HWWFlow";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "One simple loop: ideate, build, test and scale, then begin again a little wiser. Design thinking guides every step.",
};

const workWithYou = [
  { title: "We listen", line: "We spend time with your team and your numbers." },
  { title: "We map", line: "We decide what to build next, and in what order." },
  { title: "We build", line: "Clear systems and plans your team can own and run." },
  { title: "You grow", line: "More revenue, better margins, a business that runs smoothly." },
];

const testAnIdea = [
  { title: "Map the assumptions", line: "Write down the beliefs your idea depends on." },
  { title: "Talk to real customers", line: "Ask the people who would actually pay." },
  { title: "Check the market reality", line: "See who else is there and where the gap is." },
  { title: "Test willingness to pay", line: "Find out who will pay, and how much." },
  { title: "Run the smallest possible test", line: "A pilot or pre-sale that gives a real signal." },
  { title: "Make the call", line: "Go, stop or pivot, backed by evidence." },
];

// Lab positioning (Oct 2026): one title, one line, one loop, one CTA.
// The earlier HWWHero, HWWSteps and HWWIdeas stay on disk but are no longer imported.
export default function HowWeWork() {
  return (
    <div>
      <section
        className="bg-background"
        style={{ paddingTop: "clamp(9rem, 16vh, 12rem)", paddingBottom: "clamp(2.5rem, 6vh, 4rem)" }}
      >
        <div className="layout-grid px-6 md:px-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} aria-hidden="true" />
            <span className="label-eyebrow text-accent">Our framework</span>
          </div>
          <h1 className="font-poppins mb-6">How we work</h1>
          <p className="text-lg leading-relaxed text-body" style={{ maxWidth: "34rem" }}>
            The loop we repeat, how we work with you, and how we test a new idea.
          </p>
        </div>
      </section>

      <section
        aria-label="The loop: ideate, build, test, scale"
        className="px-6 md:px-10 py-14"
        style={{ background: "var(--bg-secondary)" }}
      >
        <AnimateOnScroll className="layout-grid">
          <HWWLoop />
          <p className="text-lg text-body text-left sm:text-center sm:mx-auto mt-10 text-pretty" style={{ maxWidth: "36rem" }}>
            Design thinking guides every step, so what we make stays useful to real people.
          </p>
        </AnimateOnScroll>
      </section>

      <section
        aria-label="How we work with you and how we test a new idea"
        className="bg-background px-6 md:px-10"
        style={{ paddingTop: "clamp(4rem, 8vh, 6rem)", paddingBottom: "clamp(4rem, 8vh, 6rem)" }}
      >
        <div className="layout-grid flex flex-col gap-16 md:gap-24">
          <AnimateOnScroll>
            <HWWFlow
              id="hww-process-heading"
              eyebrow="Working together"
              heading="How we work with you"
              intro="Four stages, from the first conversation to a business that grows."
              steps={workWithYou}
              cols={4}
              emphasiseLast
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <HWWFlow
              id="hww-validation-heading"
              eyebrow="Idea validation"
              heading="How we test a new idea"
              intro="Six steps that end in a clear decision."
              steps={testAnIdea}
              cols={3}
              emphasiseLast
            />
          </AnimateOnScroll>
        </div>
      </section>

      <section aria-labelledby="hww-cta-heading" className="padding-section text-center bg-background">
        <AnimateOnScroll className="layout-grid">
          <h2 id="hww-cta-heading" className="mb-10 text-foreground">
            Have an idea to start the loop with?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary btn-lg">
              Start a conversation
            </Link>
            <Link href="/work" className="btn-ghost btn-lg">
              See what we work on
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
