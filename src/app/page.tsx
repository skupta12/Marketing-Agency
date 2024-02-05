import Ai from "@/components/Ai";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <>
      <main>
        <section className="lg:pb-[200px] pb-16 overflow-hidden">
          <Hero />
        </section>

        <section className="lg:py-24 py-16">
          <Trust />
        </section>

        <section className="lg:py-24 py-16">
          <Services />
        </section>

        <section className="lg:py-24 py-16 overflow-hidden">
          <Portfolio />
        </section>

        <section className="lg:py-24 py-16">
          <Testimonial />
        </section>

        <section className="lg:py-24 py-16">
          <Ai />
        </section>

        <section className="lg:py-24 py-16">
          <Blog />
        </section>
        
      </main>
    </>
  );
}
