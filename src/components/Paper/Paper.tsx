import { ComponentPropsWithRef, ElementType } from "react";
import clsx from "clsx";

interface PaperProps<C extends ElementType> {
  component?: C;
}

export function Paper<C extends ElementType = "div">({
  component,
  className,
  ...props
}: PaperProps<C> & Omit<ComponentPropsWithRef<C>, keyof PaperProps<C>>) {
  const Component = component || "div";
  return (
    <Component
      className={clsx(
        "overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-800 dark:shadow-gray-800",
        className
      )}
      {...props}
    />
  );
}
