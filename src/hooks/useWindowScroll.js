import { useState } from "react";
import { useWindowEvent } from "./useViewportSize";

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useWindowEvent("scroll", () =>
    setScroll({ x: window.scrollX, y: window.scrollY })
  );

  const scrollTo = (y) => {
    window.scrollTo(0, y);
  };

  return [scroll, scrollTo];
}
