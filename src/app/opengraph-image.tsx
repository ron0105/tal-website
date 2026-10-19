import { ImageResponse } from "next/og";

// The preview card shown when a TAL link is shared on LinkedIn, WhatsApp or X.
// Peacock teal + copper (Sep 2026 palette), the Adda mark, and the enquiry line.
export const alt = "The Adda Labs (TAL): turn more enquiries into customers. A design-thinking lab in Mumbai.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0E6B68",
          color: "#F2F4F2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="88" height="88" viewBox="0 0 32 32" fill="none">
            <circle cx="12" cy="16" r="9.5" fill="#F2F4F2" />
            <circle cx="19.5" cy="16" r="9.5" stroke="#E9B48D" strokeWidth="3.2" fill="none" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 700 }}>The Adda Labs</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 940 }}>
            Turn more enquiries into customers.
          </div>
          <div style={{ fontSize: 32, color: "#E9B48D" }}>
            A website people find · regular posts · AI follow-ups
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, opacity: 0.85 }}>
          A design-thinking lab in Mumbai · theaddalabs.com
        </div>
      </div>
    ),
    size,
  );
}
