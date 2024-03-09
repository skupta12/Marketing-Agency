import { playfair } from "../fonts";
import Gradient from "@/components/Gradient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { portfolio } from "@/lib/placeholder-data";
import Link from "next/link";
import Image from "next/image";
import InfinitiveScroller from "@/components/InfinitiveScroller";
import CTA from "@/components/CTA";
import styles from "@/style";

const scrollerboxStyle =
  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 duration-300 transition-opacity group-hover:opacity-[1]";

const Page = () => {
  return (
    <>
      <section className={`${styles.routePadding} lg:pb-24 pb-16 relative`}>
        <Gradient
          fill
          className="sm:block hidden"
          src="/gradient.png"
          isPriority
        />
        <Gradient
          fill
          className="sm:hidden block"
          src="/gradient-mobile.png"
          isPriority
        />
        <MaxWidthWrapper>
          <div className="text-center lg:mb-48 mb-20 relative">
            <h1
              // data-aos="fade-up"
              // data-aos-delay="50"
              // data-aos-duration="800"
              className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold"
            >
              Latest <span className={playfair.className}>work</span>
            </h1>
            <div
              // data-aos="fade-up"
              // data-aos-delay="200"
              // data-aos-duration="800"
            >
              <span className="hscroll-line"></span>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="grid grid-cols-12 md:gap-5"
          >
            {portfolio.map(({ id, url, src, scrollerTitle }) => (
                <div
                  key={id}
                  className="md:col-span-6 col-span-12 relative overflow-hidden group"
                >
                  <Link href={`/work/${url}`}>
                    <Image
                      className="w-full"
                      width={590}
                      height={413}
                      priority
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
        </MaxWidthWrapper>
      </section>
      <CTA />
    </>
  );
};

export default Page;
