import { IntlProvider } from "react-intl";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { ErrorMessage } from ".";

it("renders without an action", () => {
  render(
    <IntlProvider locale="en">
      <ErrorMessage error={new Error("An error occurred")} />
    </IntlProvider>
  );
  expect(
    screen.getByRole("heading", { name: /something went wrong!/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/an error occurred/i)).toBeInTheDocument();
});

it("renders with an action", async () => {
  render(
    <IntlProvider locale="en">
      <ErrorMessage
        error={new Error("An error occurred")}
        action={<button>Action</button>}
      />
    </IntlProvider>
  );
  await userEvent.click(screen.getByRole("button", { name: /action/i }));
});
