import Image from "next/image";
import React from "react";

const shimmer =
  "before:absolute before:inset-0 before:bg-gradient-to-r animate-pulse before:from-transparent before:via-white/70 before:to-transparent";

export function BlogSkeletonItem() {
  return (
    <>
      <div
        className={`${shimmer} relative oveflow-hidden lg:col-span-4 md:col-span-6 col-span-12`}
      >
        <div className="w-full aspect-[3/2]">
          <Image
            // className="object-cover object-center"
            src="/blog-placeholder.jpg"
            alt="placeholder image"
            width={600}
            height={450}
          />
        </div>
        <div>
          <span
            className={`w-20 h-8 bg-slate-200 inline-block px-4 py-1 my-5 rounded-full`}
          ></span>
          <div className="mb-3">
            <h5 className="w-[300px] py-4 bg-slate-200 rounded-lg"></h5>
          </div>
          <span className="w-64 block py-3 bg-slate-200 rounded-lg"></span>
        </div>
      </div>
    </>
  );
}

export function PortfolioSkeletonItem() {
  return (
    <div className={`${shimmer} md:col-span-6 col-span-12 relative overflow-hidden group`}>
      <Image
        className="w-full"
        width={800}
        height={800}
        src="/blog-placeholder.jpg"
        alt="portfolio image"
      />
    </div>
  );
}

export function PortfolioSkeleton() {
  return (
    <div
      className={`grid grid-cols-12 md:gap-5`}
    >
      <PortfolioSkeletonItem />
      <PortfolioSkeletonItem />
      <PortfolioSkeletonItem />
      <PortfolioSkeletonItem />
    </div>
  );
}

export default function BlogSkeleton() {
  return (
    <div className="relative">
      <div
        className="grid grid-cols-12 gap-x-7 gap-y-20 relative"
      >
        <BlogSkeletonItem />
        <BlogSkeletonItem />
        <BlogSkeletonItem />
        <BlogSkeletonItem />
        <BlogSkeletonItem />
        <BlogSkeletonItem />
      </div>
    </div>
  );
}
