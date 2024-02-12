import { playfair } from "../fonts";
import Image from "next/image";
import Link from "next/link";
import { blog } from "@/data/data";

const Page = () => {
  return (
    <section className="lg:pt-[180px] pt-[150px] lg:pb-24 pb-16">
      <div className="container md:px-10 px-5">
        <div className="text-center lg:mb-48 mb-20">
          <h1 className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold">
            From <span className={playfair.className}>blog</span>
          </h1>
          <div className="relative mb-5 lg:block hidden">
            <span className="hscroll-line"></span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-4 gap-y-10">
          {blog.map(({ id, src, label, text, date }) => (
            <div key={id} className="lg:col-span-4 md:col-span-6 col-span-12">
              <Link href="#">
                <Image
                  className="w-full sm:h-auto h-[300px]"
                  width={500}
                  height={500}
                  src={src}
                  alt="blog post"
                />
              </Link>
              <div>
                <span className="inline-block font-semibold border-2 border-black px-4 py-1 rounded-full my-6">
                  {label}
                </span>
                <Link href="#">
                  <h5 className="sm:text-[30px] text-[24px] font-semibold mb-6">
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
      </div>
    </section>
  );
};

export default Page;
