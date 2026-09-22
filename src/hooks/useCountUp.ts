import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 up to `target` once `start` becomes true,
 * runs only once. When `animate` is false (reduced motion), it jumps
 * straight to `target` with no tween.
 */
export function useCountUp(
  target: number,
  start: boolean,
  animate: boolean,
  duration = 900,
): number {
  const [value, setValue] = useState(animate ? 0 : target);
  const hasRun = useRef(false);

  useEffect(() => {
    // The non-animated case is already covered by the initializer above.
    if (!animate || !start || hasRun.current) return;
    hasRun.current = true;

    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, animate, target, duration]);

  return value;
}
