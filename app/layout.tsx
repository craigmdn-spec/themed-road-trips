import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Themed Road Trips",
    template: "%s | Themed Road Trips",
  },
  description: "Topical Getaways Across America – Curated multi-day themed road trips built around vintage Americana, space exploration, historic sites, and sporting legends. Retro images, cost calculators, and real driving routes.",
  keywords: ["road trips", "Route 66", "themed road trips", "American road trip", "roadside Americana", "NASA road trip"],
  authors: [{ name: "Craig Nunley" }],
  openGraph: {
    title: "Themed Road Trips",
    description: "Topical Getaways Across America",
    images: [{ url: "/hero.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5ede4] text-[#3f2a1d]`}
      >
        {children}
      </body>
    </html>
  );
}