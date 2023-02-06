import { FormattedMessage } from "react-intl";
import { Button } from "../Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "../Dialog";

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export function DeleteDialog(props: DeleteDialogProps) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
      <DialogTitle id="delete-dialog-title">
        <FormattedMessage
          id="bb8265"
          defaultMessage="Delete vehicle"
        />
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-dialog-description">
          <FormattedMessage
            id="64de95"
            defaultMessage="Are you really sure you want to delete this vehicle?"
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="secondary" onClick={props.onClose}>
          <FormattedMessage id="ea4788" defaultMessage="Cancel" />
        </Button>
        <Button variant="error" onClick={props.onDelete}>
          <FormattedMessage id="f2a6c4" defaultMessage="Delete" />
        </Button>
      </DialogActions>
    </Dialog>
  );
}
