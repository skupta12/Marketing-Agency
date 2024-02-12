"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../app/globals.css";
import Image from "next/image";
import { testimonial } from "@/data/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonial() {

  type Swiper = any | null;

  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);

  return (
    <section className="lg:py-24 py-16">
      <div className="container md:px-10 px-5">
        <div className="sm:mb-20 mb-10 sm:flex items-center justify-between">
          <h3 className="sm:text-[34px] text-[30px] font-semibold">
            Trusted by over 4,000{" "}
            <span className="text-gray-500">clients worldwide</span>.
          </h3>
          <div className="flex gap-x-3 mt-10 sm:mt-0">
            <button
              aria-label="Arrow Left"
              className="group p-5 bg-primary-200 hover:bg-black hover:scale-[.95] transition"
              onClick={() => swiperRef && swiperRef.slidePrev()}
            >
              <ChevronLeft className="w-[21px] h-[21px] group-hover:text-white" />
            </button>
            <button
              aria-label="Arrow Right"
              className="group p-5 bg-primary-200 hover:bg-black hover:scale-[.95] transition"
              onClick={() => swiperRef && swiperRef.slideNext()}
            >
              <ChevronRight className="w-[21px] h-[21px] group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        spaceBetween={20}
        navigation={false}
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          767: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          1024: {
            centeredSlides: false,
            slidesPerView: 4,
          },
        }}
      >
        {testimonial.map(({ id, src, text, name, prof }) => (
          <SwiperSlide key={id} className="bg-primary-200 px-12 py-14">
            <div>
              {/* <Image
                width={100}
                height={100}
                src={src}
                alt="testimonial logo"
              /> */}
              <div>
                <p
                  className="sm:text-[26px] text-[22px] font-semibold mt-10 mb-7"
                  aria-hidden="true"
                >
                  {text}
                </p>
                <p className="text-[17px] font-semibold">
                  {name}, <span className="text-gray-500">{prof}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
