import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { useReducedMotion } from "../hooks/useReducedMotion";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: ReactNode | ((revealed: boolean) => ReactNode);
  /** Stagger delay in ms, for animating a list of items one after another. */
  delay?: number;
}

/**
 * Fades and rises an element into place the first time it scrolls into
 * view. Falls back to already-visible when the OS "reduce motion"
 * setting is on. Shared by every section that animates on scroll, so
 * there's one reveal behavior to reason about, not several.
 */
export function Reveal({ children, delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();
  const revealed = inView || reducedMotion;

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${revealed ? styles.visible : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {typeof children === "function" ? children(revealed) : children}
    </div>
  );
}
