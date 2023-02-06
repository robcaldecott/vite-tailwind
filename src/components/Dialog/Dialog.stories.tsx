import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from ".";

export default {
  component: Dialog,
} as Meta<typeof Dialog>;

export const Default: StoryObj<typeof Dialog> = {
  render: (args) => {
    return (
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        {...args}
      >
        <DialogTitle id="dialog-title">
          Use Google&apos;s location service?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" onClick={args.onClose}>
            Disagree
          </Button>
          <Button variant="primary" onClick={args.onClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  },
  args: {
    open: true,
  },
};
