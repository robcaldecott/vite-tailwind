import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from ".";

export default {
  component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof Breadcrumbs>;

export const HomeOnly: Story = {};

export const RegistrationNumber: Story = {
  args: {
    registrationNumber: "ABC 123",
  },
};
