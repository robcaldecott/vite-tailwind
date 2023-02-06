import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { it, expect, vi, beforeAll, afterAll } from "vitest";
import { handlers } from "@/mocks/handlers";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { App } from ".";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());

function Wrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        retry: 0,
        cacheTime: 0,
      },
    },
    logger: {
      error: () => vi.fn(),
      log: (...args) => console.log(...args),
      warn: (...args) => console.warn(...args),
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale="en">
        <ThemeProvider>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </ThemeProvider>
      </IntlProvider>
    </QueryClientProvider>
  );
}

it("renders the vehicles route", async () => {
  render(<Wrapper />);
  expect(await screen.findByLabelText(/loading/i)).toBeInTheDocument();
  expect(
    await screen.findByRole("heading", { name: /vehicles/i })
  ).toBeInTheDocument();
});

it("renders the details route", async () => {
  render(<Wrapper />);
  expect(await screen.findByLabelText(/loading/i)).toBeInTheDocument();
  expect(
    await screen.findByRole("heading", { name: /vehicles/i })
  ).toBeInTheDocument();
  // Select a vehicle
  const list = within(screen.getByRole("list"));
  // Click on the first vehicle
  await userEvent.click(list.getAllByRole("link")[0]);
  // Wait for the page to load
  expect(await screen.findByLabelText(/loading/i)).toBeInTheDocument();
  expect(await screen.findByLabelText(/vehicle details/i)).toBeInTheDocument();
});

it("renders the create route", async () => {
  render(<Wrapper />);
  expect(await screen.findByLabelText(/loading/i)).toBeInTheDocument();
  await userEvent.click(
    await screen.findByRole("link", { name: /create vehicle/i })
  );
  expect(
    await screen.findByRole("heading", { name: /create new vehicle/i })
  ).toBeInTheDocument();
});
