import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter-ийг "cyrillic"-тэй ачаалбал монгол кирилл сайхан харагдана.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Номын дэлгүүр",
  description: "Дижитал ном, гарын авлагын дэлгүүр.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
