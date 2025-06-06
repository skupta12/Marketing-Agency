import { playfair } from "@/app/fonts";
import Button from "../common/Button";
import { blogs } from "@/lib/placeholder-data";
import Image from "next/image";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import style from "@/style";
import Link from "next/link";
import { YXtransition } from "@/components/common/Transition";

const Blog = () => {
  return (
    <section className={`${style.section}`}>
      <YXtransition y={40} delay={0.1}>
        <MaxWidthWrapper>
          <div className="sm:flex justify-between items-center">
            <div>
              <h3 className={`${style.heading3} mb-4`}>
                From{" "}
                <span className={`font-medium ${playfair.className}`}>
                  blog
                </span>
              </h3>
              <p className="sm:text-[26px] text-[24px] font-medium">
                Discover the latest tips,{" "}
                <span className="text-gray-500 font-semibold">
                  trends and ideas
                </span>
                .
              </p>
            </div>
            <Button type="button" href="/post" className="mt-14" title="View All" />
          </div>

          <div className="grid grid-cols-12 sm:gap-x-7 gap-x-6 sm:gap-y-18 gap-y-14 pt-20">
            {blogs.map(({ id, url, src, label, text, date }) => (
              <div key={id} className="lg:col-span-4 md:col-span-6 col-span-12">
                <Link className="relative" href={`/post/${url}`}>
                  <div>
                    <Image
                      className="object-cover w-full"
                      width={381}
                      height={260}
                      src={src}
                      alt="blog post"
                    />
                  </div>

                  <div
                    className="absolute content-[''] top-0 left-0 right-0 bottom-0 inset-0 
                hover:bg-white hover:bg-opacity-15 transition"
                  />
                </Link>
                <div>
                  <span
                    className="text-[15px] inline-block font-semibold border-2 
                border-black px-4 py-1 rounded-full my-6"
                  >
                    {label}
                  </span>
                  <div className="blog-title">
                    <Link href={`/post/${url}`}>
                      <h5 className="sm:text-[30px] text-[24px] font-semibold mb-6 pr-2">
                        {text}
                      </h5>
                    </Link>
                  </div>
                  <span className="text-gray-500 font-medium text-[18px]">
                    {date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </YXtransition>
    </section>
  );
};

export default Blog;
