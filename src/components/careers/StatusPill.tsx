import { RoleStatus, STATUS_LABEL } from "@/lib/jobs";

// "Open now" is solid peacock; "Joining the bench" is the quieter tint, so a reader
// scanning the grid sees which roles have paid work today.
export default function StatusPill({ status }: { status: RoleStatus }) {
  const open = status === "open";
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm whitespace-nowrap"
      style={{
        background: open ? "var(--brand)" : "var(--bg-lift)",
        color: open ? "#fff" : "var(--brand)",
      }}
    >
      {open && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--accent-on-brand)" }}
          aria-hidden="true"
        />
      )}
      {STATUS_LABEL[status]}
    </span>
  );
}
