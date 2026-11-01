import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ChatGuide from "@/components/shared/ChatGuide";
import MobileStickyBar from "@/components/shared/MobileStickyBar";
import TrackingListener from "@/components/site/TrackingListener";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, HOME_TITLE, HOME_DESCRIPTION, ORGANIZATION_JSON_LD } from "@/lib/site";
import { REVEAL_SCRIPT } from "@/lib/motion";
import { fraunces, jakarta, plexMono } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | The Adda Labs",
  },
  description: HOME_DESCRIPTION,
  // "./" resolves to each page's own path, so every page names itself as the original
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "The Adda Labs",
    locale: "en_IN",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full ${fraunces.variable} ${jakarta.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD).replace(/</g, "\\u003c") }}
        />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileStickyBar />
          <ChatGuide />
          <TrackingListener />
        </MotionProvider>
        {/* Scroll reveals (M2-M6) and the marquee pause. Content stays visible until the page has loaded */}
        <script dangerouslySetInnerHTML={{ __html: REVEAL_SCRIPT }} />
        {/* Anonymous, cookieless page-view counts, so the careers funnel shows visits, not just applications */}
        <Analytics />
      </body>
    </html>
  );
}
