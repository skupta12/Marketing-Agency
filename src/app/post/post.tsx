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
  const blogs = await fetchFilteredBlogs(query, currentPage);

  return (
    <div className="grid grid-cols-12 gap-x-7 gap-y-20">
      {blogs.map(({ id, src, label, text, date }) => (
        <div key={id} className="lg:col-span-4 md:col-span-6 col-span-12">
          <Link className="relative" href={`/post/${''}`}> {/* dynamic route */}
            <Image
              className="w-full"
              width={400}
              height={290}
              src={src}
              alt="blog image"
            />
            <div className="absolute content-[''] top-0 left-0 right-0 bottom-0 inset-0 hover:bg-white hover:bg-opacity-15 transition" />
          </Link>
          <div>
            <span className="inline-block font-semibold border-2 border-black px-4 py-1 rounded-full my-6">
              {label}
            </span>
            <Link href={`/post/${''}`}> {/* dynamic route */}
              <h5 className="block sm:text-[30px] text-[24px] font-semibold mb-4 pr-5">
                {text}
              </h5>
            </Link>
            <span className="text-gray-500 font-medium text-[18px]">
              {date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
