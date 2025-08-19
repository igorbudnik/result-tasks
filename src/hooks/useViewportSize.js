import { useEffect, useState } from "react";
export function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}

export function useViewportSize() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useWindowEvent(
    "load",
    () => (setHeight(window.innerHeight), setWidth(window.innerWidth))
  );

  useWindowEvent(
    "resize",
    () => (setHeight(window.innerHeight), setWidth(window.innerWidth))
  );

  return { height, width };
}
