import "@/styles/tokens.css";
import "../globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-display" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "SNSTrend.AI – AI 소셜 트렌드 분석",
  description: "자연어로 질문하면 실시간 소셜 데이터를 분석해 인사이트와 리포트를 제공합니다.",
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-[var(--color-bg)] text-[var(--color-fg)] antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-black/60 text-white px-3 py-2 rounded-md">
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
