import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Meta, StoryObj } from "@storybook/react";
import { Fab } from "./Fab";

export default {
  component: Fab,
  args: {
    to: "/",
  },
} as Meta<typeof Fab>;

type Story = StoryObj<typeof Fab>;

export const Icon: Story = {
  args: {
    icon: PlusIcon,
  },
};

export const Label: Story = {
  args: {
    icon: PlusIcon,
    label: "Create Vehicle",
  },
};

export const Fixed: Story = {
  args: {
    className: "fixed bottom-8 right-8",
    icon: PlusIcon,
  },
};
