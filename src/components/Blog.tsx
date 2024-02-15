import { playfair } from "@/app/fonts";
import Button from "./Button";
import { blog } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Blog = () => {
  return (
    <section className="lg:py-24 py-16">
      <MaxWidthWrapper>
        <div className="sm:flex justify-between items-center">
          <div data-aos-offset="-250" data-aos="fade-up">
            <h3 className="sm:text-[50px] text-[40px] font-semibold mb-4">
              From{" "}
              <span className={`font-medium ${playfair.className}`}>Blog</span>
            </h3>
            <p className="sm:text-[26px] text-[24px] font-medium">
              Discover the latest tips,{" "}
              <span className="text-gray-500 font-semibold">
                trends and ideas
              </span>
              .
            </p>
          </div>
          <Button href="/news" className="mt-14" title="View All" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="-250"
          className="grid grid-cols-12 gap-x-4 gap-y-10 pt-20"
        >
          {blog.map(({ id, src, label, text, date }) => (
            <div key={id} className="lg:col-span-4 md:col-span-6 col-span-12">
              <Link className="relative" href="#">
                <Image
                  className="w-full"
                  width={500}
                  height={500}
                  src={src}
                  alt="blog post"
                />
                <div className="absolute content-[''] top-0 left-0 right-0 bottom-0 inset-0 
                hover:bg-white hover:bg-opacity-15 transition" />
              </Link>
              <div>
                <span className="inline-block font-semibold border-2 border-black px-4 py-1 rounded-full my-6">
                  {label}
                </span>
                <Link href="#">
                  <h5 className="sm:text-[30px] text-[24px] font-semibold mb-6 pr-2">
                    {text}
                  </h5>
                </Link>
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
