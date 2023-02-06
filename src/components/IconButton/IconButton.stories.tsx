import HeartIcon from "@heroicons/react/24/solid/HeartIcon";
import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";

export default {
  title: "Components/IconButton",
  component: IconButton,
  args: {
    icon: HeartIcon,
  },
} as Meta<typeof IconButton>;

export const Default: StoryObj<typeof IconButton> = {
  args: {
    color: "primary",
  },
};
