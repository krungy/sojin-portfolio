import classNames from "classnames";
import { Badge, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

import styles from "./ListItem.module.scss";

import type { ListItemProps } from "./ListItem.types";

export function ListItem({
  period,
  title,
  description,
  skills = [],
  isIconFilled = false,
  isActionExpanded = false,
  actionLabel,
  onActionClick,
  className,
  ...props
}: ListItemProps) {
  const hasSkills = skills.length > 0;
  const hasAction = actionLabel !== undefined;

  return (
    <div className={classNames(styles.item, className)} {...props}>
      <div className={styles.period}>
        <Badge aria-hidden="true" size={16} fill={isIconFilled ? "currentColor" : "none"} />
        <p>{period}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          {description ? <p className={styles.description}>{description}</p> : null}
        </div>

        {hasSkills ? (
          <ul className={styles.skills} aria-label={`${title} 기술 스택`}>
            {skills.map(({ label, iconSrc }) => (
              <li key={label} className={styles.skillItem}>
                <div className={styles.skill}>
                  {iconSrc ? (
                    <Image src={iconSrc} alt={label} fill sizes="24px" className={styles.skillIcon} />
                  ) : (
                    <span className={styles.skillFallback}>{label.slice(0, 1)}</span>
                  )}
                  <span className={styles.skillTooltip}>{label}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : null}

        {hasAction ? (
          <button className={styles.actionButton} type="button" onClick={onActionClick}>
            {isActionExpanded ? (
              <ChevronUp aria-hidden="true" />
            ) : (
              <ChevronDown aria-hidden="true" />
            )}
            <span>{actionLabel}</span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
