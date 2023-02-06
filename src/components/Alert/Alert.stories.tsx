import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Alert } from ".";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta<typeof Alert>;

export const NoAction: StoryObj<typeof Alert> = {
  args: {
    label: "This is an alert without an action.",
  },
};

export const WithAction: StoryObj<typeof Alert> = {
  args: {
    label: "This is an alert with an action button.",
    action: <Button variant="secondary">Action</Button>,
  },
};
