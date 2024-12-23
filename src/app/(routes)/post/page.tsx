import { playfair } from "../../fonts";
import Gradient from "@/components/common/Gradient";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import { Suspense } from "react";
import Post from "./post";
import BlogSkeleton from "../../skeletons";
import { fetchBlogPages } from "@/lib/data";
import Pagination from "./pagination";
import CTA from "@/components/sections/CTA";
import styles from "@/style";
import { YXtransition } from "@/components/common/Transition";

export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page || 1);

  const totalPages = await fetchBlogPages(query);

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
                From <span className={playfair.className}>blog</span>
              </h1>
              <div>
                <span className="hscroll-line"></span>
              </div>
            </div>
          </YXtransition>

          {/* <div className="mb-10 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search..." />
        </div> */}
          {/* async component */}
          {/* <YXtransition y={40} delay={0.2}> */}
            <Suspense key={query + currentPage} fallback={<BlogSkeleton />}>
              <Post query={query} currentPage={currentPage} />
            </Suspense>
          {/* </YXtransition> */}
          <div className="mt-20 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </MaxWidthWrapper>
      </section>
      <CTA />
    </>
  );
}
