import Ai from "@/sections/Ai";
import Blog from "@/sections/Blog";
import CTA from "@/sections/CTA";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Services from "@/sections/Services";
import Testimonial from "@/sections/Testimonial";
import Trust from "@/sections/Trust";

export default function Home() {

  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Testimonial />
      <Ai />
      <Blog />
      <CTA />  
    </>
  );
}
