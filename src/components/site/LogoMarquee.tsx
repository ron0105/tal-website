import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";
import { LOGOS, logoHeight } from "@/lib/logos";

/** Trust strip (spec 5.1 #2): greyscale logos on the M8 marquee. Brands are looked up in lib/logos.ts. */
export default function LogoMarquee({ label, brands }: { label: string; brands: string[] }) {
  const logos = brands.map((b) => LOGOS.find((l) => l.brand === b)).filter((l) => !!l);
  return (
    <section aria-label={label} className="py-12 md:py-14" style={{ borderBottom: "1px solid var(--hairline)" }}>
      <div className="wrap">
        <p className="label-eyebrow mb-8 text-center">{label}</p>
        <Marquee label={label}>
          {logos.map((l) => {
            const h = logoHeight(l, 40);
            return (
              <li key={l.brand} className="shrink-0 flex items-center" style={{ height: 48 }}>
                <Image
                  src={`/logos/${l.file}.webp`}
                  alt={l.brand}
                  width={Math.round((l.w / l.h) * h)}
                  height={h}
                  style={{ filter: "grayscale(1)", opacity: 0.7 }}
                />
              </li>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
