import Faq from "@/sections/Faq";
import { playfair } from "../fonts";
import Image from "next/image";
import { contact } from "@/lib/placeholder-data";
import { BlackButton } from "@/components/Button";
import Gradient from "@/components/Gradient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "@/style";
import CTA from "@/sections/CTA";
import ContactImage from "/public/blog/blogd-1.jpg";

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
              Stay in <span className={playfair.className}>touch</span>
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
            className="grid grid-cols-12 gap-4 items-center"
            // data-aos="fade-up"
            // data-aos-delay="400"
          >
            <div className="lg:col-span-6 col-span-12 lg:pr-12">
              <form action="#">
                <div className="grid grid-cols-12 gap-4">
                  {contact.map(({ id, label, placeholder, type, name }) => {
                    return (
                      <div key={id} className="lg:col-span-6 col-span-12">
                        <label className="form-label">{label}</label>
                        <input
                          className="mt-2 w-full border-2 border-black rounded-md p-[14px] 
                          placeholder:text-black placeholder:font-medium 
                            focus:outline-none focus:border-sky-500"
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          required
                        />
                      </div>
                    );
                  })}
                  <div className="col-span-12 mt-4">
                    <BlackButton className="w-full" title="Contact us" />
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:col-span-6 col-span-12 lg:mt-0 mt-8">
              <div className="relative lg:h-[400px] md:h-[420px] h-[260px] overflow-hidden">
                <Image
                  className="object-cover"
                  fill
                  priority
                  src={ContactImage}
                  alt="contact image"
                  sizes="(min-width: 1360px) 592px, (min-width: 1040px) 42.11vw, 
                  (min-width: 780px) calc(100vw - 112px), calc(100vw - 32px)"
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <Faq />
      <CTA />
    </>
  );
};

export default Page;
