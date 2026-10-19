import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to TAL, a design-thinking lab in Mumbai working with businesses in India and abroad. Message us on WhatsApp, or book a call.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
