import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Footer } from "../components/Footer";
import { Contact } from "../sections/Contact";
import { Experience } from "../sections/Experience";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { WorkWithMe } from "../sections/WorkWithMe";

const umamiTrack = vi.fn();

// Keep clicks from trying to navigate in jsdom; we only care about the event.
function preventNavigation(event: MouseEvent) {
  event.preventDefault();
}

beforeEach(() => {
  umamiTrack.mockClear();
  window.umami = { track: umamiTrack };
  document.addEventListener("click", preventNavigation);
});

afterEach(() => {
  delete window.umami;
  document.removeEventListener("click", preventNavigation);
});

describe("click tracking", () => {
  it("tracks the CV download from the hero and opens it in a new tab", async () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: "Download CV" });
    expect(link).toHaveAttribute("target", "_blank");

    await userEvent.click(link);
    expect(umamiTrack).toHaveBeenCalledWith("cv_download", { location: "hero" });
  });

  it("tracks project demo and GitHub clicks with the project id", async () => {
    render(<Projects />);
    await userEvent.click(screen.getAllByRole("link", { name: /Live demo/ })[0]);
    await userEvent.click(screen.getAllByRole("link", { name: /GitHub/ })[0]);

    expect(umamiTrack).toHaveBeenCalledWith("project_click", {
      project: "live-scoreboard",
      link: "demo",
    });
    expect(umamiTrack).toHaveBeenCalledWith("project_click", {
      project: "live-scoreboard",
      link: "github",
    });
  });

  it("tracks email clicks with where they came from", async () => {
    render(
      <>
        <WorkWithMe />
        <Contact />
      </>,
    );
    await userEvent.click(screen.getByRole("link", { name: "Book a call" }));
    await userEvent.click(screen.getByRole("link", { name: /@gmail\.com/ }));

    expect(umamiTrack).toHaveBeenCalledWith("email_click", { location: "work_with_me" });
    expect(umamiTrack).toHaveBeenCalledWith("email_click", { location: "contact" });
  });

  it("tracks footer social and email links", async () => {
    render(<Footer />);
    await userEvent.click(screen.getByRole("link", { name: "GitHub" }));
    await userEvent.click(screen.getByRole("link", { name: "LinkedIn" }));
    await userEvent.click(screen.getByRole("link", { name: "Email" }));

    expect(umamiTrack).toHaveBeenCalledWith("social_click", {
      network: "github",
      location: "footer",
    });
    expect(umamiTrack).toHaveBeenCalledWith("social_click", {
      network: "linkedin",
      location: "footer",
    });
    expect(umamiTrack).toHaveBeenCalledWith("email_click", { location: "footer" });
  });

  it("tracks experience expand and collapse", async () => {
    render(<Experience />);
    await userEvent.click(screen.getAllByRole("button", { name: "Show details" })[0]);
    await userEvent.click(screen.getAllByRole("button", { name: "Hide details" })[0]);

    expect(umamiTrack).toHaveBeenCalledWith("experience_expand", {
      role: "softconstruct",
      expanded: true,
    });
    expect(umamiTrack).toHaveBeenCalledWith("experience_expand", {
      role: "softconstruct",
      expanded: false,
    });
  });

  it("sends each section view only once", () => {
    const { rerender } = render(<Projects />);
    rerender(<Projects />);

    const views = umamiTrack.mock.calls.filter(([name]) => name === "section_view");
    expect(views).toEqual([["section_view", { section: "projects" }]]);
  });

  it("keeps working when Umami is blocked", async () => {
    delete window.umami;
    render(<Hero />);
    await userEvent.click(screen.getByRole("link", { name: "Download CV" }));
    expect(screen.getByRole("link", { name: "Download CV" })).toBeInTheDocument();
  });
});
