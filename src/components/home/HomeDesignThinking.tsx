import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import DesignThinkingGraphic from "./graphics/DesignThinkingGraphic";

export default function HomeDesignThinking() {
  return (
    <section aria-labelledby="home-fields-heading" className="padding-section bg-background">
      <div className="layout-grid px-0">
        <AnimateOnScroll className="text-center mb-14">
          <h2 id="home-fields-heading" className="mb-5 text-foreground">
            One way of thinking, every field
          </h2>
          <p className="text-lg text-body mx-auto" style={{ maxWidth: "36rem" }}>
            A human-centred way of solving problems that works across industries, teams and roles.
          </p>
        </AnimateOnScroll>
        <DesignThinkingGraphic />
      </div>
    </section>
  );
}
