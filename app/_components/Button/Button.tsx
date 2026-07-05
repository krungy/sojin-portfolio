import classNames from "classnames";

import styles from "./Button.module.scss";

import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  className,
  showBorder = false,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, !showBorder && styles.noBorder, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
