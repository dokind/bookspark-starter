import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Номын дэлгүүр — Дижитал ном, гарын авлага",
  description: "Монгол бүтээгчдийн дижитал ном, гарын авлагыг худалдаж аваад татаж аваарай.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-400">
          © 2026 Номын дэлгүүр · Solo Spark жишээ төсөл
        </footer>
      </body>
    </html>
  );
}
