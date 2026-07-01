import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../Button/Button";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.inner} aria-label="홈으로 이동">
          <p className={styles.title}>
            <span className={styles.name}>이소진</span>
            <span className={styles.role}>| 프론트엔드 개발자</span>
          </p>
        </Link>
        <Button aria-label="메뉴 열기">
          <Menu className={styles.menuIcon} />
        </Button>
      </div>
    </header>
  );
}
