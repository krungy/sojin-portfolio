import Link from "next/link";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.inner} aria-label="홈으로 이동">
        <p className={styles.title}>
          <span className={styles.name}>이소진</span>
          <span className={styles.role}>| 프론트엔드 개발자</span>
        </p>
      </Link>
    </header>
  );
}
