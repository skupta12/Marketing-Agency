import { playfair } from "@/app/fonts";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import InfinitiveScroller from "./InfinitiveScroller";

const Portfolio = () => {
  const scrollerboxStyle =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 duration-300 transition-opacity group-hover:opacity-[1]";
  const portfolioGradient =
    "pointer-events-none filter blur-[100px] absolute -z-[1] bottom-20 -right-72 lg:w-[650px] w-[400px] lg:h-[700px] h-[400px] bg-[hsl(188,79%,70%)] rounded-full";

  return (
    <section className="lg:py-24 py-16 overflow-hidden relative">
      <div className={portfolioGradient} />
      <div className="container md:px-10 px-5">
        <div className="text-center">
          <h3 className={`sm:text-[50px] text-[40px] font-semibold mb-4`}>
            Recent <span className={`${playfair.className}`}>work</span>
          </h3>
          <p className="lg:text-[26px] text-[24px] font-medium">
            Showcase of our{" "}
            <span className="text-gray-500 font-semibold">
              latest endeavors
            </span>
            .
          </p>
        </div>
        <div>
          <div className="grid lg:grid-cols-[1.5fr_1.2fr] lg:gap-x-28 pt-20">
            <div className="group lg:mb-32 relative overflow-hidden">
              <Link href={" "}>
                {/* <Image
                  className="w-full"
                  width={400}
                  height={400}
                  src="/portfolio/portfolio-1.jpg"
                  alt="portfolio-image"
                /> */}
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Dreamy Visions" />
                </div>
              </Link>
            </div>
            <div className="group lg:self-end relative overflow-hidden">
              <Link href={" "}>
                {/* <Image
                  className="w-full"
                  width={400}
                  height={400}
                  src="/portfolio/portfolio-2.jpg"
                  alt="portfolio-image"
                /> */}
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Whimsy Tails" />
                </div>
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-[1.2fr_1.5fr] lg:gap-x-28 lg:pt-40">
            <div className="group lg:self-end relative overflow-hidden">
              <Link href={""}>
                {/* <Image
                  className="w-full"
                  width={400}
                  height={400}
                  src="/portfolio/portfolio-3.jpg"
                  alt="portfolio-image"
                /> */}
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Night Desert" />
                </div>
              </Link>
            </div>
            <div className="group lg:mb-32 relative overflow-hidden">
              <Link href={""}>
                {/* <Image
                  className="w-full"
                  width={400}
                  height={400}
                  src="/portfolio/portfolio-4.jpg"
                  alt="portfolio-image"
                /> */}
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Colorful Jorneys" />
                </div>
              </Link>
            </div>
          </div>
          <div className="group lg:mt-32 relative overflow-hidden">
            <Link href={""}>
              {/* <Image
                className="w-full mx-auto"
                width={800}
                height={800}
                src="/portfolio/portfolio-5.jpg"
                alt="portfolio-image"
              /> */}
              <div className={`scroller-box ${scrollerboxStyle}`}>
                <InfinitiveScroller title="Imaginary Realms" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
