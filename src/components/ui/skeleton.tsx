import type { ComponentProps } from "react";
import { cn } from "@/src/lib/utils";

export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#E7E9ED]", className)}
      {...props}
    />
  );
}
