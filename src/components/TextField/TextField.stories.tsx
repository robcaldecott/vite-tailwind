import { ComponentProps, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextField } from ".";

function Controlled(args: ComponentProps<typeof TextField>) {
  const [value, setValue] = useState(args.value || "");
  return (
    <TextField
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default {
  title: "Components/TextField",
  component: TextField,
  render: (args) => <Controlled {...args} />,
} as Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: false,
    isRequired: false,
  },
};

export const Error: Story = {
  args: {
    type: "email",
    label: "Email address",
    placeholder: "you@company.com",
    value: "george@krugerindustrial.",
    isRequired: false,
    error: "Please enter a valid email address",
  },
};
