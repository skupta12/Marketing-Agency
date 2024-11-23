import { ArrowRight } from "lucide-react";
import Button from "../common/Button";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import Gradient from "../common/Gradient";
import styles from "@/style";

const CTA = () => {
  return (
    <section className={`${styles.section} overflow-hidden relative`}>
      <Gradient fill className="sm:block hidden" src="/gradient.png" />
      <Gradient fill className="sm:hidden block" src="/gradient-mobile.png" />

      <MaxWidthWrapper className="relative">
        <div className="grid grid-cols-12 sm:gap-20 gap-y-20 items-center">
          <div className="md:col-span-7 col-span-12">
            <h2
              className="sm:text-[37px] text-[33px] font-semibold leading-tight mb-5"
            >
              Sign up to participate in our exclusive{" "}
              <span className="text-gray-500">Private Beta</span>.
            </h2>
            <p
              className="text-[18px] font-medium text-gray-500"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga.
            </p>
            <Button type="button" href="/contact" className="mt-14" title="Send a message" />
          </div>
          <div className="md:col-span-5 col-span-12">
          <form
                className="relative"
              >
                <input
                  maxLength={38}
                  placeholder="Enter your email"
                  className="px-6 py-5 bg-white rounded-full
                  w-full placeholder:font-medium border-[1px]
                  focus:outline-none focus:border-sky-500"
                  type="text"
                />
                  <button aria-label="submit button" className="font-medium sm:text-[18px] text-white rounded-full absolute right-1 top-1 bottom-1 flex flex-col 
                justify-center px-6 bg-black" type="submit">
                    <ArrowRight className="text-white w-[20px] h-[20px]" />
                  </button>
              </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CTA;
