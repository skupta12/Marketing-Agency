"use client"

import Ai from "@/sections/Ai";
import Blog from "@/sections/Blog";
import CTA from "@/sections/CTA";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Services from "@/sections/Services";
import Testimonial from "@/sections/Testimonial";
import Trust from "@/sections/Trust";
import { MotionConfig } from "framer-motion";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <Trust />
      <Services />
      <Portfolio />
      <Testimonial />
      <Ai />
      <Blog />
      <CTA />
    </MotionConfig>
  );
}
