import React from "react";
import Link from "next/link";
import { fetchFilteredBlogs } from "@/lib/data";
import Image from "next/image";
import BlurImage from "@/components/BlurImage";

export default async function Post({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {

  // artificial delay
  const delayData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 250));
    return await fetchFilteredBlogs(query, currentPage);
  };

  const blogs = await delayData();

  return (
    <div className="grid grid-cols-12 sm:gap-x-7 gap-x-6 sm:gap-y-18 gap-y-14">
      {blogs?.map(({ id, url, src, label, text, date, blur }) => (
        <div key={id} className="lg:col-span-4 md:col-span-6 col-span-12">
          <Link className="relative" href={`/post/${url}`}>
            <div className="relative overflow-hidden h-[260px]">
              <Image
                className="object-cover"
                fill
                src={src}
                alt="blog post image"
                quality={90}
                priority
                loading="eager"
                placeholder="blur"
                blurDataURL={blur}
                sizes="(min-width: 1360px) 400px, (min-width: 1040px) 
                calc(27.89vw - 15px), (min-width: 780px) calc(50vw - 70px), 
                (min-width: 380px) calc(100vw - 32px), calc(33.33vw + 208px)"
              />
            </div>
            <div
              className="absolute content-[''] top-0 left-0 right-0 bottom-0 inset-0 
            hover:bg-white hover:bg-opacity-15 transition"
            />
          </Link>
          <div>
            <span
              className="text-[15px] inline-block font-semibold border-2 border-black 
            px-4 py-1 rounded-full my-5"
            >
              {label}
            </span>
            <Link href={`/post/${url}`}>
              <h5 className="block sm:text-[28px] text-[24px] font-semibold mb-3 pr-5">
                {text}
              </h5>
            </Link>
            <span className="text-gray-500 font-medium text-[16px]">
              {date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
