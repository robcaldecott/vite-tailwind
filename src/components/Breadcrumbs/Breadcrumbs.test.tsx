import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import { render, screen, within } from "@testing-library/react";
import { it, expect } from "vitest";
import { Breadcrumbs } from ".";

it("renders with a home link only", () => {
  render(
    <MemoryRouter>
      <IntlProvider locale="en">
        <Breadcrumbs />
      </IntlProvider>
    </MemoryRouter>
  );
  const nav = within(screen.getByRole("navigation"));
  const list = within(nav.getByRole("list"));
  const item = within(list.getByRole("listitem"));
  expect(item.getByRole("link", { name: /home/i })).toHaveAttribute(
    "href",
    "/"
  );
});

it("renders with a registration number", () => {
  render(
    <MemoryRouter>
      <IntlProvider locale="en">
        <Breadcrumbs registrationNumber="ABC 123" />
      </IntlProvider>
    </MemoryRouter>
  );
  const nav = within(screen.getByRole("navigation"));
  const list = within(nav.getByRole("list"));
  // We should have two items (the separator is hidden)
  const items = list.getAllByRole("listitem");
  expect(items).toHaveLength(2);
  // Home link
  const home = within(items[0]);
  expect(home.getByRole("link", { name: /home/i })).toHaveAttribute(
    "href",
    "/"
  );
  // Reg
  expect(items[1]).toHaveTextContent(/abc 123/i);
});
