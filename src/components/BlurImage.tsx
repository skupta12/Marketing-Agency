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
  placeholder,
  blurDataURL
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
  placeholder?: "empty" | "blur";
  blurDataURL?: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Image
      src={src}
      className={`${className} ${
        zoomIn && "hover:scale-110"
      } ${isLoading ? "object-cover" : "object-cover"}
     `}
      fill={fill}
      onLoad={() => setIsLoading(false)}
      alt={alt}
      quality={quality}
      loading={loading}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      sizes={sizes}
    />
  );
};

export default BlurImage;
