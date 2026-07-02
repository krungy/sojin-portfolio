import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { MotionedSection } from "../Section/MotionedSection";
import styles from "./Header.module.scss";
import type { MenuLayerProps } from "./MenuLayer.types";

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
                  <Link href="/skills" onClick={onClose}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/projects" onClick={onClose}>
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </MotionedSection>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
