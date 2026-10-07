import Image from "next/image";

// A short first-person note with Rohan's photo, so applying feels like writing to a
// person rather than filling in a system.
export default function RohanNote({
  children,
  compact = false,
}: {
  children: React.ReactNode;
  compact?: boolean;
}) {
  const size = compact ? 40 : 56;
  return (
    <div
      className={`flex items-start gap-4 rounded-[6px] ${compact ? "p-4" : "p-5 md:p-6"}`}
      style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
    >
      <Image
        src="/founders/rohan.png"
        alt="Rohan Tiwarekar"
        width={size}
        height={size}
        sizes={`${size}px`}
        className="rounded-full flex-shrink-0 object-cover"
        style={{ width: size, height: size, objectPosition: "50% 28%" }}
      />
      <div className="flex flex-col gap-1.5 min-w-0">
        <div className={`${compact ? "text-sm" : "text-base"} leading-relaxed`} style={{ color: "var(--text-body)" }}>
          {children}
        </div>
        <p className="font-poppins italic text-base" style={{ color: "var(--brand)" }}>
          Rohan
        </p>
      </div>
    </div>
  );
}
