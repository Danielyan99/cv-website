import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "../content/projects";
import { Projects } from "./Projects";

/** The card (article) that holds a project's heading. */
function card(title: string): HTMLElement {
  return screen.getByRole("heading", { name: title }).closest("article")!;
}

describe("Projects", () => {
  it("links each project with a live demo to both the demo and its source", () => {
    render(<Projects />);

    const withDemo = projects.filter((p) => p.demoUrl);
    expect(withDemo.length).toBeGreaterThan(0);
    for (const project of withDemo) {
      const inCard = within(card(project.title));
      expect(inCard.getByRole("link", { name: "Live demo ↗" })).toHaveAttribute("href", project.demoUrl);
      expect(inCard.getByRole("link", { name: "GitHub ↗" })).toHaveAttribute("href", project.url);
      expect(inCard.getByText("Live")).toBeInTheDocument();
    }
  });

  it("shows the key facts and tech stack of featured projects", () => {
    render(<Projects />);

    for (const project of projects.filter((p) => p.featured)) {
      const inCard = within(card(project.title));
      for (const fact of project.featured!.facts) {
        expect(inCard.getByText(fact.value)).toBeInTheDocument();
        expect(inCard.getByText(fact.label)).toBeInTheDocument();
      }
      const stack = inCard.getByRole("list", { name: "Tech stack" });
      expect(within(stack).getAllByRole("listitem").map((li) => li.textContent)).toEqual(project.tags);
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

  it("keeps the drawn previews out of the accessibility tree", () => {
    const { container } = render(<Projects />);
    const previews = container.querySelectorAll("svg");
    expect(previews.length).toBe(projects.filter((p) => p.featured).length);
    for (const svg of previews) expect(svg.closest("[aria-hidden='true']")).not.toBeNull();
  });
});
