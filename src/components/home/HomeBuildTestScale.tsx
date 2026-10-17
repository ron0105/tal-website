import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import BuildTestScaleGraphic from "./graphics/BuildTestScaleGraphic";

export default function HomeBuildTestScale() {
  return (
    <section
      aria-labelledby="home-loop-heading"
      className="padding-section border-t border-border-subtle"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="layout-grid px-0 md:px-0">
        <h2 id="home-loop-heading" className="sr-only">
          Build, test, scale, and repeat
        </h2>
        <AnimateOnScroll>
          <BuildTestScaleGraphic />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
