import React from "react";
import Image from "next/image";
import Link from "next/link";
import InfinitiveScroller from "@/components/InfinitiveScroller";
import { fetchPortfolio } from "@/lib/data";

const scrollerboxStyle =
  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 duration-300 transition-opacity group-hover:opacity-[1]";

export default async function portfolio() {

    const delayData = async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return await fetchPortfolio();
      };
    
      const portfolioItems = await delayData();

  return (
    <div
      className="grid grid-cols-12 md:gap-5"
    //   data-aos="fade-up"
    //   data-aos-delay="400"
    >
      {portfolioItems.map((portfolio) => (
        <div
          key={portfolio.id}
          className="md:col-span-6 col-span-12 relative overflow-hidden group"
        >
          <Link href={portfolio.href}>
            <Image
              className="w-full"
              width={800}
              height={800}
              src={portfolio.src}
              alt="portfolio image"
            />
            <div className={`scroller-box ${scrollerboxStyle}`}>
              <InfinitiveScroller title={portfolio.title} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
