import { useEffect, useRef, useState } from "react";
import styles from "./ScrollProgressBar.module.css";

/**
 * A thin bar across the top of the page that fills as the reader
 * scrolls. Purely reflects scroll position (not an independent
 * animation loop), so it isn't gated behind prefers-reduced-motion.
 */
export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
      ticking.current = false;
    };

    const onScrollOrResize = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div className={styles.track} aria-hidden="true">
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
}
