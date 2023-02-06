import { ComponentPropsWithoutRef } from "react";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import clsx from "clsx";
import { TextFieldInput } from "../TextField";

export function SearchField({
  className,
  disabled,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <label className={clsx("block", className)}>
      {/* Input */}
      <span className="relative block">
        <TextFieldInput disabled={disabled} rounded hasIcon {...props} />

        {/* Icon */}
        <span className="pointer-events-none absolute inset-y-0 left-2 flex items-center">
          <MagnifyingGlassIcon
            aria-hidden="true"
            className={clsx(
              "h-6 w-6",
              disabled ? "text-slate-300" : "text-slate-500"
            )}
          />
        </span>
      </span>
    </label>
  );
}
