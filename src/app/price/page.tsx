import { playfair } from "@/app/fonts";
import { ContactButton } from "@/components/Button";
import Faq from "@/components/Faq";
import { prices } from "@/data/data";

const page = () => {
  return (
    <>
      <section className="lg:pt-[180px] lg:pb-24 pb-16 pt-[150px] gradient bg-no-repeat bg-top">
        <div className="container md:px-10 px-5">
          <div className="text-center lg:mb-48 mb-20 relative">
            <h1
              data-aos="fade-up"
              data-aos-delay="50"
              className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold"
            >
              Our <span className={playfair.className}>Prices</span>
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="hscroll-line"></span>
            </div>
          </div>
          <div className="grid grid-cols-12 lg:gap-3 gap-7">
            {prices.map(({ id, label, price, title, type }) => {
              return (
                <div  key={id} className="lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="box px-10 py-12 bg-primary-200">
                    <p className="text-[17px] font-semibold mb-3">{label}</p>
                    <h3 className="text-[32px] font-medium">{price}</h3>
                    <small className="block text-[13px] font-semibold my-6">
                      {title}
                    </small>
                    <ul className="text-gray-500 font-medium mb-6">
                      {type.map((item, i) => (
                        <li className="mb-[6px]" key={i}>{item}</li>
                      ))}
                    </ul>
                    <ContactButton className="sm:w-auto w-full" title="Contact us" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default page;
