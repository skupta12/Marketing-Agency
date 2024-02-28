import React from "react";
import Image from "next/image";
import Link from "next/link";
import InfinitiveScroller from "@/components/InfinitiveScroller";
import { portfolio } from "@/lib/placeholder-data";

const scrollerboxStyle =
  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 duration-300 transition-opacity group-hover:opacity-[1]";

export default function Portfolio() {

  return (
    <div className="grid grid-cols-12 md:gap-5">
      {portfolio.length > 0 && (
        portfolio.map((portfolio) => (
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
                <InfinitiveScroller title={portfolio.scrollerTitle} />
              </div>
            </Link>
          </div>
        )
      )
    )}
    </div>
  );
}
