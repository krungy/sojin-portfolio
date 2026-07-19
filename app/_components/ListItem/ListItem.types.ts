import type { HTMLAttributes, ReactNode } from "react";

export type ListItemSkill = {
  id: string;
  label: string;
  iconSrc?: string;
};

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  period: string;
  title: string;
  description?: ReactNode;
  skills?: ListItemSkill[];
  isIconFilled?: boolean;
  isActionExpanded?: boolean;
  actionLabel?: string;
  onActionClick?: () => void;
}
