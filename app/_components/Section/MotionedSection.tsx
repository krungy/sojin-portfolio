"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import type { MotionedSectionProps } from "./MotionedSection.types";

export function MotionedSection({
  children,
  amount = 0.2,
  className,
  duration = 0.6,
  once = true,
  y = 40,
  ...props
}: MotionedSectionProps) {
  return (
    <Section className={className} {...props}>
      <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount }}
        transition={{ duration, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </Section>
  );
}
