import { playfair } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import InfinitiveScroller from "../components/InfinitiveScroller";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import style from "@/style";
import OSTransition, { YXtransition } from "@/components/Transition";

const Portfolio = () => {
  const scrollerboxStyle =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 duration-300 transition-opacity group-hover:opacity-[1]";

  return (
    <section className={`${style.section} overflow-hidden relative`}>
      <MaxWidthWrapper>
        <YXtransition className="text-center" y={40}>
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
        </YXtransition>
        
        <div>
          <div className="grid lg:grid-cols-[1.5fr_1.2fr] lg:gap-x-28 pt-20">
            <div
              className="group lg:mb-32 relative overflow-hidden"
            >
              <OSTransition scale={0.6} delay={0.2}>
              <Link href={"/work/dreamy-visions"}>
                <div className="relative overflow-hidden sm:h-[422px] h-[280px]">
                <Image
                  className="object-cover"
                  fill
                  src="/portfolio/portfolio-1.jpg"
                  alt="portfolio-image"
                />
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Dreamy Visions" />
                </div>
                </div>
              
              </Link>
              </OSTransition>
            
            </div>
            <div
              className="group lg:self-end relative overflow-hidden"
            >
              <OSTransition scale={0.6} delay={0.2}>
              <Link href={"/work/whimsy-tails"}>
                <div className="relative overflow-hidden sm:h-[338px] h-[280px]">
                <Image
                  className="object-cover"
                  fill
                  src="/portfolio/portfolio-2.jpg"
                  alt="portfolio-image"
                />
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Whimsy Tails" />
                </div>
                </div>
               
              </Link>
              </OSTransition>
              
            </div>
          </div>
          <div className="grid lg:grid-cols-[1.2fr_1.5fr] lg:gap-x-28 lg:pt-40">
            <div
              className="group lg:self-end relative overflow-hidden"
            >
              <OSTransition scale={0.6} delay={0.2}>
              <Link href={"/work/night-desert"}>
                <div className="relative overflow-hidden sm:h-[338px] h-[280px]">
                <Image
                  className="object-cover"
                  fill
                  src="/portfolio/portfolio-3.jpg"
                  alt="portfolio-image"
                />
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Night Desert" />
                </div>
                </div>
               
              </Link>
              </OSTransition>
              
            </div>
            <div
              className="group lg:mb-32 relative overflow-hidden"
            >
                <OSTransition scale={0.6} delay={0.2}>
                <Link href={"/work/colorful-jorneys"}>
                <div className="relative overflow-hidden sm:h-[422px] h-[280px]">
                <Image
                  className="object-cover"
                  fill
                  src="/portfolio/portfolio-4.jpg"
                  alt="portfolio-image"
                />
                <div className={`scroller-box ${scrollerboxStyle}`}>
                  <InfinitiveScroller title="Colorful Jorneys" />
                </div>
                </div>
              
              </Link>
                </OSTransition>
             
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Portfolio;
