"use client";

import { useEffect, useState } from "react";

// Defaults to false (mobile-safe) until the client confirms the viewport —
// used to gate desktop-only extras like the hero's WebGL particle field so
// mobile never downloads or runs them.
export function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${breakpoint}px)`);
    setIsDesktop(query.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, [breakpoint]);

  return isDesktop;
}
