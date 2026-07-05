"use client";

import { Section } from "@/app/_components/Section/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./WorkSection.module.scss";
import { CardItem } from "@/app/_components/CardItem/CardItem";

export function WorkSection() {
  return (
    <Section className={styles.section}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className={styles.headline}>Work</h1>
        <p className={styles.description}>다양한 업무 경험을 통해 성장하고 있습니다.</p>
      </motion.div>
      <div className={styles.cardGrid}>
        <CardItem
          media={<Image src="/images/dkt_img.png" alt="DK Techin 로고" width={220} height={220} />}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className={styles.cardDescription}>
            <h5 className={styles.companyName}>DK Techin</h5>
            <div className={styles.iconSlot} aria-hidden="true" />
          </div>
        </CardItem>
      </div>
    </Section>
  );
}
