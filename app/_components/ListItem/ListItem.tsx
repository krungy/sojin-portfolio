"use client";

import classNames from "classnames";
import { Badge, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useId, useState } from "react";
import { Tooltip } from "react-tooltip";

import { SKILL_IMAGE_BY_ID } from "@/common/skills";

import styles from "./ListItem.module.scss";

import type { ListItemProps } from "./ListItem.types";

export function ListItem({
  period,
  title,
  description,
  skills = [],
  isIconFilled = false,
  actionContent,
  onActionClick,
  className,
  ...props
}: ListItemProps) {
  const skillTooltipId = useId();
  const actionPanelId = useId();
  const [isActionExpanded, setIsActionExpanded] = useState(false);
  const hasSkills = skills.length > 0;
  const hasAction = actionContent !== undefined;

  const handleActionClick = () => {
    const nextIsExpanded = !isActionExpanded;

    setIsActionExpanded(nextIsExpanded);
    onActionClick?.(nextIsExpanded);
  };

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
          <>
            <ul className={styles.skills} aria-label={`${title} 기술 스택`}>
              {skills.map(({ id, label, iconSrc }) => {
                const skillImageSrc = iconSrc ?? SKILL_IMAGE_BY_ID[id];

                return (
                  <li key={id} className={styles.skillItem}>
                    <div
                      className={styles.skill}
                      data-tooltip-id={skillTooltipId}
                      data-tooltip-content={label}
                    >
                      {skillImageSrc ? (
                        <Image src={skillImageSrc} alt={label} fill sizes="24px" className={styles.skillIcon} />
                      ) : (
                        <span className={styles.skillFallback}>{label.slice(0, 1)}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            <Tooltip id={skillTooltipId} place="bottom" />
          </>
        ) : null}

        {hasAction ? (
          <>
            <button
              className={styles.actionButton}
              type="button"
              aria-expanded={isActionExpanded}
              aria-controls={actionPanelId}
              onClick={handleActionClick}
            >
              {isActionExpanded ? (
                <ChevronUp aria-hidden="true" />
              ) : (
                <ChevronDown aria-hidden="true" />
              )}
              <span>{isActionExpanded ? "Hide Details" : "View Details"}</span>
            </button>
            {isActionExpanded ? (
              <div id={actionPanelId} className={styles.actionContent}>
                {actionContent}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
