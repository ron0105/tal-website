import type { ElementType, ReactNode } from "react";

/**
 * M2 / M3 scroll reveal. Each direct child animates in once, when the block is 20% in view.
 *   section  eyebrow, then title +80ms, then body +160ms (M2)
 *   stagger  card grids: 70ms apart, the 6th and later together (M3)
 *   fade     opacity only
 * Bars (.bar, M5) and line drawings (.draw / .draw-node, M6) inside also start here.
 * No JS of its own: the inline script in the root layout sets data-in.
 */
export function Reveal({
  mode = "section",
  as: Tag = "div",
  className,
  children,
}: {
  mode?: "section" | "stagger" | "fade";
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag data-reveal={mode} className={className}>
      {children}
    </Tag>
  );
}
