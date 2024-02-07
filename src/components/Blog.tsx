"use client";

import { playfair } from "@/app/layout";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./Button";
import { blog } from "@/data/data";
import Image from "next/image"
import Link from "next/link";

const Blog = () => {
  return (
    <MaxWidthWrapper>
      <div className="sm:flex justify-between items-center">
        <div>
          <h3 className="sm:text-[50px] text-[40px] font-semibold mb-4">
            From{" "}
            <span className={`font-medium ${playfair.className}`}>Blog</span>
          </h3>
          <p className="sm:text-[26px] text-[24px] font-medium">
            Discover the latest tips,{" "}
            <span className="text-gray-500 font-semibold">
              trends and ideas
            </span>
            .
          </p>
        </div>
        <Button className="mt-14" title="View All" />
      </div>

      <div className="grid grid-cols-12 gap-x-4 gap-y-10 pt-20">
        {blog.map(({ id, src, label, text, date }) => (
          <div key={id} className="lg:col-span-4 md:col-span-6 col-span-12">
            <Link href="#">
              <Image className="w-full" width={500} height={500} src={src} alt="blog post" />
            </Link>
            <div>
              <span className="inline-block font-semibold border-2 border-black px-4 py-1 rounded-full my-6">{label}</span>
              <Link href="#">
                <h5 className="sm:text-[30px] text-[24px] font-semibold mb-6">{text}</h5>
              </Link>
              <span className="text-gray-500 font-medium text-[18px]">{date}</span>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Blog;
