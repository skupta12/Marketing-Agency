import Image from "next/image";
import Button from "./Button";
import { playfair } from "@/app/fonts";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Hero = () => {
  return (
    <section data-aos="fade-in" className="lg:pb-[200px] pb-16 overflow-hidden bg-no-repeat md:bg-center gradient">
      <MaxWidthWrapper>
        <div className="lg:pt-[230px] pt-[150px] relative">
          <div className="grid grid-cols-12 gap-y-12 lg:gap-y-7 gap-x-5 lg:place-items-center">
            <div className="lg:col-span-6 col-span-12">
              <div className="hero-text mb-10">
                <h1 data-aos="fade-right" data-aos-duration="800" data-aos-once="false"
                className="lg:text-[65px] md:text-[55px] text-[40px] font-semibold leading-tight">
                  The{" "}
                  <span className={`font-medium ${playfair.className}`}>
                    web–based
                  </span>{" "}
                  marketing agency.
                </h1>
                <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="800"
                data-aos-once="false"
                className="lg:mt-16 mt-10 font-semibold lg:text-[26px] text-[24px]">
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
              <Image
                data-aos="zoom-in" data-aos-duration="800"
                data-aos-once="true"
                width={500}
                height={500}
                src="/hero.png"
                alt="hero image"
              />
            </div>
          </div>
          <div data-aos="fade-in" className="relative">
            <span className="hscroll-line"></span>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
