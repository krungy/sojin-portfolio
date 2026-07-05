import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export interface CardItemProps extends Omit<HTMLMotionProps<"article">, "children"> {
  media?: ReactNode;
  children: ReactNode;
  mediaClassName?: string;
  descriptionClassName?: string;
}
