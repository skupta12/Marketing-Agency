import { playfair } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import InfinitiveScroller from "./InfinitiveScroller";
import MaxWidthWrapper from "./MaxWidthWrapper";
import style from "@/style";

const Portfolio = () => {
  const scrollerboxStyle =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 duration-300 transition-opacity group-hover:opacity-[1]";

  return (
    <section className={`${style.sectionPadding} overflow-hidden relative`}>
      <MaxWidthWrapper>
        <div
          data-aos="fade-up"
          data-aos-offset="-250"
          className="text-center"
        >
          <h3 className={`${style.heading3} mb-4`}>
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
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
            
              className="group lg:mb-32 relative overflow-hidden"
            >
              <Link href={"/project"}>
                <Image
                  className="w-full"
                  width={400}
                  height={400}
                  src="/portfolio/portfolio-1.jpg"
                  alt="portfolio-image"
                />
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Dreamy Visions" />
                </div>
              </Link>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              className="group lg:self-end relative overflow-hidden"
            >
              <Link href={" "}>
                <Image
                  className="w-full"
                  width={400}
                  height={400}
                  src="/portfolio/portfolio-2.jpg"
                  alt="portfolio-image"
                />
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Whimsy Tails" />
                </div>
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-[1.2fr_1.5fr] lg:gap-x-28 lg:pt-40">
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              className="group lg:self-end relative overflow-hidden"
            >
              <Link href={""}>
                <Image
                  className="w-full"
                  width={400}
                  height={400}
                  src="/portfolio/portfolio-3.jpg"
                  alt="portfolio-image"
                />
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Night Desert" />
                </div>
              </Link>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              className="group lg:mb-32 relative overflow-hidden"
            >
              <Link href={""}>
                <Image
                  className="w-full"
                  width={400}
                  height={400}
                  src="/portfolio/portfolio-4.jpg"
                  alt="portfolio-image"
                />
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Colorful Jorneys" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Portfolio;