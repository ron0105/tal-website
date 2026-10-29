import Image from "next/image";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { LOGOS, logoHeight } from "@/lib/logos";

export default function LogoWall({ background = "var(--bg)" }: { background?: string }) {
  return (
    <section
      aria-labelledby="logo-wall-heading"
      className="px-6 md:px-10"
      style={{ background, paddingTop: "clamp(1rem, 3vh, 2rem)", paddingBottom: "clamp(3rem, 7vh, 5rem)" }}
    >
      <AnimateOnScroll className="layout-grid">
        <p id="logo-wall-heading" className="mb-10 text-sm text-left sm:text-center" style={{ color: "var(--text-muted)" }}>
          {/* Sits under the impact strip, which already says the number, so this line doesn't repeat it */}
          Some of the brands our team and advisors have worked with
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14">
          {LOGOS.map((l) => {
            const height = logoHeight(l, 60);
            return (
              <li key={l.file} className="opacity-70 transition-opacity duration-200 hover:opacity-100">
                <Image
                  src={`/logos/${l.file}.webp`}
                  alt={l.brand}
                  width={l.w}
                  height={l.h}
                  style={{ height, width: "auto" }}
                  sizes="160px"
                />
              </li>
            );
          })}
        </ul>
      </AnimateOnScroll>
    </section>
  );
}
