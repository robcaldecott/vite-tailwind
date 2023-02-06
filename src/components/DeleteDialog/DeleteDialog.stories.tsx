import { Meta, StoryObj } from "@storybook/react";
import { DeleteDialog } from "./DeleteDialog";

export default {
  component: DeleteDialog,
} as Meta<typeof DeleteDialog>;

export const Open: StoryObj<typeof DeleteDialog> = {
  args: {
    open: true,
  },
};
