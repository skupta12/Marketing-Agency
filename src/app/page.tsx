import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <>
      <main>
        <section className="lg:pb-[200px] pb-14 overflow-hidden">
          <Hero />
        </section>

        <section className="lg:py-20 py-14">
          <Trust />
        </section>

        <section className="lg:py-20 py-14">
          <Services />
        </section>

        <section className="lg:py-20 py-14">
          <Portfolio />
        </section>

        <section className="lg:py-20 py-14">
          <Testimonial />
        </section>
        
      </main>
    </>
  );
}
