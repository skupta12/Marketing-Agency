import { playfair } from "../fonts";
import Gradient from "@/components/Gradient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Portfolio from "./portfolio";
import { Suspense } from "react";
import { PortfolioSkeleton } from "../skeletons";

const Page = () => {

  return (
    <section className="lg:pt-[180px] pt-[150px] lg:pb-24 pb-16 relative">
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
            className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold"
          >
            Latest <span className={playfair.className}>work</span>
          </h1>
          <div>
            <span className="hscroll-line"></span>
          </div>
        </div>
        <Suspense fallback={<PortfolioSkeleton/>}>
          <Portfolio />
        </Suspense>
    
      </MaxWidthWrapper>
    </section>
  );
};

export default Page;
