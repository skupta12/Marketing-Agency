import Faq from "@/components/Faq";
import { playfair } from "../fonts";
import Image from "next/image";
import { contact } from "@/data/data";
import { ContactButton } from "@/components/Button";
import Gradient from "@/components/Gradient";

const Page = () => {
  return (
    <>
      <section className="lg:pt-[180px] pt-[150px] lg:pb-24 pb-16 relative">
        <div className="container md:px-10 px-5">
          <div className="text-center lg:mb-48 mb-20 relative">
            <h1
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="800"
              className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold"
            >
              Stay in <span className={playfair.className}>touch</span>
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <span className="hscroll-line"></span>
            </div>
          </div>
          <div
            className="grid grid-cols-12 gap-4 items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="lg:col-span-6 col-span-12 lg:pr-12">
              <form action="#">
                <div className="grid grid-cols-12 gap-4">
                  {contact.map(({ id, label, placeholder, type, name }) => {
                    return (
                      <div key={id} className="lg:col-span-6 col-span-12">
                        <label className="form-label">{label}</label>
                        <input
                          className="mt-2 w-full border-2 border-black rounded-md p-[14px] 
                    placeholder:text-black placeholder:font-medium focus:outline-none focus:border-sky-500"
                          type={type}
                          name={name}
                          placeholder={placeholder}
                        />
                      </div>
                    );
                  })}
                  <div className="col-span-12 lg:mt-5">
                    <ContactButton className="w-full" title="Contact us" />
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:col-span-6 col-span-12 lg:mt-0 mt-8">
              <Image
                className="w-full"
                width={500}
                height={500}
                src="/blog/blog-1.jpg"
                alt="blog image"
              />
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Page;
