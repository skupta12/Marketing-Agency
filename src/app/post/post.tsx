import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchFilteredBlogs } from "@/lib/data";

export default async function Post({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  // artificial delay
  const delayData = async () => {
    await new Promise(resolve => setTimeout(resolve, 700));
    return await fetchFilteredBlogs(query, currentPage);
  };

  const blogs = await delayData();


  return (
    <div className="grid grid-cols-12 gap-x-7 sm:gap-y-18 gap-y-14">
      {blogs.map(({ id, url, src, label, text, date }) => (
        <div key={id} className="lg:col-span-4 md:col-span-6 col-span-12">
          <Link className="relative" href={`/post/${url}`}> {/* dynamic route */}
            <Image
              className="w-full"
              width={600}
              height={450}
              src={src}
              alt="blog image"
            />
            <div className="absolute content-[''] top-0 left-0 right-0 bottom-0 inset-0 hover:bg-white hover:bg-opacity-15 transition" />
          </Link>
          <div>
            <span className="text-[15px] inline-block font-semibold border-2 border-black px-4 py-1 rounded-full my-5">
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
