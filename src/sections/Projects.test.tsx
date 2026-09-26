import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "../content/projects";
import { Projects } from "./Projects";

/** The card element that holds a project's heading. */
function card(title: string): HTMLElement {
  return screen.getByRole("heading", { name: title }).parentElement!;
}

describe("Projects", () => {
  it("links each project with a live demo to both the demo and its source", () => {
    render(<Projects />);

    const withDemo = projects.filter((p) => p.demoUrl);
    expect(withDemo.length).toBeGreaterThan(0);
    for (const project of withDemo) {
      const links = within(card(project.title));
      expect(links.getByRole("link", { name: "Live demo ↗" })).toHaveAttribute("href", project.demoUrl);
      expect(links.getByRole("link", { name: "GitHub ↗" })).toHaveAttribute("href", project.url);
    }
  });

  it("shows every project, with 'In progress' only for unpublished ones", () => {
    render(<Projects />);

    for (const project of projects) {
      expect(screen.getByRole("heading", { name: project.title })).toBeInTheDocument();
    }
    expect(screen.queryAllByText("In progress")).toHaveLength(
      projects.filter((p) => p.url === null).length,
    );
  });
});
