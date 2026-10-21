import { afterEach, describe, expect, it, vi } from "vitest";
import { loadAnalytics, SITE_DOMAIN, track, UMAMI_SCRIPT_URL } from "./analytics";

afterEach(() => {
  delete window.umami;
  document.head.querySelectorAll("script").forEach((s) => s.remove());
});

describe("track", () => {
  it("does nothing when Umami isn't loaded", () => {
    expect(() => track("cv_download", { location: "hero" })).not.toThrow();
  });

  it("sends the event name and props to Umami", () => {
    const umamiTrack = vi.fn();
    window.umami = { track: umamiTrack };

    track("project_click", { project: "coachdesk", link: "demo" });

    expect(umamiTrack).toHaveBeenCalledWith("project_click", {
      project: "coachdesk",
      link: "demo",
    });
  });

  it("never throws when Umami itself fails", () => {
    window.umami = {
      track: () => {
        throw new Error("blocked");
      },
    };
    expect(() => track("email_click", { location: "footer" })).not.toThrow();
  });
});

describe("loadAnalytics", () => {
  it("adds nothing without a website ID", () => {
    loadAnalytics(undefined);
    loadAnalytics("");
    expect(document.querySelector(`script[src="${UMAMI_SCRIPT_URL}"]`)).toBeNull();
  });

  it("adds the tracker once, limited to the real domain", () => {
    loadAnalytics("abc-123");
    loadAnalytics("abc-123");

    const scripts = document.querySelectorAll<HTMLScriptElement>(
      `script[src="${UMAMI_SCRIPT_URL}"]`,
    );
    expect(scripts).toHaveLength(1);
    expect(scripts[0].dataset.websiteId).toBe("abc-123");
    expect(scripts[0].dataset.domains).toBe(SITE_DOMAIN);
    expect(scripts[0].defer).toBe(true);
  });
});
