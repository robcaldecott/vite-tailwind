import type { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { TextFieldLabel, TextFieldError, TextFieldInput } from "../TextField";

export interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  label?: ReactNode;
  error?: ReactNode;
  isRequired?: boolean;
}

export const Select = ({
  className,
  disabled,
  isRequired,
  label,
  error,
  ...props
}: SelectProps) => (
  <label className={clsx("block", className)}>
    {/* Label */}
    <TextFieldLabel disabled={disabled} isRequired={isRequired}>
      {label}
    </TextFieldLabel>

    {/* Select */}
    <span className="relative block">
      <TextFieldInput
        component="select"
        className="appearance-none"
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
