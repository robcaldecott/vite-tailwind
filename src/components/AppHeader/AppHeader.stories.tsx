import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Text } from "../Text";
import { AppHeader } from ".";

export default {
  component: AppHeader,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<typeof AppHeader>;

type Story = StoryObj<typeof AppHeader>;

export const Default: Story = {
  args: {
    title: "Application Title",
  },
};

export const LongTitle: Story = {
  args: {
    title: "The quick brown fox jumps over the lazy dog",
  },
};

export const PageContent: Story = {
  render: (args) => (
    <>
      <AppHeader {...args} />

      {[...Array(100).keys()].map((key) => (
        <Text key={key}>This is line {key + 1}</Text>
      ))}
    </>
  ),
  args: {
    title: "Scrollable Content Example",
  },
};
