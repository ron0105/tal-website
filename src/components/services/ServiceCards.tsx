import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

// Benefit first, one line, features as chips (Rohan, Oct 19 2026: less text, visuals do the explaining).
// The small pictures are plain HTML so the page ships no image files.

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="flex min-h-[8.5rem] flex-col justify-center gap-2.5 rounded-lg p-4 text-[0.8rem] leading-snug"
      style={{ background: "var(--bg-lift)" }}
    >
      {children}
    </div>
  );
}

function SearchPicture() {
  return (
    <Frame>
      <div
        className="flex items-center gap-2 rounded-full px-3 py-1.5"
        style={{ background: "var(--bg)", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="6.5" />
          <path d="M20 20l-4-4" />
        </svg>
        skin clinic near me
      </div>
      <div className="flex items-center justify-between gap-2 rounded-md px-3 py-2" style={{ background: "var(--bg)" }}>
        <span className="min-w-0">
          <span className="block font-semibold" style={{ color: "var(--text-primary)" }}>Your clinic</span>
          <span style={{ color: "var(--text-muted)" }}>1st result</span>
        </span>
        <span className="shrink-0 rounded-full px-3 py-1 font-semibold text-white" style={{ background: "var(--brand)" }}>
          Chat
        </span>
      </div>
    </Frame>
  );
}

function ChatPicture() {
  return (
    <Frame>
      <span
        className="self-start rounded-xl rounded-bl-sm px-3 py-1.5"
        style={{ background: "var(--bg)", color: "var(--text-body)" }}
      >
        Is Saturday free?
      </span>
      <span className="self-end rounded-xl rounded-br-sm px-3 py-1.5 text-white" style={{ background: "var(--brand)" }}>
        Yes, 11am works. Book here
      </span>
      <span className="self-end text-xs" style={{ color: "var(--text-muted)" }}>
        Replied in seconds
      </span>
    </Frame>
  );
}

function ClarityPicture() {
  return (
    <Frame>
      <span className="line-through" style={{ color: "var(--text-muted)" }}>
        We do everything for everyone
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M6 13l6 6 6-6" />
      </svg>
      <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
        The family clinic for busy parents in Vashi
      </span>
    </Frame>
  );
}

function TasksPicture() {
  const rows = [
    { done: true, text: "“What are your timings?” answered" },
    { done: true, text: "Reply drafted for you to check" },
    { done: false, text: "Personal question sent to you" },
  ];
  return (
    <Frame>
      {rows.map((r) => (
        <span key={r.text} className="flex items-center gap-2" style={{ color: "var(--text-body)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            {r.done ? (
              <>
                <circle cx="12" cy="12" r="9" stroke="var(--brand)" />
                <path d="M8 12.5l2.5 2.5L16 9.5" stroke="var(--brand)" />
              </>
            ) : (
              <>
                <circle cx="12" cy="8" r="3.5" stroke="var(--accent)" />
                <path d="M5 20a7 7 0 0 1 14 0" stroke="var(--accent)" />
              </>
            )}
          </svg>
          {r.text}
        </span>
      ))}
    </Frame>
  );
}

const services = [
  {
    picture: <SearchPicture />,
    benefit: "Get found. Get enquiries.",
    line: "People find you on Google and reach you in one tap.",
    features: ["Website", "Google profile", "Reviews"],
    time: "4 to 6 weeks",
  },
  {
    picture: <ChatPicture />,
    benefit: "Every enquiry gets a reply in seconds",
    line: "Follow-ups go out on their own. More chats become bookings.",
    features: ["WhatsApp auto-reply", "Follow-ups", "One tracking sheet"],
    time: "2 to 3 weeks",
  },
  {
    picture: <ClarityPicture />,
    benefit: "Customers see why you, fast",
    line: "A clear line and an offer that make yes easy.",
    features: ["Customer talks", "One clear line", "Offer"],
    time: "2 weeks",
  },
  {
    picture: <TasksPicture />,
    benefit: "Time back for your team",
    line: "AI takes the repeat work. Your team takes the people.",
    features: ["AI assistant", "Draft replies", "Hand-off to you"],
    time: "2 to 4 weeks",
  },
];

export default function ServiceCards() {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {services.map((s, i) => (
        <li key={s.benefit}>
          <AnimateOnScroll delay={i * 0.06} className="h-full">
            <div
              className="flex h-full flex-col gap-4 rounded-2xl p-6"
              style={{ background: "var(--bg)", border: "1px solid var(--border-subtle)" }}
            >
              {s.picture}
              <h3 className="text-foreground text-balance">{s.benefit}</h3>
              <p className="text-base leading-relaxed text-body">{s.line}</p>
              <ul className="flex flex-wrap gap-2" aria-label="What you get">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ background: "var(--bg-secondary)", color: "var(--text-body)", border: "1px solid var(--border-subtle)" }}
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-auto flex items-center gap-2 pt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                {s.time}
              </p>
            </div>
          </AnimateOnScroll>
        </li>
      ))}
    </ul>
  );
}
