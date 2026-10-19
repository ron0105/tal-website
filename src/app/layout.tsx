import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ChatGuide from "@/components/shared/ChatGuide";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, HOME_TITLE, HOME_DESCRIPTION, ORGANIZATION_JSON_LD } from "@/lib/site";

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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD).replace(/</g, "\\u003c") }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatGuide />
        {/* Anonymous, cookieless page-view counts, so the careers funnel shows visits, not just applications */}
        <Analytics />
      </body>
    </html>
  );
}
