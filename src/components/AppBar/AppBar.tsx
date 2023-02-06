import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export function AppBar({
  className,
  ...props
}: ComponentPropsWithoutRef<"header">) {
  return (
    <header
      className={clsx(
        "sticky top-0 z-10 flex h-12 min-h-full items-center bg-slate-600 px-4 text-white shadow-lg sm:px-6",
        className
      )}
      {...props}
    />
  );
}
