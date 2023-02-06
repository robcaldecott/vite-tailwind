import { render, screen, within } from "@testing-library/react";
import { it, expect } from "vitest";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AppHeader } from ".";

it("renders", () => {
  render(
    <ThemeProvider>
      <AppHeader title="Application Title" />
    </ThemeProvider>
  );
  const header = within(screen.getByRole("banner"));
  expect(
    header.getByRole("heading", { name: /application title/i })
  ).toBeInTheDocument();
  expect(
    header.getByRole("button", { name: /toggle light\/dark mode/i })
  ).toBeInTheDocument();
});
