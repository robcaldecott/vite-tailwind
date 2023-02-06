import { ComponentProps, ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Text } from "../Text";

interface ListProps extends ComponentPropsWithoutRef<"ul"> {
  dividers?: boolean;
  padding?: boolean;
}

export function List({ dividers, padding, className, ...props }: ListProps) {
  return (
    <ul
      className={clsx(
        padding && "py-2",
        dividers && "divide-y divide-slate-300 dark:divide-slate-500",
        className
      )}
      {...props}
    />
  );
}

export function ListItem({
  className,
  ...props
}: ComponentPropsWithoutRef<"li">) {
  return (
    <li
      className={clsx(
        "flex w-full items-center justify-start space-x-2 py-2 px-4 outline-none focus:bg-slate-200 dark:focus:bg-slate-700",
        className
      )}
      {...props}
    />
  );
}

export function ListItemLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      className={clsx(
        "flex w-full items-center justify-start space-x-2 py-2 px-4 text-left outline-none hover:bg-slate-100/75 focus:bg-slate-200 dark:hover:bg-slate-700/75 dark:focus:bg-slate-700",
        className
      )}
      {...props}
    />
  );
}

interface ListItemTextProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  primary: ReactNode;
  secondary: ReactNode;
}

export function ListItemText({
  className,
  primary,
  secondary,
  ...props
}: ListItemTextProps) {
  return (
    <div className={clsx("my-[6px] min-w-0 flex-auto", className)} {...props}>
      <Text component="span" variant="body1" block noWrap>
        {primary}
      </Text>
      <Text component="p" variant="body2" color="secondary" block noWrap>
        {secondary}
      </Text>
    </div>
  );
}
