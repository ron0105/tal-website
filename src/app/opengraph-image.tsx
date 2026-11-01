import { ImageResponse } from "next/og";

// The preview card shown when a TAL link is shared on LinkedIn, WhatsApp or X.
// Rebuild colours (Nov 2026): near-black canvas, teal #4C7266, the Adda mark, and the new tagline.
export const alt = "The Adda Labs (TAL): more customers for your business. Guaranteed. Website, Instagram and WhatsApp automation from Mumbai.";
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
          background: "#0F1412",
          color: "#EDEBE6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="88" height="88" viewBox="0 0 32 32" fill="none">
            <circle cx="12" cy="16" r="9.5" fill="#EDEBE6" />
            <circle cx="19.5" cy="16" r="9.5" stroke="#94AAA3" strokeWidth="3.2" fill="none" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 700 }}>The Adda Labs</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 940 }}>
            More customers for your business. Guaranteed.
          </div>
          <div style={{ fontSize: 32, color: "#94AAA3" }}>
            Website · Instagram · WhatsApp automation
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, opacity: 0.85 }}>
          Mumbai · theaddalabs.com
        </div>
      </div>
    ),
    size,
  );
}
