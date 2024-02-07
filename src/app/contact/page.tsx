import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { playfair } from "../layout";
import Image from "next/image";

const Page = () => {
  return (
    <section className="lg:pt-[180px] pt-[150px] lg:pb-24 pb-16">
      <MaxWidthWrapper>
        <div className="text-center lg:mb-48 mb-20">
          <h1 className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold">
            Stay in <span className={playfair.className}>touch</span>
          </h1>
          <div className="relative mb-5 lg:block hidden">
            <span className="hscroll-line"></span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-6 lg:pr-12">
            <form action="#">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <label className="form-label">First name</label>
                  <input
                    className="mt-2 w-full border-2 border-black rounded-md p-[14px] 
                    placeholder:text-black placeholder:font-medium focus:outline-none focus:border-sky-500"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="col-span-6">
                  <label className="form-label">Email</label>
                  <input
                    className="mt-2 w-full border-2 border-black rounded-md p-[14px] 
                     placeholder:text-black placeholder:font-medium focus:outline-none focus:border-sky-500"
                    type="text"
                    name="email"
                    placeholder="contact@example.com"
                  />
                </div>
                <div className="col-span-6 mt-4">
                  <label className="form-label">Phone</label>
                  <input
                    className="mt-2 w-full border-2 border-black rounded-md p-[14px] placeholder:text-black 
                    placeholder:font-medium focus:outline-none focus:border-sky-500"
                    type="tel"
                    name="phone"
                    placeholder="+1 675-786"
                  />
                </div>
                <div className="col-span-6 mt-4">
                  <label className="form-label">Schedule to receive call</label>
                  <input
                    className="mt-2 w-full border-2 border-black rounded-md p-[14px] placeholder:text-black 
                   placeholder:font-medium focus:outline-none focus:border-sky-500"
                    type="text"
                    name="text"
                    placeholder="10:00 AM to 4:00 PM"
                  />
                </div>
                <div className="col-span-12 mt-5">
                  <button
                    type="button"
                    value="submit"
                    className="inline-block font-medium text-center w-full bg-black text-white p-[14px] rounded-lg"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-6">
            <Image
              width={500}
              height={500}
              src="/blog/blog-1.jpg"
              alt="blog image"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Page;
