import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina — Premium Learning Analytics Dashboard",
  description: "Optimize your study streaks, course metrics, XP completions, and focus schedules inside Lumina's next-generation analytical platform.",
  keywords: ["analytics", "learning", "dashboard", "study tracker", "SaaS", "nextjs", "lumina"],
  authors: [{ name: "Aditya" }],
  themeColor: "#05070D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-bg-deep text-foreground">
        {children}
      </body>
    </html>
  );
}
