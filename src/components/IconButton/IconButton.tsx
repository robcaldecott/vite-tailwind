import { ComponentPropsWithoutRef, ElementType } from "react";
import clsx from "clsx";

export interface IconButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "children"> {
  icon: ElementType;
  color?: "primary" | "inherit";
  edge?: "start" | "end";
}

export function IconButton({
  icon: Icon,
  color = "primary",
  edge,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center rounded-2xl p-3 hover:bg-black/5",
        edge === "end" && "-mr-3",
        edge === "start" && "-ml-3"
      )}
      {...props}
    >
      <Icon
        className={clsx(
          "h-5 w-5",
          color === "primary" && "text-sky-500",
          color === "inherit" && "text-inherit"
        )}
        aria-hidden="true"
      />
    </button>
  );
}
