"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../app/globals.css";
import { Pagination, Navigation } from "swiper/modules";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image"
import { testimonial } from "@/data";

export default function Testimonial() {
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);

  return (
    <>
      <MaxWidthWrapper>
        <div className="mb-20">
          <h3 className="sm:text-[34px] text-[30px] font-semibold">
            Trusted by over 4,000{" "}
            <span className="text-gray-500">clients worldwide</span>.
          </h3>
        </div>
      </MaxWidthWrapper>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        // loop={true}
        centeredSlides={true}
        spaceBetween={30}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-primary-200 px-8 py-10">
          <Image width={100} height={100} src="/trust/hues.svg" alt="testimonial logo" />
          <div>
            <p className="text-[26px] font-semibold mt-10 mb-7" aria-hidden="true">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dolore!</p>
            <p className="text-[17px] font-semibold">Emma Harisson, <span className="text-gray-500">Marketing Director</span></p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary-200 px-8 py-10">
          <Image width={100} height={100} src="/trust/hues.svg" alt="testimonial logo" />
          <div>
            <p className="text-[26px] font-semibold mt-10 mb-7" aria-hidden="true">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dolore!</p>
            <p className="text-[17px] font-semibold">Emma Harisson, <span className="text-gray-500">Marketing Director</span></p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary-200 px-8 py-10">
          <Image width={100} height={100} src="/trust/hues.svg" alt="testimonial logo" />
          <div>
            <p className="text-[26px] font-semibold mt-10 mb-7" aria-hidden="true">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dolore!</p>
            <p className="text-[17px] font-semibold">Emma Harisson, <span className="text-gray-500">Marketing Director</span></p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary-200 px-8 py-10">
          <Image width={100} height={100} src="/trust/hues.svg" alt="testimonial logo" />
          <div>
            <p className="text-[26px] font-semibold mt-10 mb-7" aria-hidden="true">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dolore!</p>
            <p className="text-[17px] font-semibold">Emma Harisson, <span className="text-gray-500">Marketing Director</span></p>
          </div>
        </SwiperSlide>


        {/* <SwiperSlide className="bg-primary-200 px-8 py-10">
          {testimonial.map(({ id, src, text, name }) => (
            <div key={id}>
              <Image
                width={100}
                height={100}
                src={src}
                alt="testimonial logo"
              />
              <div>
                <p
                  className="text-[26px] font-semibold mt-10 mb-7"
                  aria-hidden="true"
                >
                  {text}
                </p>
                <p className="text-[17px] font-semibold">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
