import { Meta, StoryObj } from "@storybook/react";
import { Paper } from "../Paper";
import { List, ListItem, ListItemText, ListItemLink } from ".";

export default {
  title: "Components/List",
  component: List,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <Paper>
        <Story />
      </Paper>
    ),
  ],
} as Meta<typeof List>;

type Story = StoryObj<typeof List>;

const data = [
  {
    primary: "The quick brown fox jumps over the lazy dog.",
    secondary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    primary:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    secondary:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const Static: Story = {
  args: {
    children: (
      <>
        {data.map(({ primary, secondary }, index) => (
          <ListItem key={index}>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
      </>
    ),
    dividers: true,
    padding: false,
  },
};

export const Links: Story = {
  args: {
    children: (
      <>
        {data.map(({ primary, secondary }, index) => (
          <ListItemLink key={index} to="/">
            <ListItemText primary={primary} secondary={secondary} />
          </ListItemLink>
        ))}
      </>
    ),
    dividers: true,
    padding: false,
  },
};
