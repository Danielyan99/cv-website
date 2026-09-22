import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { navLinks } from "../content/nav";
import { Header } from "./Header";

describe("Header", () => {
  it("renders a working link for every nav entry", () => {
    render(<Header />);

    for (const link of navLinks) {
      const anchor = screen.getByRole("link", { name: link.label });
      expect(anchor).toHaveAttribute("href", link.href);
    }
  });

  it("links the site name back to the top of the page", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Narek Danielyan" })).toHaveAttribute("href", "#top");
  });
});
