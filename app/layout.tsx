import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "古民家カフェ こもれび | 築100年の古民家カフェ",
  description:
    "築100年の古民家で、季節のランチと自家焙煎珈琲を楽しむ架空店舗のポートフォリオLPです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
