import { MemoryRouter } from "react-router-dom";
import StarIcon from "@heroicons/react/24/solid/StarIcon";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { Fab } from ".";

test("icon", () => {
  render(
    <MemoryRouter>
      <Fab to="/" aria-label="fab" icon={StarIcon} />
    </MemoryRouter>
  );
  expect(screen.getByRole("link", { name: /fab/i })).toBeInTheDocument();
});

test("label", () => {
  render(
    <MemoryRouter>
      <Fab to="/" aria-label="fab" icon={StarIcon} label="Label" />
    </MemoryRouter>
  );
  expect(screen.getByRole("link", { name: /fab/i })).toBeInTheDocument();
  expect(screen.getByText(/label/i)).toBeInTheDocument();
});
