import { playfair } from "@/app/fonts";
import { BlackButton } from "@/components/Button";
import CTA from "@/sections/CTA";
import Faq from "@/sections/Faq";
import Gradient from "@/components/Gradient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { prices } from "@/lib/placeholder-data";
import styles from "@/style";
import { YXtransition } from "@/components/Transition";

const page = () => {
  return (
    <>
      <section className={`${styles.route} lg:pb-24 pb-16 relative`}>
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
                Our <span className={playfair.className}>Prices</span>
              </h1>
              <div>
                <span className="hscroll-line"></span>
              </div>
            </div>
          </YXtransition>
          <YXtransition y={40} delay={0.2}>
            <div className="grid grid-cols-12 lg:gap-3 gap-7">
              {prices.map(({ id, label, price, title, type }) => {
                return (
                  <div
                    key={id}
                    className="lg:col-span-4 md:col-span-6 col-span-12"
                  >
                    <div className="box px-10 py-12 bg-primary-200">
                      <p className="text-[17px] font-semibold mb-3">{label}</p>
                      <h3 className="text-[32px] font-medium">{price}</h3>
                      <small className="block text-[13px] font-semibold my-6">
                        {title}
                      </small>
                      <ul className="text-gray-500 font-medium mb-6">
                        {type.map((item, i) => (
                          <li className="mb-[6px]" key={i}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <BlackButton
                        type="button"
                        className="sm:w-auto w-full"
                        title="Contact us"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </YXtransition>
        </MaxWidthWrapper>
      </section>
      <Faq />
      <CTA />
    </>
  );
};

export default page;
