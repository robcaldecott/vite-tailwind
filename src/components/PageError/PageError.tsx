import { FormattedMessage } from "react-intl";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";

interface PageErrorProps {
  error: Error | null;
  refetch: () => void;
}

export function PageError(props: PageErrorProps) {
  return (
    <ErrorMessage
      error={props.error}
      action={
        <Button onClick={() => props.refetch()}>
          <FormattedMessage id="f915a9" defaultMessage="Try again" />
        </Button>
      }
    />
  );
}
