import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "storybook-dark-mode",
    "@storybook/addon-interactions",
  ],
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
