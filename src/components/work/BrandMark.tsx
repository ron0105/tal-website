import Image from "next/image";
import Logo from "@/components/shared/Logo";
import { logosFor, logoHeight } from "@/lib/logos";

// A work piece's brand as logos: our own mark for TAL builds, the cleaned logo files for
// everyone else, and the name set as a wordmark when a brand has no public logo.
export default function BrandMark({ brand, base, className = "" }: { brand: string; base: number; className?: string }) {
  if (brand === "The Adda Labs") {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <Logo size={Math.round(base * 0.7)} />
        <span className="font-semibold tracking-tight" style={{ color: "var(--text-primary)", fontSize: Math.round(base * 0.38) }}>
          The Adda Labs
        </span>
      </span>
    );
  }

  const logos = logosFor(brand);
  if (logos.length === 0) {
    return (
      <span className={`font-poppins leading-tight ${className}`} style={{ color: "var(--text-primary)", fontSize: Math.round(base * 0.4) }}>
        {brand}
      </span>
    );
  }

  return (
    <span className={`inline-flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`}>
      {logos.map((l) => (
        <Image
          key={l.file}
          src={`/logos/${l.file}.webp`}
          alt={l.brand}
          width={l.w}
          height={l.h}
          style={{ height: logoHeight(l, logos.length > 1 ? base * 0.75 : base), width: "auto" }}
          sizes="200px"
        />
      ))}
    </span>
  );
}
