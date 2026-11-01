import type { CSSProperties, ElementType, ReactNode } from "react";
import { heroDelay } from "@/lib/motion";

/**
 * M1 headline word reveal. Server-rendered and pure CSS, so the H1 starts animating
 * at first paint and is never hidden behind JS. Use once per page, on the hero H1.
 */
export function WordReveal({
  text,
  as: Tag = "h1",
  className,
  style,
  id,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className} style={style} id={id}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="wr-word" style={{ "--i": i } as CSSProperties}>
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}

/**
 * What follows the H1: step 1 is the sub-headline (150ms after the last word starts),
 * step 2 the buttons (100ms after that). Pass the same text as the H1 to time it.
 */
export function HeroFollow({
  after,
  step,
  children,
  className,
}: {
  after: string;
  step: 1 | 2;
  children: ReactNode;
  className?: string;
}) {
  const delay = heroDelay(after.split(" ").length, step);
  return (
    <div className={`hero-follow${className ? ` ${className}` : ""}`} style={{ "--delay": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}
