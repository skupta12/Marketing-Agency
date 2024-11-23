import { playfair } from "../fonts";
import Image from "next/image";
import Button from "@/components/common/Button";
import Gradient from "@/components/common/Gradient";
import Team from "@/components/sections/Team";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import CTA from "@/components/sections/CTA";
import styles from "@/style";
import AboutBlogImage from "/public/blog/blogd-1.jpg"
import { YXtransition } from "@/components/common/Transition";

const Page = () => {
  return (
    <>
      <section className={`pt-44 pb-12 relative overflow-hidden`}>
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
            <h1
              className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold"
            >
              About <span className={playfair.className}>Liège</span>
            </h1>
            <div 
              >
              <span className="hscroll-line"></span>
            </div>
          </div>
          </YXtransition>
          <YXtransition y={40} delay={0.2}>
          <div
            className="relative lg:h-[750px] md:h-[500px] h-[260px] overflow-hidden"
            >
            <Image
              className="object-cover"
              fill
              src={AboutBlogImage}
              alt="about image"
              quality={100}
              priority
            />
          </div>
          </YXtransition>
         
          <div className="aboutus-text text-center">
            <h2 className="sm:text-[40px] text-[36px] font-semibold mt-14 mb-6">
              About Us
            </h2>
            <p className="sm:text-[26px] md:text-[24px] text-[22px] font-semibold 
            max-w-[700px] mx-auto mb-6">
              Kebora and John Smith, the visionary founders behind Liège, were
              struck by a realization — the world was lacking creativity; an
              absence of design aesthetics, a play — it — safe approach by
              brands, and a dire need for innovation and beauty.
            </p>
            <p className="text-gray-500 sm:text-[26px] md:text-[24px] 
            text-[22px] font-semibold max-w-[700px] mx-auto">
              Thankfully, armed with their experience from the world of
              independent film, they were ready to take on this challenge with a
              tenacious, can — do mindset, celebrating and amplifying the
              uniqueness of each narrative. This ethos now propels Liège forward
              as a design studio dedicated to creativity and individuality in a
              world craving its presence.
            </p>
            <Button type="button" href="/contact" className="mt-14" title="Join us" />
          </div>
        </MaxWidthWrapper>
      </section>
      <Team />
      <CTA />  
    </>
  );
};

export default Page;
