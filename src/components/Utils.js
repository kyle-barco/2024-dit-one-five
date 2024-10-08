import { useEffect } from "react";

export const useDisableBodyScroll = (open) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
};

export function componentDitMount() {
  window.scrollTo(0, 0);
}
