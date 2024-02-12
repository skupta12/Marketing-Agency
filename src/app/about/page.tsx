import React from "react";
import { playfair } from "../fonts";
import Image from "next/image";
import Button from "@/components/Button";
import { team } from "@/data/data";
import Link from "next/link";
import { media } from "@/data/data";

const Page = () => {
  return (
    <>
      <section className="lg:pt-[180px] pt-[150px]">
        <div className="container md:px-10 px-5">
          <div className="text-center lg:mb-48 mb-20">
            <h1 className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold">
              About <span className={playfair.className}>Liège</span>
            </h1>
            <div className="relative mb-5 lg:block hidden">
              <span className="hscroll-line"></span>
            </div>
          </div>
          <div>
            <Image
              width={1100}
              height={1100}
              className="w-full"
              src="/blog/blog-1.jpg"
              alt="blog image"
            />
          </div>
          <div className="aboutus-text text-center">
            <h4 className="sm:text-[40px] text-[36px] font-semibold mt-14 mb-6">
              About Us
            </h4>
            <p className="sm:text-[26px] md:text-[24px] text-[22px] font-semibold max-w-[700px] mx-auto mb-6">
              Kebora and John Smith, the visionary founders behind Liège, were
              struck by a realization — the world was lacking creativity; an
              absence of design aesthetics, a play — it — safe approach by
              brands, and a dire need for innovation and beauty.
            </p>
            <p className="text-gray-500 sm:text-[26px] md:text-[24px] text-[22px] font-semibold max-w-[700px] mx-auto">
              Thankfully, armed with their experience from the world of
              independent film, they were ready to take on this challenge with a
              tenacious, can — do mindset, celebrating and amplifying the
              uniqueness of each narrative. This ethos now propels Liège forward
              as a design studio dedicated to creativity and individuality in a
              world craving its presence.
            </p>
            <Button className="mt-14" title="Join us" />
          </div>
        </div>
      </section>
      <section className="lg:py-32 py-16">
        <div className="container md:px-10 px-5">
          <h3 className="text-center sm:text-[40px] text-[36px] font-semibold">
            The <span className={playfair.className}>team</span>
          </h3>
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 pt-10">
            {team.map(({ id, src, prof, name }) => (
              <div key={id} className="lg:col-span-4 md:col-span-6 col-span-12">
                <Image
                  className="w-full"
                  width={500}
                  height={500}
                  src={src}
                  alt="blog post"
                />
                <div className="text-center">
                  <span className="inline-block font-semibold text-[22px] mt-6 mb-2">
                    {name}
                  </span>
                  <Link href="#">
                    <p className="text-[17px] text-gray-500 font-semibold">
                      {prof}
                    </p>
                  </Link>
                  <span className="text-gray-500 font-medium text-[18px]">
                    <div className="flex items-center justify-center gap-x-4 mt-4">
                      {media.map(({ id, href }) => (
                        <Link href="#" key={id}>
                          <Image
                            className="hover:scale-90"
                            width={20}
                            height={20}
                            src={href}
                            alt="media logo"
                          />
                        </Link>
                      ))}
                    </div>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
