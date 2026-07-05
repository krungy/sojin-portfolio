import classNames from "classnames";

import styles from "./Section.module.scss";

import type { SectionProps } from "./Section.types";

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={classNames(styles.section, className)} {...props}>
      {children}
    </section>
  );
}
