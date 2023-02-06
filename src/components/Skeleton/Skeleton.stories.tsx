import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
} as Meta<typeof Skeleton>;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export const CustomHeight: Story = {
  args: {
    height: 96,
  },
};
