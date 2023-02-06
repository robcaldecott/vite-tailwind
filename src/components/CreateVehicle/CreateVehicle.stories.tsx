import { Meta, StoryObj } from "@storybook/react";
import { CreateVehicle } from ".";

export default {
  title: "Components/CreateVehicle",
  component: CreateVehicle,
} as Meta<typeof CreateVehicle>;

export const Submit: StoryObj<typeof CreateVehicle> = {
  args: {
    onSubmit: () => {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    },
  },
};
