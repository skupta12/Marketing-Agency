"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/style";
import { testimonial } from "@/lib/placeholder-data";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Testimonial() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // adaptiveHeight: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <section className={styles.sectionPadding}>
      <MaxWidthWrapper>
        <div className="sm:mb-20 mb-10">
        <h4 className="sm:text-[34px] text-[30px] font-semibold">
            Trusted by over 4,000{" "}
            <span className="text-gray-500">clients worldwide</span>.
          </h4>
        </div>
   
      </MaxWidthWrapper>
      <Slider className="overflow-hidden" {...settings}>
        {testimonial.map(({ id, src, text, name, position }) => (
          <div className="bg-primary-200 px-12 py-14" key={id}>
            <div>
              <div className="relative overflow-hidden h-[28px]">
              <Image fill src={src} alt={`testimonial logo ${id}`} />
              </div>
            
              <div>
                <p
                  className="sm:text-[26px] text-[22px] font-semibold mt-10 mb-7"
                  aria-hidden="true"
                >
                  {text}
                </p>
                <p className="text-[17px] font-semibold">
                  {name}, <span className="text-gray-500">{position}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

// function SampleNextArrow(props) {

//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }