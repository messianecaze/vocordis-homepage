import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteNav } from "./components/SiteNav";
import { SiteFooter } from "./components/SiteFooter";

// DM Sans (variable, weights 100–1000), self-hosted from app/fonts.
// Licensed under the SIL Open Font License — see app/fonts/DMSans-OFL.txt.
const dmSans = localFont({
  src: "./fonts/DMSans-latin-wght.woff2",
  variable: "--font-dm-sans",
  weight: "100 1000",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VoCordis — Revealing Purpose",
  description: "Empowering those who help others discover their heart's calling. VoCordis trains and equips coaches with a story-based framework and AI-powered Workbench.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
