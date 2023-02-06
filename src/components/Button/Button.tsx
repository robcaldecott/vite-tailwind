import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "error";
}

export function Button({
  variant = "primary",
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        // Common styles
        "min-w-[72px] rounded-full border-2 px-4 py-2 font-sans text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:border-slate-100 disabled:bg-slate-100 disabled:text-slate-300 dark:ring-offset-slate-900 dark:focus-visible:ring-sky-300 dark:disabled:border-slate-600 dark:disabled:bg-slate-600 dark:disabled:text-slate-400",
        // Primary
        variant === "primary" &&
          "border-sky-500 bg-sky-500 text-white hover:border-sky-700 hover:bg-sky-700",
        // Secondary
        variant === "secondary" &&
          "border-slate-900 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-100 dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900",
        // Error
        variant === "error" &&
          "border-red-500 bg-transparent text-red-500 hover:bg-red-500 hover:text-white dark:border-red-500 dark:text-red-300 dark:hover:bg-red-500 dark:hover:text-white",
        // Additional classes
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}
