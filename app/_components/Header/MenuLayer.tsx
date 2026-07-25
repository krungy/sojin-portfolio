import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { MotionedSection } from "../Section/MotionedSection";

import styles from "./Header.module.scss";

import type { MenuLayerProps } from "./MenuLayer.types";

const MENU_ACTIONS = [
  {
    href: "mailto:furler711@gmail.com",
    label: "Email",
    external: false,
  },
  {
    href: "https://github.com/krungy",
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/isoj/",
    label: "LinkedIn",
    external: true,
  },
] as const;

export function MenuLayer({ id, isOpen, onClose }: MenuLayerProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.section
          id={id}
          className={styles.menuLayer}
          role="dialog"
          aria-label="메뉴"
          initial={{
            opacity: 0.9,
            clipPath: "inset(0 0 calc(100% - 2.5rem) calc(100% - 2.5rem) round 0.75rem)",
          }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0 0 round 0.75rem)" }}
          exit={{
            opacity: 0.9,
            clipPath: "inset(0 0 calc(100% - 2.5rem) calc(100% - 2.5rem) round 0.75rem)",
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <MotionedSection className={styles.menuMotionSection} y={12} duration={0.8} once={false}>
            <nav aria-label="메인 메뉴">
              <ul className={styles.menuList}>
                <li>
                  <Link href="/" onClick={onClose}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/work" onClick={onClose}>
                    Work
                  </Link>
                </li>
                {/* <li>
                  <Link href="/project" onClick={onClose}>
                    Project
                  </Link>
                </li> */}
              </ul>
            </nav>
          </MotionedSection>

          <motion.div
            className={styles.menuActions}
            role="group"
            aria-label="바로가기"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          >
            {MENU_ACTIONS.map(({ href, label, external }) => (
              <Link
                key={label}
                href={href}
                className={styles.menuAction}
                onClick={onClose}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
