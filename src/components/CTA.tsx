import { ArrowRight } from "lucide-react";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const CTA = () => {
  return (
    <section
      className="lg:py-36 py-16 overflow-hidden bg-no-repeat bg-center gradient" // extra padding for gradient
    >
      <MaxWidthWrapper className="relative">
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-6 col-span-12">
            <h2 className="sm:text-[37px] text-[33px] font-semibold leading-tight mb-5">
              Sign up to participate in our exclusive{" "}
              <span className="text-gray-500">Private Beta</span>.
            </h2>
            <p className="text-[18px] font-medium text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga.
            </p>
            <Button className="mt-14" title="Send a message" />
          </div>
          <div className="lg:col-span-6 col-span-12 lg:justify-self-center">
            <form className="lg:mt-0 mt-14" action="#">
              <div className="flex items-center mb-5 relative">
                <input
                  className="px-6 py-5 bg-white rounded-full
              max-w-[600px] w-full placeholder:font-medium border-2 focus:outline-none focus:border-sky-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <button
                  aria-label="submit"
                  className="absolute top-0 sm:-right-4 right-0 w-[80px] h-[70px] ml-2 rounded-full p-4 bg-black flex flex-col justify-center items-center"
                  type="submit"
                >
                  <ArrowRight className="text-white w-[20px] h-[20px]" />
                </button>
              </div>
              <p className="text-[18px] font-medium text-gray-500">
                Be the first in line by subscribing to us now.
              </p>
            </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CTA;
