"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import { Button } from "../Button/Button";
import { MenuLayer } from "./MenuLayer";
import styles from "./Header.module.scss";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number = 1) => {
    const delay = i * 0.06;

    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring" as const, duration: 0.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const shape = {
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "transparent",
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuLayerId = useId();
  const menuAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useOutsideClick({
    enabled: isMenuOpen,
    onOutsideClick: () => setIsMenuOpen(false),
    ref: menuAreaRef,
  });

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.inner} aria-label="홈으로 이동">
          <p className={styles.title}>
            <span className={styles.name}>이소진</span>
            <span className={styles.role}>| 프론트엔드 개발자</span>
          </p>
        </Link>
        <div className={styles.menuArea} ref={menuAreaRef}>
          <Button
            className={styles.menuButton}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen}
            aria-controls={menuLayerId}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className={styles.iconSwitch}>
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    className={styles.iconFrame}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.08, ease: "easeOut" }}
                  >
                    <motion.svg
                      className={styles.menuIcon}
                      viewBox="0 0 24 24"
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.line
                        x1="6"
                        y1="6"
                        x2="18"
                        y2="18"
                        stroke="currentColor"
                        variants={draw}
                        custom={1}
                        style={shape}
                      />
                      <motion.line
                        x1="18"
                        y1="6"
                        x2="6"
                        y2="18"
                        stroke="currentColor"
                        variants={draw}
                        custom={1.3}
                        style={shape}
                      />
                    </motion.svg>
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    className={styles.iconFrame}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.08, ease: "easeOut" }}
                  >
                    <motion.svg
                      className={styles.menuIcon}
                      viewBox="0 0 24 24"
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.line
                        x1="4"
                        y1="6"
                        x2="20"
                        y2="6"
                        stroke="currentColor"
                        variants={draw}
                        custom={1}
                        style={shape}
                      />
                      <motion.line
                        x1="4"
                        y1="12"
                        x2="20"
                        y2="12"
                        stroke="currentColor"
                        variants={draw}
                        custom={1.3}
                        style={shape}
                      />
                      <motion.line
                        x1="4"
                        y1="18"
                        x2="20"
                        y2="18"
                        stroke="currentColor"
                        variants={draw}
                        custom={1.6}
                        style={shape}
                      />
                    </motion.svg>
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </Button>
          <MenuLayer id={menuLayerId} isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
}
