// Shared line-icon paths for the home graphics. All drawn on a 24 x 24 grid,
// stroke only, round caps, so every icon reads as one family.

export type IconKind =
  | "build"
  | "test"
  | "scale"
  | "business"
  | "technology"
  | "sustainability"
  | "public"
  | "ventures";

export function IconPaths({ kind }: { kind: IconKind }) {
  switch (kind) {
    case "build":
      // three stacked blocks
      return (
        <>
          <rect x="3.5" y="14" width="7" height="6" rx="1" />
          <rect x="13.5" y="14" width="7" height="6" rx="1" />
          <rect x="8.5" y="4" width="7" height="6" rx="1" />
        </>
      );
    case "test":
      // a flask
      return (
        <>
          <path d="M9.5 3.5h5" />
          <path d="M10.5 3.5v5.2L5 18.2a1.6 1.6 0 0 0 1.4 2.3h11.2a1.6 1.6 0 0 0 1.4-2.3l-5.5-9.5V3.5" />
          <path d="M7.8 14.5h8.4" />
        </>
      );
    case "scale":
      // rising bars
      return (
        <>
          <path d="M4 20h16" />
          <path d="M6.5 20v-5" />
          <path d="M12 20v-9" />
          <path d="M17.5 20V5" />
        </>
      );
    case "business":
      // megaphone
      return (
        <>
          <path d="M3.5 10.5v3a1 1 0 0 0 1 1h2l5.5 4v-13l-5.5 4h-2a1 1 0 0 0-1 1z" />
          <path d="M15 9.2a4 4 0 0 1 0 5.6" />
          <path d="M18 6.6a8 8 0 0 1 0 10.8" />
        </>
      );
    case "technology":
      // code brackets
      return (
        <>
          <path d="M8 8l-4.5 4L8 16" />
          <path d="M16 8l4.5 4L16 16" />
          <path d="M13.5 5.5l-3 13" />
        </>
      );
    case "sustainability":
      // leaf
      return (
        <>
          <path d="M5 19C5 10.5 10 5 19.5 4.5 19.5 14 14 19 5 19z" />
          <path d="M5 19l8-8" />
        </>
      );
    case "public":
      // a small community
      return (
        <>
          <circle cx="12" cy="8" r="3" />
          <path d="M6.5 20c0-3.1 2.5-5.5 5.5-5.5s5.5 2.4 5.5 5.5" />
          <circle cx="4.8" cy="10.5" r="1.8" />
          <circle cx="19.2" cy="10.5" r="1.8" />
        </>
      );
    case "ventures":
      // a light bulb
      return (
        <>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
        </>
      );
  }
}
