import Image from "next/image";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { playfair } from "@/app/layout";

export const firstGradient =
  "pointer-events-none filter blur-[100px] absolute -z-[1] top-1/2 -left-72 lg:w-[550px] w-[400px] lg:h-[200px] h-[100px] bg-[hsl(188,79%,70%)] rounded-full";
export const secGradient =
  "pointer-events-none filter blur-[100px] absolute -z-[1] top-1/2 -right-[100px] lg:w-[550px] w-[400px] lg:h-[300px] h-[200px] bg-[hsl(283,62%,86%)] rounded-full";

const Hero = () => {

  return (
    <MaxWidthWrapper>
      <div className="lg:pt-[230px] pt-[150px] relative">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-y-7 gap-x-5 lg:place-items-center">
          <div className="lg:col-span-6 col-span-12 order-2 lg:order-none">
            <div className="hero-text mb-10">
              <h1 className="lg:text-[65px] md:text-[55px] text-[45px] font-semibold leading-tight">
                The{" "}
                <span className={`font-medium ${playfair.className}`}>
                  web–based
                </span>{" "}
                marketing agency.
              </h1>
              <p className="mt-16 font-semibold lg:text-[26px] text-[24px]">
                We build comprehensive digital solutions to efficiently{" "}
                <span className="text-gray-500">
                  manage and improve sales funnels
                </span>
                .
              </p>
            </div>
            <Button title="Send a Message" />
          </div>
          <div className="lg:col-span-6 col-span-12">
            <Image priority={true} loading="eager" width={500} height={500} src="/hero.png" alt="hero image" />
          </div>
        </div>
        <div className={firstGradient} />
        <div className={secGradient} />
        <div className="relative">
          <span className="hscroll-line"></span>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
