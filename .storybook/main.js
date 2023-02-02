module.exports = {
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
