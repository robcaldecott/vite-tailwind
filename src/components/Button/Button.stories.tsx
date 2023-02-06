import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    variant: "primary",
    disabled: false,
  },
};
