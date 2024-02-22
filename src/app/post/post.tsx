import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchBlog } from "@/lib/data";

// async component for blog
export default async function Post() {
  const delayData = async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return await fetchBlog();
  };

  const blogs = await delayData();
  
  return (
    <div
      className="grid grid-cols-12 gap-x-4 gap-y-20"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      {blogs?.map((item) => (
        <div key={item.id} className="lg:col-span-4 md:col-span-6 col-span-12">
          <Link className="relative" href="#">
            <Image
              className="w-full h-auto"
              width={400}
              height={290}
              src={item.src}
              alt="blog image"
            />
            <div className="absolute content-[''] top-0 left-0 right-0 bottom-0 inset-0 hover:bg-white hover:bg-opacity-15 transition" />
          </Link>
          <div>
            <span className="inline-block font-semibold border-2 border-black px-4 py-1 rounded-full my-6">
              {item.label}
            </span>
            <Link href="#">
              <h5 className="block sm:text-[30px] text-[24px] font-semibold mb-4 pr-5">
                {item.text}
              </h5>
            </Link>
            <span className="text-gray-500 font-medium text-[18px]">
              {item.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
