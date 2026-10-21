import { useEffect, useRef } from "react";
import { track, type AnalyticsEvents } from "../lib/analytics";
import { useInView } from "./useInView";

type Section = AnalyticsEvents["section_view"]["section"];

/**
 * Sends one section_view event the first time the section scrolls into
 * view. Attach the returned ref to the section element.
 */
export function useTrackSectionView<T extends HTMLElement>(section: Section) {
  // Keep the threshold low: on small phones Projects is ~3.5 screens tall,
  // so a higher ratio (e.g. 0.3) could never be reached and never fire.
  const { ref, inView } = useInView<T>(0.15);
  const sent = useRef(false);

  useEffect(() => {
    if (inView && !sent.current) {
      sent.current = true;
      track("section_view", { section });
    }
  }, [inView, section]);

  return ref;
}
