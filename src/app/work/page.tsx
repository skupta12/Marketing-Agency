import { playfair } from "../fonts";
import Gradient from "@/components/Gradient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { portfolio } from "@/lib/placeholder-data";
import Link from "next/link";
import Image from "next/image";
import InfinitiveScroller from "@/components/InfinitiveScroller";
import CTA from "@/sections/CTA";
import styles from "@/style";
import { YXtransition } from "@/components/Transition";

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
          <YXtransition y={40}>
            <div className="text-center lg:mb-48 mb-20 relative">
              <h1 className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold">
                Latest <span className={playfair.className}>work</span>
              </h1>
              <div>
                <span className="hscroll-line"></span>
              </div>
            </div>
          </YXtransition>
          <YXtransition y={40} delay={0.2}>
            <div className="grid grid-cols-12 md:gap-5">
              {portfolio.map(({ id, url, src, scrollerTitle }) => (
                <div
                  key={id}
                  className="md:col-span-6 col-span-12 relative overflow-hidden group"
                >
                  <Link href={`/work/${url}`}>
                    <div className="relative lg:h-[430px] h-[260px] overflow-hidden">
                      <Image
                        className="object-cover"
                        fill
                        priority
                        src={src}
                        quality={90}
                        alt="portfolio image"
                      />
                    </div>

                    <div className={`scroller-box ${scrollerboxStyle}`}>
                      <InfinitiveScroller title={scrollerTitle} />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </YXtransition>
        </MaxWidthWrapper>
      </section>
      <CTA />
    </>
  );
};

export default Page;
