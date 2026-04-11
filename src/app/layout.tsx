import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Adda Labs — Experiment. Validate. Build.",
    template: "%s | The Adda Labs",
  },
  description:
    "A founder-led venture experimentation lab. We help founders test their ideas before building them — with a structured 6-stage process and clear outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
