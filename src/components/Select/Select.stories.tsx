import { ComponentProps, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

function Controlled(args: ComponentProps<typeof Select>) {
  const [value, setValue] = useState(args.value);
  return (
    <Select
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default {
  title: "Components/Select",
  component: Select,
  render: (args) => <Controlled {...args} />,
  args: {
    children: (
      <>
        <option value="" disabled>
          Select a fruit
        </option>
        <option value="apples">Apples</option>
        <option value="bananas">Bananas</option>
        <option value="oranges">Oranges</option>
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    error: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof Select>;

export const Default: StoryObj<typeof Select> = {
  args: {
    label: "Label",
    disabled: false,
    isRequired: false,
    value: "",
  },
};

export const Error: StoryObj<typeof Select> = {
  args: {
    label: "Label",
    disabled: false,
    isRequired: true,
    value: "",
    error: "Please select a fruit",
  },
};
