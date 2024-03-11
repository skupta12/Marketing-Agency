import { playfair } from "@/app/fonts";
import Button from "./src/components/Button";
import { blogs } from "@/lib/placeholder-data";
import Image from "next/image";
import MaxWidthWrapper from "./src/components/MaxWidthWrapper";
import style from "@/style";
import Link from "next/link";

const Blog = () => {
  return (
    <section className={`${style.sectionPadding}`}>
      <MaxWidthWrapper>
        <div className="sm:flex justify-between items-center">
          <div data-aos-offset="-250" data-aos="fade-up">
            <h3 className={`${style.heading3} mb-4`}>
              From{" "}
              <span className={`font-medium ${playfair.className}`}>blog</span>
            </h3>
            <p className="sm:text-[26px] text-[24px] font-medium">
              Discover the latest tips,{" "}
              <span className="text-gray-500 font-semibold">
                trends and ideas
              </span>
              .
            </p>
          </div>
          <Button href="/post" className="mt-14" title="View All" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="-250"
          className="grid grid-cols-12 gap-x-7 sm:gap-y-18 gap-y-14 pt-20"
        >
          {blogs.map(({ id, url, src, label, text, date}) => (
            <div key={id} className="lg:col-span-4 md:col-span-6 col-span-12">
              <Link className="relative" href={`/post/${url}`}>
                <div>
                  <Image
                    className="object-cover"
                    width={1000}
                    height={650}
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
                <span className="text-[15px] inline-block font-semibold border-2 border-black px-4 py-1 rounded-full my-6">
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
    </section>
  );
};

export default Blog;
