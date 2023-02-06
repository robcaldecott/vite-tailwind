import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import "../src/main.css";

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
  (Story) => {
    return (
      <MemoryRouter>
        <IntlProvider locale="en">
          <Story />
        </IntlProvider>
      </MemoryRouter>
    );
  },
];
