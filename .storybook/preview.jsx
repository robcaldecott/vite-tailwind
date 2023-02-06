import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initialize, mswDecorator } from "msw-storybook-addon";
import "../src/main.css";

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

export const decorators = [
  mswDecorator,
  (Story) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
          retry: false,
          cacheTime: 0,
        },
      },
      logger: {
        error: () => {},
        log: (...params) => console.log(...params),
        warn: (...params) => console.warn(...params),
      },
    });

    return (
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <IntlProvider locale="en">
            <Story />
          </IntlProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );
  },
];
