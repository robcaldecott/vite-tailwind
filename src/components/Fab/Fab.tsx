import { ComponentProps, ElementType, ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface FabProps extends Omit<ComponentProps<typeof Link>, "children"> {
  icon: ElementType;
  label?: ReactNode;
}

export function Fab({ className, icon: Icon, label, ...props }: FabProps) {
  return (
    <Link
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg hover:bg-sky-700",
        label ? "h-12 px-4 font-sans text-sm font-medium" : "h-14 w-14",
        className
      )}
      {...props}
    >
      <Icon className={clsx("h-6 w-6", label && "mr-2")} />
      {label}
    </Link>
  );
}
