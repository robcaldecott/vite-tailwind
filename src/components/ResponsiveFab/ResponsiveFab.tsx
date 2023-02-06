import { ComponentProps } from "react";
import { Fab } from "../Fab";

export function ResponsiveFab({
  icon,
  label,
  ...props
}: ComponentProps<typeof Fab>) {
  return (
    <>
      <div className="fixed right-4 bottom-4 block md:hidden">
        <Fab icon={icon} {...props} />
      </div>

      <div className="fixed right-8 bottom-8 hidden md:block">
        <Fab icon={icon} label={label} {...props} />
      </div>
    </>
  );
}
