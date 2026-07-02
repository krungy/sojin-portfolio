import { RefObject, useEffect } from "react";

export interface UseOutsideClickParams<T extends HTMLElement> {
  enabled?: boolean;
  onOutsideClick: () => void;
  ref: RefObject<T | null>;
}

export function useOutsideClick<T extends HTMLElement>({
  enabled = true,
  onOutsideClick,
  ref,
}: UseOutsideClickParams<T>) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (ref.current && !ref.current.contains(target)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [enabled, onOutsideClick, ref]);
}
