"use client";

/** Filter chips (spec component list). The active chip fills peacock (M10). */
export function FilterChips({
  filters,
  active,
  onChange,
  label,
}: {
  filters: string[];
  active: string;
  onChange: (filter: string) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2 mb-10">
      {filters.map((f) => {
        const on = f === active;
        return (
          <button
            key={f}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(f)}
            className="min-h-[44px] px-4 rounded-full text-sm font-medium cursor-pointer"
            style={{
              background: on ? "var(--brand)" : "transparent",
              color: on ? "#fff" : "var(--text-body)",
              border: `1px solid ${on ? "var(--brand)" : "var(--border-strong)"}`,
              transition: "background-color 150ms, color 150ms, border-color 150ms",
            }}
          >
            {f}
          </button>
        );
      })}
    </div>
  );
}
