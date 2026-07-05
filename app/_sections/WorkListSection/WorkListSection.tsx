"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CardItem } from "@/app/_components/CardItem/CardItem";
import { Section } from "@/app/_components/Section/Section";
import { WORK_ITEMS } from "@/common/work";
import type { WorkItem } from "@/common/work";

import styles from "./WorkListSection.module.scss";

export function WorkListSection() {
  const router = useRouter();

  const handleWorkItemClick = (id: WorkItem["id"]) => {
    router.push(`/work/${id}`);
  };

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
        {WORK_ITEMS.map(({ id, companyName, meta, image }, index) => (
          <CardItem
            key={id}
            data-work-id={id}
            media={
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority={index === 0}
              />
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + index * 0.1 }}
            onClick={() => handleWorkItemClick(id)}
          >
            <div className={styles.cardDescription}>
              <h5 className={styles.companyName}>{companyName}</h5>
              <p className={styles.companyMeta}>{meta}</p>
            </div>
          </CardItem>
        ))}
      </div>
    </Section>
  );
}
