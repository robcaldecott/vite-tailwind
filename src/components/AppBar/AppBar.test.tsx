import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import { AppBar } from ".";

it("renders", () => {
  render(<AppBar>Content</AppBar>);
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByText(/content/i)).toBeInTheDocument();
});
