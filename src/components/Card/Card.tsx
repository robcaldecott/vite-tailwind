import { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";
import { Text } from "../Text";

interface CardProps extends ComponentPropsWithoutRef<"div"> {}

export const Card = ({ className, ...props }: CardProps) => (
  <div
    className={clsx(
      "overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-800",
      className
    )}
    {...props}
  />
);

interface CardHeaderProps
  extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  title: ReactNode;
  subheader: ReactNode;
  divider?: boolean;
}

export const CardHeader = ({
  title,
  subheader,
  divider,
  className,
  ...props
}: CardHeaderProps) => (
  <div
    className={clsx(
      "flex flex-col bg-sky-50 p-4 dark:bg-sky-900",
      divider && "border-b border-b-slate-300 dark:border-b-slate-600",
      className
    )}
    {...props}
  >
    <Text variant="h2" noWrap>
      {title}
    </Text>
    <Text variant="body1" color="secondary" noWrap>
      {subheader}
    </Text>
  </div>
);

interface CardContentProps extends ComponentPropsWithoutRef<"div"> {
  divider?: boolean;
}

export const CardContent = ({ divider, ...props }: CardContentProps) => (
  <div
    className={clsx(
      "p-4",
      divider && "border-b border-b-slate-300 dark:border-b-slate-600"
    )}
    {...props}
  />
);

interface CardActionsProps extends ComponentPropsWithoutRef<"div"> {}

export const CardActions = ({ className, ...props }: CardActionsProps) => (
  <div
    className={clsx(
      "flex items-center space-x-2 bg-sky-50 p-2 dark:bg-sky-900",
      className
    )}
    {...props}
  />
);
