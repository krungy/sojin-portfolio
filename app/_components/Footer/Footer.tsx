import Link from "next/link";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <p className={styles.topic}>Contact</p>
      </div>
      <nav aria-label="푸터 링크">
        <ul className={styles.links}>
          <li>
            <Link href="mailto:furler711@gmail.com">Email</Link>
          </li>
          <li>
            <Link href="https://github.com/krungy" target="_blank" rel="noreferrer">
              GitHub
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/isoj/" target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
