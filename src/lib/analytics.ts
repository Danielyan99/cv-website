/**
 * Privacy-friendly analytics (Umami Cloud): no cookies, no consent banner.
 *
 * The tracker script is only added in production builds when
 * VITE_UMAMI_WEBSITE_ID is set (see loadAnalytics), and it only sends data
 * from the real domain, so dev, preview and CI never pollute the stats.
 *
 * track() is safe to call anywhere: when Umami is missing (ad blocker,
 * tests, dev, script still loading) it silently does nothing.
 */

export type Location = "hero" | "work_with_me" | "contact" | "footer";

export interface AnalyticsEvents {
  cv_download: { location: Location };
  email_click: { location: Location };
  social_click: { network: "github" | "linkedin"; location: Location };
  project_click: { project: string; link: "demo" | "github" };
  experience_expand: { role: string; expanded: boolean };
  section_view: { section: "projects" | "work_with_me" | "contact" };
}

export type AnalyticsEventName = keyof AnalyticsEvents;

interface Umami {
  track: (name: string, data?: Record<string, string | number | boolean>) => void;
}

declare global {
  interface Window {
    umami?: Umami;
  }
}

export const UMAMI_SCRIPT_URL = "https://cloud.umami.is/script.js";
export const SITE_DOMAIN = "danielyan99.github.io";

export function track<N extends AnalyticsEventName>(name: N, props: AnalyticsEvents[N]): void {
  try {
    window.umami?.track(name, { ...props });
  } catch {
    // Analytics must never break the page.
  }
}

/** Adds the Umami tracker script once. Does nothing without a website ID. */
export function loadAnalytics(websiteId: string | undefined, doc: Document = document): void {
  if (!websiteId) return;
  if (doc.querySelector(`script[src="${UMAMI_SCRIPT_URL}"]`)) return;

  const script = doc.createElement("script");
  script.defer = true;
  script.src = UMAMI_SCRIPT_URL;
  script.dataset.websiteId = websiteId;
  // Only count visits on the real site, never localhost or previews.
  script.dataset.domains = SITE_DOMAIN;
  doc.head.appendChild(script);
}
