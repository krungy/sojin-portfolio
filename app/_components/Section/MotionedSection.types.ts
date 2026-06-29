import type { ComponentPropsWithoutRef, ReactNode } from "react";

export interface MotionedSectionProps
  extends Omit<ComponentPropsWithoutRef<"section">, "children"> {
  children: ReactNode;
  amount?: number;
  duration?: number;
  once?: boolean;
  y?: number;
}
