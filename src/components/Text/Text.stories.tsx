import { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

export default {
  component: Text,
} as Meta<typeof Text>;

export const Default: StoryObj<typeof Text> = {
  args: {
    children: "Text",
  },
};
