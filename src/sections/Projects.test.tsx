import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "../content/projects";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("links a project with a live demo to both the demo and its source", () => {
    render(<Projects />);

    expect(screen.getByRole("link", { name: "Live demo ↗" })).toHaveAttribute(
      "href",
      "https://live-sports-scoreboard-seven.vercel.app",
    );
    expect(screen.getByRole("link", { name: "GitHub ↗" })).toHaveAttribute(
      "href",
      "https://github.com/Danielyan99/live-sports-scoreboard",
    );
  });

  it("shows every project, with 'In progress' only for unpublished ones", () => {
    render(<Projects />);

    for (const project of projects) {
      expect(screen.getByRole("heading", { name: project.title })).toBeInTheDocument();
    }
    expect(screen.getAllByText("In progress")).toHaveLength(
      projects.filter((p) => p.url === null).length,
    );
  });
});
