import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { experience } from "../content/experience";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("shows the short headline by default, not the full CV bullets", () => {
    render(<Experience />);
    const firstRole = experience[0];

    expect(screen.getByText(firstRole.headline[0])).toBeInTheDocument();
    // A detail bullet that isn't also a headline bullet shouldn't be visible yet.
    const detailOnly = firstRole.details.find((detail) => !firstRole.headline.includes(detail));
    expect(detailOnly).toBeDefined();
    expect(screen.queryByText(detailOnly!)).not.toBeInTheDocument();
  });

  it("reveals the full bullet list when 'Show details' is clicked, and hides it again", async () => {
    const user = userEvent.setup();
    render(<Experience />);
    const firstRole = experience[0];
    const detailOnly = firstRole.details.find((detail) => !firstRole.headline.includes(detail))!;

    const toggles = screen.getAllByRole("button", { name: "Show details" });
    await user.click(toggles[0]);

    expect(screen.getByText(detailOnly)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Hide details" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Hide details" }));
    expect(screen.queryByText(detailOnly)).not.toBeInTheDocument();
  });
});
