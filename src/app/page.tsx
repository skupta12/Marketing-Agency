"use client";

import Ai from "@/components/Ai";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Trust from "@/components/Trust";

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
