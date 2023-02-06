import StarIcon from "@heroicons/react/24/solid/StarIcon";
import { Meta, StoryObj } from "@storybook/react";
import { ResponsiveFab } from ".";

export default {
  component: ResponsiveFab,
  args: {
    icon: StarIcon,
    to: "/",
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof ResponsiveFab>;

export const Star: StoryObj<typeof ResponsiveFab> = {
  args: {
    label: "Responsive",
  },
};
