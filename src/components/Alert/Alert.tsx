import type { ReactNode } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { Text } from "../Text";

interface AlertProps {
  label: ReactNode;
  action?: ReactNode;
  grow?: boolean;
}

export const Alert = ({ label, action, grow }: AlertProps) => (
  <div
    className={clsx(
      "flex min-w-0 items-center space-x-2 rounded-md bg-red-100 px-4 py-2 dark:bg-red-800",
      action ? "pr-1" : "pr-4",
      grow && "grow"
    )}
  >
    <ExclamationCircleIcon
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-red-500"
    />

    <Text variant="body1" flexGrow={1} minWidth={0} noWrap>
      {label}
    </Text>

    {action && <div className="shrink-0">{action}</div>}
  </div>
);
