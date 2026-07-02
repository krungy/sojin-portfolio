import type { ComponentPropsWithoutRef, ReactNode } from "react";

export interface SectionProps extends Omit<ComponentPropsWithoutRef<"section">, "children"> {
  children: ReactNode;
}
