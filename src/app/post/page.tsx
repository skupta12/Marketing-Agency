import { playfair } from "../fonts";
import Gradient from "@/components/Gradient";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Suspense } from "react";
import Post from "./post";
import BlogSkeleton from "../skeletons";

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
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold"
          >
            From <span className={playfair.className}>blog</span>
          </h1>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <span className="hscroll-line"></span>
          </div>
        </div>
        <Suspense fallback={<BlogSkeleton />}>
          <Post />
        </Suspense>
      </MaxWidthWrapper>
    </section>
  );
}

export default Page;
