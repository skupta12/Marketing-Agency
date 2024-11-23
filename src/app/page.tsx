"use client"

import Ai from "@/components/sections/Ai";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial";
import Trust from "@/components/sections/Trust";

export default function Home() {
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
