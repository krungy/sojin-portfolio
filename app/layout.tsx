import { Footer } from "./_components/Footer/Footer";
import { Header } from "./_components/Header/Header";
import styles from "./layout.module.scss";

import type { Metadata } from "next";
import "../styles/main.scss";

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
    <html lang="ko">
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
