import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { ErrorMessage } from ".";

export default {
  title: "Components/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    controls: {
      include: ["error"],
    },
  },
} as Meta<typeof ErrorMessage>;

const error = new Error("An error occurred");

type Story = StoryObj<typeof ErrorMessage>;

export const WithoutAction: Story = {
  args: {
    error,
  },
};

export const WithAction: Story = {
  args: {
    error,
    action: <Button onClick={action("onClick")}>Action</Button>,
  },
};
