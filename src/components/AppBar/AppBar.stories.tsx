import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { AppBar } from ".";

export default {
  title: "Components/AppBar",
  component: AppBar,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AppBar>;

export const Default: StoryObj<typeof AppBar> = {
  render: (args) => (
    <AppBar {...args}>
      <Text component="h1" variant="h3" flexGrow={1} color="inherit">
        App Header
      </Text>
    </AppBar>
  ),
};
