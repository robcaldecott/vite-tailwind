import { ComponentPropsWithoutRef } from "react";

interface SkeletonProps extends ComponentPropsWithoutRef<"span"> {
  height?: number | string;
}

export const Skeleton = ({ height, style, ...props }: SkeletonProps) => (
  <span
    // eslint-disable-next-line no-octal-escape
    className="block h-auto scale-y-75 animate-pulse rounded bg-gray-200 before:content-['\00a0'] dark:bg-gray-700"
    style={{ height, ...style }}
    {...props}
  />
);
