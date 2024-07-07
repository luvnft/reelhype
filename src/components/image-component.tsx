"use client";

import { CldImage } from "next-cloudinary";
import { cn } from "@/lib/utils";

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
}

export function ImageComponent({
  src,
  alt,
  width,
  height,
  className,
  fill = false,

  ...props
}: ImageComponentProps) {
  return (
    <CldImage
      src={src}
      deliveryType="fetch"
      alt={alt}
      width={width}
      height={height}
      className={cn(className)}
      fill={fill}
      {...props}
    />
  );
}
