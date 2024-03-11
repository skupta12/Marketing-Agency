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
  blurDataUrl
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
  blurDataUrl?: string;
}) => {
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Image
      src={src}
      className={`${className} object-cover transition-all duration-100 scale-110 ${
        zoomIn && "hover:scale-110"
      } 
     `}
      fill={fill}
      // onLoad={() => setIsLoading(false)}
      alt={alt}
      quality={quality}
      loading={loading}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataUrl}
      sizes={sizes}
    />
  );
};

export default BlurImage;
