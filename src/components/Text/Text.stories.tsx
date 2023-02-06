import { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

export default {
  title: "Components/Text",
  component: Text,
} as Meta<typeof Text>;

export const Default: StoryObj<typeof Text> = {
  args: {
    children: "Text",
  },
};
