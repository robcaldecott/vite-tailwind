import { ComponentProps, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SearchField } from ".";

export default {
  title: "Components/SearchField",
  component: SearchField,
} as Meta<typeof SearchField>;

function Controlled(props: ComponentProps<typeof SearchField>) {
  const [value, setValue] = useState("");
  return (
    <SearchField
      value={value}
      onChange={(event) => setValue(event.target.value)}
      {...props}
    />
  );
}

export const Default: StoryObj<typeof SearchField> = {
  render: (args) => <Controlled {...args} />,
  args: {
    placeholder: "Filter vehicles",
    disabled: false,
  },
};
