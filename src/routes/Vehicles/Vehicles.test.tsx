import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, expect, it, vi } from "vitest";
import { FilterProvider } from "@/providers/FilterProvider";
import Vehicles from ".";

const vehicles = [
  {
    id: "5e0562c5-a50b-42ff-83e5-4c004c5b639a",
    manufacturer: "Volkswagen",
    model: "Explorer",
    type: "Cargo Van",
    fuel: "Gasoline",
    vin: "1USTAN9Z5MNT86399",
    color: "teal",
    mileage: 70609,
    registrationDate: "2005-07-08T16:58:36.380Z",
    registrationNumber: "TE52 HWW",
  },
];

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

function Wrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        retry: 0,
      },
    },
    logger: {
      error: () => vi.fn(),
      log: (...args) => console.log(...args),
      warn: (...args) => console.warn(...args),
    },
  });

  return (
    <MemoryRouter>
      <IntlProvider locale="en">
        <QueryClientProvider client={queryClient}>
          <FilterProvider>
            <Vehicles />
          </FilterProvider>
        </QueryClientProvider>
      </IntlProvider>
    </MemoryRouter>
  );
}

it("loads vehicles", async () => {
  server.use(
    rest.get("/api/vehicles", (req, res, ctx) => res(ctx.json(vehicles)))
  );
  render(<Wrapper />);
  // Loading state
  expect(screen.getByLabelText(/loading vehicles/i)).toBeInTheDocument();
  // Wait for the list to load
  const card = within(await screen.findByLabelText(/vehicle list/i));
  const list = within(card.getByRole("list"));
  expect(
    list.getByRole("link", {
      name: /volkswagen explorer cargo van gasoline te52 hww/i,
    })
  ).toBeInTheDocument();
});

it("handles an error loading the vehicles", async () => {
  server.use(
    rest.get("/api/vehicles", (req, res, ctx) => res(ctx.status(500)))
  );
  render(<Wrapper />);
  expect(
    await screen.findByRole("heading", { name: /something went wrong!/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/500 internal server error/i)).toBeInTheDocument();
  // Try again should reload
  await userEvent.click(screen.getByRole("button", { name: /try again/i }));
  // Wait for the loading card
  expect(await screen.findByLabelText(/loading vehicles/i)).toBeInTheDocument();
});

it("handles no search results", async () => {
  server.use(
    rest.get("/api/vehicles", (req, res, ctx) => res(ctx.json(vehicles)))
  );
  render(<Wrapper />);
  await userEvent.type(await screen.findByPlaceholderText(/search/i), "test");
  expect(
    screen.getByRole("heading", { name: /no matching vehicles found\./i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/please try a different filter./i)
  ).toBeInTheDocument();
});
