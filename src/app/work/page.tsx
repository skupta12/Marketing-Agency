import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { playfair } from "../layout";
import InfinitiveScroller from "@/components/InfinitiveScroller";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/data";

const Page = () => {
  const scrollerboxStyle =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 duration-300 transition-opacity group-hover:opacity-[1]";

  return (
    <section className="lg:pt-[180px] lg:pb-24 pb-16 pt-[150px]">
      <MaxWidthWrapper>
        <div className="text-center lg:mb-48 mb-20">
          <h1 className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold">
            Latest <span className={playfair.className}>work</span>
          </h1>
          <div className="relative mb-5 lg:block hidden">
            <span className="hscroll-line"></span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          {portfolio.map(({ id, src, href, scrollerTitle }) => (
            <div
              key={id}
              className="md:col-span-6 col-span-12 relative overflow-hidden group"
            >
              <Link href={href}>
                <Image
                  className="w-full"
                  width={800}
                  height={800}
                  src={src}
                  alt="portfolio image"
                />
                <span className="absolute inset-x-0 top-0 bottom-0 group-hover:bg-port-rgba transition-colors duration-500" />
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title={scrollerTitle} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Page;