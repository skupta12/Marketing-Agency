"use client";

import Image from "next/image";
import { useState } from "react";

const BlurImage = ({
  src,
  fill,
  alt,
  quality,
  loading,
  priority,
  sizes,
  zoomIn,
  className,
}: {
  src: string;
  fill: boolean;
  alt: string;
  quality?: number;
  loading?: "eager" | "lazy" | undefined;
  priority?: boolean;
  sizes?: string;
  zoomIn?: string;
  className?: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Image
      src={src}
      className={`${className} object-cover ${
        zoomIn && "hover:scale-110 transition-all duration-300"
      } 
      ${
        isLoading
          ? "scale-110 blur-2xl grayscale-[50%]"
          : "scale-100 blur-0 grayscale-0"
      }`}
      fill={fill}
      onLoadingComplete={() => setIsLoading(false)}
      alt={alt}
      quality={quality}
      loading={loading}
      priority={priority}
      sizes={sizes}
    />
  );
};

export default BlurImage;
