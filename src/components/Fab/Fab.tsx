import { ElementType, ReactNode } from "react";
import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export interface FabProps<C extends ElementType> {
  component?: C;
  icon: ElementType;
  label?: ReactNode;
}

export const Fab = <C extends ElementType = "button">({
  component,
  label,
  className,
  icon: Icon,
  ...props
}: FabProps<C> & Omit<ComponentPropsWithoutRef<C>, keyof FabProps<C>>) => {
  const Component = component || "button";
  return (
    <Component
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg hover:bg-sky-700",
        label ? "h-12 px-4 font-sans text-sm font-medium" : "h-14 w-14",
        className
      )}
      {...props}
    >
      <Icon className={clsx("h-6 w-6", label && "mr-2")} />
      {label}
    </Component>
  );
};
