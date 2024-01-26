import { playfair } from "@/app/layout";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

const Portfolio = () => {
  return (
    <MaxWidthWrapper>
      <div className="text-center">
        <h3 className={`text-[50px] font-semibold`}>
          Recent <span className={`${playfair.className}`}>work</span>
        </h3>
        <p className="lg:text-[26px] text-[24px] font-medium">
          Showcase of our{" "}
          <span className="text-gray-500">latest endeavors</span>.
        </p>
      </div>
      <div className="grid grid-cols-[1.5fr_1.2fr] gap-x-28 lg:pt-20 pt-10">
        <div className="pb-32">
          <Image
            className="w-full"
            width={400}
            height={400}
            src="/portfolio/portfolio-1.jpg"
            alt="portfolio-image"
          />
        </div>
        <div className="self-end">
          <Image
          className="w-full"
            width={400}
            height={400}
            src="/portfolio/portfolio-2.jpg"
            alt="portfolio-image"
          />
        </div>
      </div>
      <div className="grid grid-cols-[1.2fr_1.5fr] gap-x-28 lg:pt-40 pt-20">
        <div className="self-end">
          <Image
            className="w-full"
            width={400}
            height={400}
            src="/portfolio/portfolio-3.jpg"
            alt="portfolio-image"
          />
        </div>
        <div className="pb-32">
          <Image
          className="w-full"
            width={400}
            height={400}
            src="/portfolio/portfolio-4.jpg"
            alt="portfolio-image"
          />
        </div>
        <div className="lg:pt-32 pt-20">
        <Image
          className=""
            width={400}
            height={400}
            src="/portfolio/portfolio-4.jpg"
            alt="portfolio-image"
          />
        </div>
       
      </div>
    </MaxWidthWrapper>
  );
};

export default Portfolio;
