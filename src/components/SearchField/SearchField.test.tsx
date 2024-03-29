import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import { SearchField } from ".";

it("renders", () => {
  render(<SearchField placeholder="Search" />);
  expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Search");
});
