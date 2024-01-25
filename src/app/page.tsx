import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Head from "next/head";

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
    </main>
    </>
  );
}
