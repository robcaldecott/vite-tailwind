import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, expect, test } from "vitest";
import { Button } from ".";

test("click", async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Label</Button>);
  await userEvent.click(screen.getByRole("button", { name: /label/i }));
  expect(handleClick).toHaveBeenCalled();
});

test("disabled", async () => {
  const handleClick = vi.fn();
  render(
    <Button disabled onClick={handleClick}>
      Label
    </Button>
  );
  await userEvent.click(
    screen.getByRole("button", { name: /label/i, hidden: true })
  );
  expect(handleClick).not.toHaveBeenCalled();
});
