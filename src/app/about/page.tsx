import { playfair } from "../fonts";
import Image from "next/image";
import Button from "@/components/Button";
import Gradient from "@/components/Gradient";
import Team from "@/sections/Team";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CTA from "@/sections/CTA";
import styles from "@/style";

const Page = () => {
  return (
    <>
      <section className={`${styles.routePadding} relative overflow-hidden`}>
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
              About <span className={playfair.className}>Liège</span>
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
            className="relative lg:h-[750px] md:h-[500px] h-[260px] overflow-hidden"
            // data-aos="fade-up"
            // data-aos-delay="400"
            >
            <Image
              className="object-cover"
              fill
              src="/blog/blog-1.jpg"
              alt="about image"
              quality={100}
              loading="eager"
              priority
              sizes="(min-width: 1440px) 1200px, (min-width: 780px) 83.13vw, calc(100vw - 32px)"
            />
          </div>
          <div className="aboutus-text text-center">
            <h4 className="sm:text-[40px] text-[36px] font-semibold mt-14 mb-6">
              About Us
            </h4>
            <p className="sm:text-[26px] md:text-[24px] text-[22px] font-semibold max-w-[700px] mx-auto mb-6">
              Kebora and John Smith, the visionary founders behind Liège, were
              struck by a realization — the world was lacking creativity; an
              absence of design aesthetics, a play — it — safe approach by
              brands, and a dire need for innovation and beauty.
            </p>
            <p className="text-gray-500 sm:text-[26px] md:text-[24px] text-[22px] font-semibold max-w-[700px] mx-auto">
              Thankfully, armed with their experience from the world of
              independent film, they were ready to take on this challenge with a
              tenacious, can — do mindset, celebrating and amplifying the
              uniqueness of each narrative. This ethos now propels Liège forward
              as a design studio dedicated to creativity and individuality in a
              world craving its presence.
            </p>
            <Button href="/post" className="mt-14" title="Join us" />
          </div>
        </MaxWidthWrapper>
      </section>
      <Team />
      <CTA />  
    </>
  );
};

export default Page;
