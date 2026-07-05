"use client";

import classNames from "classnames";
import { motion } from "framer-motion";

import styles from "./CardItem.module.scss";

import type { CardItemProps } from "./CardItem.types";

export function CardItem({
  media,
  children,
  className,
  mediaClassName,
  descriptionClassName,
  onClick,
  transition,
  ...props
}: CardItemProps) {
  const hasMedia = media !== undefined && media !== null;
  const isClickable = typeof onClick === "function";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition ?? { duration: 0.6, ease: "easeOut" }}
    >
      <motion.article
        className={classNames(styles.card, isClickable && styles.clickable, className)}
        whileHover={isClickable ? { y: -6 } : undefined}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={onClick}
        {...props}
      >
        <div className={classNames(styles.media, mediaClassName)}>
          {hasMedia ? media : <div className={styles.mediaEmpty} aria-hidden="true" />}
        </div>
        <div className={classNames(styles.description, descriptionClassName)}>{children}</div>
      </motion.article>
    </motion.div>
  );
}
