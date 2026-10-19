import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import DesignThinkingGraphic from "./graphics/DesignThinkingGraphic";

export default function HomeDesignThinking() {
  return (
    <section aria-labelledby="home-fields-heading" className="padding-section bg-background">
      <div className="layout-grid px-0">
        <AnimateOnScroll className="mb-12 text-left sm:text-center">
          <h2 id="home-fields-heading" className="mb-4 text-foreground text-balance">
            One way of thinking, every field
          </h2>
          <p className="text-lg text-body sm:mx-auto text-pretty" style={{ maxWidth: "36rem" }}>
            A human-centred way of solving problems that works across industries, teams and roles.
          </p>
        </AnimateOnScroll>
        <DesignThinkingGraphic />
        <div className="mt-12 text-left sm:text-center">
          <Link href="/services" className="btn-ghost">
            See our services →
          </Link>
        </div>
      </div>
    </section>
  );
}
