// Brand book Jun 2026 — Direction B: TAL monogram breaking out of the gold
// frame ("out of the box" — keep the overflow, never center TAL inside)
export default function Logo({ size = 30, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <svg
      width={size * 1.25}
      height={size}
      viewBox="0 0 50 40"
      fill="none"
      aria-label="TAL — The Adda Labs"
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="6"
        stroke="#CA8A04"
        strokeWidth="2.5"
      />
      <text
        x="8"
        y="28.5"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontSize="19.5"
        fontWeight="800"
        fill={dark ? "#FFFFFF" : "var(--text-primary)"}
      >
        TAL
      </text>
    </svg>
  );
}
