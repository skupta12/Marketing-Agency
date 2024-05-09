import Image from "next/image";
import Button from "../components/Button";
import { playfair } from "@/app/fonts";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Gradient from "@/components/Gradient";
import HeroImage from "/public/hero.png"

const Hero = () => {
  return (
    <section className="lg:pb-[200px] pb-16 overflow-hidden relative">
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
        <div className="pt-[180px] relative">
          <div className="grid grid-cols-12 gap-y-12 lg:gap-y-7 gap-x-5 lg:place-items-center">
            <div className="lg:col-span-6 col-span-12">
              <div className="hero-text mb-10">
                <h1
                  className="lg:text-[65px] md:text-[55px] text-[40px] font-semibold leading-tight"
                >
                  The{" "}
                  <span className={`font-medium ${playfair.className}`}>
                    web–based
                  </span>{" "}
                  marketing agency.
                </h1>
                <p
                  className="lg:mt-16 mt-10 font-semibold lg:text-[26px] text-[24px]"
                >
                  We build comprehensive digital solutions to efficiently{" "}
                  <span className="text-gray-500">
                    manage and improve sales funnels
                  </span>
                  .
                </p>
              </div>
              <Button href="/contact" title="Send a Message" />
            </div>
            <div className="lg:col-span-6 col-span-12">
              <Image
                className="w-full"
                width={665}
                height={653}
                quality={100}
                priority
                src={HeroImage}
                alt="hero image"
              />
            </div>
          </div>
          <div className="relative lg:block hidden">
            <span className="hscroll-line"></span>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
