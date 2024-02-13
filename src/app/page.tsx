import Ai from "@/components/Ai";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Trust from "@/components/Trust";

export default function Home() {

  return (
    <>
      <main>
          <Hero />
          <Trust />
          <Services />
          <Portfolio />
          <Testimonial />
          <Ai />
          <Blog />
          {/* <CTA /> */}
      </main>
    </>
  );
}
