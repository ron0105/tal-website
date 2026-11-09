/** Click-to-play hero video. Nothing but the poster loads until someone presses play. */
export default function HeroVideo({ src, poster, caption, label }: { src: string; poster: string; caption: string; label: string }) {
  return (
    <video
      controls
      playsInline
      preload="none"
      poster={poster}
      aria-label={label}
      className="block w-full aspect-video"
      style={{ borderRadius: "var(--radius-card)", background: "var(--bg-lift)" }}
    >
      <source src={src} type="video/mp4" />
      <track kind="captions" src={caption} srcLang="en" label="English" default />
    </video>
  );
}
