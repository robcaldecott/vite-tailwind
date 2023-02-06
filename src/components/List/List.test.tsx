import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import { List, ListItem, ListItemText, ListItemLink } from ".";

it("renders as a list", () => {
  render(
    <List>
      <ListItem>
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItem>
    </List>
  );
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getByRole("listitem")).toHaveTextContent(/primary/i);
  expect(screen.getByRole("listitem")).toHaveTextContent(/secondary/i);
});

it("renders as a link", () => {
  render(
    <MemoryRouter>
      <List>
        <ListItemLink to="/">
          <ListItemText primary="Primary" secondary="Secondary" />
        </ListItemLink>
      </List>
    </MemoryRouter>
  );
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveTextContent(/primary/i);
  expect(screen.getByRole("link")).toHaveTextContent(/secondary/i);
});
