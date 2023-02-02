import type { ComponentPropsWithoutRef, ElementType } from "react";
import { Fab, FabProps } from "../Fab";

export const ResponsiveFab = <C extends ElementType = "button">({
  component,
  label,
  icon,
  ...props
}: FabProps<C> & Omit<ComponentPropsWithoutRef<C>, keyof FabProps<C>>) => {
  return (
    <>
      <div className="fixed right-4 bottom-4 block md:hidden">
        <Fab component={component as ElementType} icon={icon} {...props} />
      </div>

      <div className="fixed right-8 bottom-8 hidden md:block">
        <Fab
          component={component as ElementType}
          icon={icon}
          label={label}
          {...props}
        />
      </div>
    </>
  );
};
