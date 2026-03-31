"use client";

import { cn } from "@/src/lib/utils";
import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "@/src/components/ui/skeleton";

type ImageWithSkeletonProps = Omit<ImageProps, "onLoadingComplete" | "onError"> & {
  skeletonClassName?: string;
};

type LoadStatus = "pending" | "ok" | "fail";

/**
 * Full-bleed image inside a positioned parent; pulse skeleton until load, or if load fails / URL empty.
 */
export function ImageFillWithSkeleton({
  className,
  skeletonClassName,
  alt,
  src,
  ...rest
}: ImageWithSkeletonProps) {
  const [status, setStatus] = useState<LoadStatus>("pending");

  useEffect(() => {
    setStatus("pending");
  }, [src]);

  if (!src) {
    return null;
  }

  const showSkeleton = status !== "ok";

  return (
    <>
      {showSkeleton ? (
        <Skeleton
          className={cn("absolute inset-0 z-[1] rounded-[inherit]", skeletonClassName)}
          aria-hidden
        />
      ) : null}
      <Image
        {...rest}
        src={src}
        alt={alt}
        onLoadingComplete={() =>
          setStatus((s) => (s === "fail" ? "fail" : "ok"))
        }
        onError={() => setStatus("fail")}
        className={cn(
          className,
          showSkeleton && "opacity-0",
          !showSkeleton && "opacity-100",
          "transition-opacity duration-300",
        )}
      />
    </>
  );
}
