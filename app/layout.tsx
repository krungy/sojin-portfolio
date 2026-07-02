import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./_components/Footer/Footer";
import { Header } from "./_components/Header/Header";
import styles from "./layout.module.scss";
import "../styles/main.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이소진 | 프론트엔드 개발자",
  description: "프론트엔드 개발자 이소진의 포트폴리오 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={styles.page}>
        <Header />
        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
