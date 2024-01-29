import { playfair } from "@/app/layout";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import InfinitiveScroller from "./InfinitiveScroller";

const Portfolio = () => {
  const scrollerboxStyle =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";

  return (
    <MaxWidthWrapper>
      <div className="text-center">
        <h3 className={`text-[50px] font-semibold`}>
          Recent <span className={`${playfair.className}`}>work</span>
        </h3>
        <p className="lg:text-[26px] text-[24px] font-medium">
          Showcase of our{" "}
          <span className="text-gray-500">latest endeavors</span>.
        </p>
      </div>
      <div>
        <div className="grid lg:grid-cols-[1.5fr_1.2fr] lg:gap-x-28 pt-20">
          <div className="group lg:mb-32 relative overflow-hidden">
            <Link href={" "}>
              <Image
                className="w-full"
                width={400}
                height={400}
                src="/portfolio/portfolio-1.jpg"
                alt="portfolio-image"
              />
              <div
                className={`scroller-box sm:opacity-0 duration-200 transition-opacity group-hover:opacity-[1] 
              ${scrollerboxStyle}`}
              >
                <InfinitiveScroller title="Dreamy Visions" />
              </div>
            </Link>
          </div>
          <div className="group lg:self-end relative overflow-hidden">
            <Link href={" "}>
              <Image
                className="w-full"
                width={400}
                height={400}
                src="/portfolio/portfolio-2.jpg"
                alt="portfolio-image"
              />
              <div
                className={`scroller-box sm:opacity-0 duration-200 transition-opacity group-hover:opacity-[1] 
              ${scrollerboxStyle}`}
              >
                <InfinitiveScroller title="Whimsy Tails" />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-[1.2fr_1.5fr] lg:gap-x-28 lg:pt-40">
          <div className="group lg:self-end relative overflow-hidden">
            <Link href={""}>
              <Image
                className="w-full"
                width={400}
                height={400}
                src="/portfolio/portfolio-3.jpg"
                alt="portfolio-image"
              />
              <div
                className={`scroller-box sm:opacity-0 duration-200 transition-opacity group-hover:opacity-[1] 
              ${scrollerboxStyle}`}
              >
                <InfinitiveScroller title="Night Desert" />
              </div>
            </Link>
          </div>
          <div className="group lg:mb-32 relative overflow-hidden">
            <Link href={""}>
              <Image
                className="w-full"
                width={400}
                height={400}
                src="/portfolio/portfolio-4.jpg"
                alt="portfolio-image"
              />
              <div
                className={`scroller-box sm:opacity-0 duration-200 transition-opacity group-hover:opacity-[1] 
              ${scrollerboxStyle}`}
              >
                <InfinitiveScroller title="Colorful Jorneys" />
              </div>
            </Link>
          </div>
        </div>
        <div className="group lg:pt-32 relative overflow-hidden">
          <Link href={""}>
            <Image
              className="w-full mx-auto"
              width={1000}
              height={1000}
              src="/portfolio/portfolio-5.jpg"
              alt="portfolio-image"
            />
            <div
              className={`scroller-box sm:opacity-0 duration-200 transition-opacity group-hover:opacity-[1] 
              ${scrollerboxStyle} lg:-translate-y-0 -translate-y-1/2`}
            >
              <InfinitiveScroller title="Imaginary Realms" />
            </div>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Portfolio;
