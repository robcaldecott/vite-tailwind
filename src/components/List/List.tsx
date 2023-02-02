import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  forwardRef,
} from "react";
import clsx from "clsx";
import { Text } from "../Text";

interface ListProps extends ComponentPropsWithoutRef<"ul"> {
  dividers?: boolean;
  padding?: boolean;
}

export const List = ({ dividers, padding, className, ...props }: ListProps) => (
  <ul
    className={clsx(
      padding && "py-2",
      dividers && "divide-y divide-slate-300 dark:divide-slate-500",
      className
    )}
    {...props}
  />
);

interface ListItemProps<C extends ElementType> {
  component?: C;
  button?: boolean;
}

export const ListItem = <C extends ElementType = "li">({
  component,
  button,
  className,
  divider,
  ...props
}: ListItemProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof ListItemProps<C>>) => {
  const Component = component || "li";
  return (
    <Component
      className={clsx(
        "flex w-full items-center justify-start space-x-2 py-2 px-4 outline-none focus:bg-slate-200 dark:focus:bg-slate-700",
        button && "text-left hover:bg-slate-100/75 dark:hover:bg-slate-700/75",
        className
      )}
      {...props}
    />
  );
};

interface ListItemTextProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  primary: ReactNode;
  secondary: ReactNode;
}

export const ListItemText = ({
  className,
  primary,
  secondary,
  ...props
}: ListItemTextProps) => (
  <div className={clsx("my-[6px] min-w-0 flex-auto", className)} {...props}>
    <Text component="span" variant="body1" block noWrap>
      {primary}
    </Text>
    <Text component="p" variant="body2" color="secondary" block noWrap>
      {secondary}
    </Text>
  </div>
);
