import Image from "next/image";
import React from "react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function BlogSkeletonItem() {
  return (
    <>
      <div className={`lg:col-span-4 md:col-span-6 col-span-12`}>
        <Image
          className="w-full"
          src="/blog-placeholder.jpg"
          alt="blog"
          width={500}
          height={500}
        />
        <div>
          <span
            className={`w-20 h-10 bg-gray-200 inline-block px-4 py-1 my-6 rounded-full`}
          ></span>
          <div className="my-4">
            <h5 className="py-5 bg-slate-200 rounded-lg mb-6"></h5>
          </div>
          <span className="block py-3 bg-gray-200 rounded-lg"></span>
        </div>
      </div>
    </>
  );
}

export function PortfolioSkeletonItem() {
  return (
    <div className="md:col-span-6 col-span-12 relative overflow-hidden group">
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
      className="grid grid-cols-12 md:gap-5"
      data-aos="fade-up"
      data-aos-delay="400"
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
        className={`grid grid-cols-12 gap-x-4 gap-y-20 relative 
      data-aos="fade-up"
        data-aos-delay="400">`}
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
