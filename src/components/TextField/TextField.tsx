import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import clsx from "clsx";

export interface TextFieldLabelProps extends ComponentPropsWithoutRef<"span"> {
  disabled?: boolean;
  isRequired?: boolean;
}

export function TextFieldLabel({
  disabled,
  isRequired,
  ...props
}: TextFieldLabelProps) {
  return (
    <span
      className={clsx(
        "mb-1 block font-sans text-sm font-medium",
        disabled
          ? "text-slate-400 dark:text-slate-600"
          : "text-slate-900 dark:text-slate-300",
        isRequired && "after:ml-0.5 after:content-['*']",
        isRequired && {
          "after:text-sky-500 dark:after:text-sky-300": !disabled,
          "after:text-slate-400": disabled,
        }
      )}
      {...props}
    />
  );
}

export function TextFieldError(props: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className="mt-2 font-sans text-sm font-light text-red-500 dark:text-red-300"
      {...props}
    />
  );
}

interface TextFieldInputProps {
  rounded?: boolean;
  hasIcon?: boolean;
}

export const TextFieldInput = forwardRef<
  HTMLInputElement,
  TextFieldInputProps & ComponentPropsWithoutRef<"input">
>(({ rounded, hasIcon, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(
        "block min-h-[40px] w-full border border-slate-300 bg-white py-2 font-sans text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition-colors placeholder-shown:italic hover:border-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-400 disabled:shadow-none disabled:hover:border-slate-300 dark:bg-slate-900 dark:text-white",
        rounded ? "rounded-2xl" : "rounded-md",
        hasIcon ? "pl-9 pr-2" : "px-2",
        className
      )}
      {...props}
    />
  );
});

TextFieldInput.displayName = "TextFieldInput";

export interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
  label?: ReactNode;
  error?: ReactNode;
  isRequired?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, disabled, isRequired, label, error, ...props }, ref) => {
    return (
      <label className={clsx("block", className)}>
        {/* Label */}
        <TextFieldLabel disabled={disabled} isRequired={isRequired}>
          {label}
        </TextFieldLabel>

        {/* Input */}
        <TextFieldInput ref={ref} disabled={disabled} {...props} />

        {/* Error */}
        {error && <TextFieldError>{error}</TextFieldError>}
      </label>
    );
  }
);

TextField.displayName = "TextField";
