import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import { TextField } from ".";

test("with a label", async () => {
  const handleChange = vi.fn();
  render(<TextField label="Label" value="Value" onChange={handleChange} />);
  await userEvent.type(screen.getByRole("textbox", { name: /label/i }), "test");
  expect(handleChange).toHaveBeenCalled();
});

test("disabled", async () => {
  const handleChange = vi.fn();
  render(<TextField label="Label" value="" onChange={handleChange} disabled />);
  await userEvent.type(screen.getByRole("textbox", { hidden: true }), "test");
  expect(handleChange).not.toHaveBeenCalled();
});

test("error", () => {
  render(<TextField label="Label" error="Error" />);
  expect(screen.getByText(/error/i)).toBeDefined();
});
