import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Alert } from ".";

const meta = {
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

export const NoAction: StoryObj<typeof meta> = {
  args: {
    label: "This is an alert without an action.",
  },
};

export const WithAction: StoryObj<typeof meta> = {
  args: {
    label: "This is an alert with an action button.",
    action: <Button variant="secondary">Action</Button>,
  },
};
