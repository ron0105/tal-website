// Adda mark — two circles meeting. Chosen over Direction B, Aug 25 2026.
export default function Logo({ size = 30, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-label="TAL — The Adda Labs"
    >
      <circle cx="12" cy="16" r="9.5" fill={dark ? "#FFFFFF" : "#0F172A"} />
      <circle cx="19.5" cy="16" r="9.5" stroke="#CA8A04" strokeWidth="3.2" fill="none" />
    </svg>
  );
}
