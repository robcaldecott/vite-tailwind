import { DecoratorFn } from "@storybook/react";
import { IntlProvider } from "react-intl";
import { QueryClient, QueryClientProvider, setLogger } from "react-query";
import { initialize, mswDecorator } from "msw-storybook-addon";
import "../src/main.css";

// Disable `react-query` error logging
setLogger({
  error: () => {},
  log: (...params) => console.log(...params),
  warn: (...params) => console.warn(...params),
});

initialize({ onUnhandledRequest: "bypass" });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    stylePreview: true,
  },
  options: {
    storySort: {
      order: ["App"],
    },
  },
};

export const decorators: DecoratorFn[] = [
  mswDecorator as DecoratorFn,
  (Story) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
          retry: false,
        },
      },
    });

    return (
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale="en">
          <Story />
        </IntlProvider>
      </QueryClientProvider>
    );
  },
];
