import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import { Logo } from ".";

it("renders", () => {
  render(<Logo />);
  expect(screen.getByRole("img", { name: /vite logo/i })).toBeInTheDocument();
});
