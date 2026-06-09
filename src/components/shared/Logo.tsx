// Brand book Jun 2026 — Direction B: TAL monogram in gold frame
export default function Logo({ size = 30, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
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
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontSize="15"
        fontWeight="800"
        fill={dark ? "#FFFFFF" : "var(--text-primary)"}
      >
        TAL
      </text>
    </svg>
  );
}
