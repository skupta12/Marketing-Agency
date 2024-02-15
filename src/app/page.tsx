"use client";

import Ai from "@/components/Ai";
import Blog from "@/components/Blog";
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
    const initAos = setTimeout(() => {
      AOS.init({
        once: true,
        duration: 600,
      });
    }, 100);

    return () => clearTimeout(initAos);
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
    </>
  );
}
