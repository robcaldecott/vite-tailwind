import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import clsx from "clsx";
import { TextFieldError, TextFieldLabel } from "../TextField";

export interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  label?: ReactNode;
  error?: ReactNode;
  isRequired?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, disabled, isRequired, label, error, ...props }, ref) => {
    return (
      <label className={clsx("block", className)}>
        {/* Label */}
        <TextFieldLabel disabled={disabled} isRequired={isRequired}>
          {label}
        </TextFieldLabel>

        {/* Select */}
        <span className="relative block">
          <select
            ref={ref}
            className={clsx(
              "block min-h-[40px] w-full appearance-none rounded-md border border-slate-300 bg-white px-2 py-2 font-sans text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition-colors placeholder-shown:italic hover:border-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-400 disabled:shadow-none disabled:hover:border-slate-300 dark:bg-slate-900 dark:text-white",
              className
            )}
            disabled={disabled}
            {...props}
          />

          {/* Icon */}
          <ChevronDownIcon
            aria-hidden="true"
            className={clsx(
              "pointer-events-none absolute inset-y-2 right-2 h-6 w-6",
              disabled ? "text-slate-300" : "text-slate-500"
            )}
          />
        </span>

        {/* Error */}
        {error && <TextFieldError>{error}</TextFieldError>}
      </label>
    );
  }
);

Select.displayName = "Select";
