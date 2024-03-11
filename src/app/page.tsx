"use client";

import Ai from "@/sections/Ai";
import Blog from "@/sections/Blog";
import CTA from "@/sections/CTA";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Services from "@/sections/Services";
import Testimonial from "@/sections/Testimonial";
import Trust from "@/sections/Trust";

// @ts-expect-error
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
      AOS.init({
        once: true,
        duration: 600,
        // disable: function() {
        //   var maxWidth = 768;
        //   return window.innerWidth < maxWidth;
        // }
      });
  }, []);
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Portfolio />
      <Testimonial />
      <Ai />
      <Blog />
      <CTA />  
    </>
  );
}
