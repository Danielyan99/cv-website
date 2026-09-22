import { useEffect, useRef, useState } from "react";

/**
 * Reports whether the element has scrolled into view, once. Used to
 * trigger a one-time entrance animation. Falls back to "already visible"
 * when IntersectionObserver isn't available, so content is never stuck
 * hidden.
 */
const hasIntersectionObserver = typeof IntersectionObserver !== "undefined";

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  // No IntersectionObserver support -> start already visible, decided at
  // render time rather than via a synchronous setState in the effect.
  const [inView, setInView] = useState(!hasIntersectionObserver);

  useEffect(() => {
    const node = ref.current;
    if (!node || !hasIntersectionObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
