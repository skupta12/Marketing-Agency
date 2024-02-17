import { playfair } from "../fonts";
import InfinitiveScroller from "@/components/InfinitiveScroller";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/data";
import Gradient from "@/components/Gradient";

const Page = () => {
  const scrollerboxStyle =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 duration-300 transition-opacity group-hover:opacity-[1]";

  return (
    <section className="lg:pt-[180px] pt-[150px] lg:pb-24 pb-16 relative">
        <Gradient
          className="sm:block hidden"
          src="/gradient.png"
          isPriority
        />
        <Gradient
          className="sm:hidden block"
          src="/gradient-mobile.png"
          isPriority
        />
      <div className="container md:px-10 px-5">
        <div className="text-center lg:mb-48 mb-20 relative">
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold"
          >
            Latest <span className={playfair.className}>work</span>
          </h1>
          <div data-aos="fade-up" data-aos-delay="200">
            <span className="hscroll-line"></span>
          </div>
        </div>
        <div
          className="grid grid-cols-12 md:gap-5"
          data-aos="fade-up"
          data-aos-delay="400"
        >
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
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title={scrollerTitle} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
