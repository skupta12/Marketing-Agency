import { playfair } from "@/app/fonts";
import { counter, services } from "@/lib/placeholder-data";
import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import style from "@/style";

const Services = () => {
  return (
    <section className={`${style.sectionPadding}`}>
      <MaxWidthWrapper>
        <div data-aos="fade-up" className="text-center">
          <h3 className={`${style.heading3} mb-4`}>
            What{" "}
            <span className={`font-medium ${playfair.className}`}>we do</span>
          </h3>
          <p className="sm:text-[26px] text-[24px] font-semibold">
            Build a customer-focused{" "}
            <span className="text-gray-500">business approach</span>.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-12 gap-4 pt-20 lg:pb-32 pb-20"
        >
          {services.map(({ id, icon, title, text }) => (
            <div
              className="w-full lg:col-span-4 md:col-span-6 col-span-12 bg-primary-200 p-12"
              key={id}
            >
              <div
                className="services-icon flex flex-col justify-center items-center 
              w-[100px] h-[100px] bg-white rounded-full p-6"
              >
                <Image width={45} height={45} src={icon} alt="service icon" />
              </div>
              <div className="services-text">
                <h5 className="text-[22px] mt-10 font-semibold">{title}</h5>
                <p className="text-[18px] opacity-[0.8] font-medium">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="analyzed-text text-center">
          <h4
            data-aos="fade-up"
            className="font-semibold sm:text-[26px] text-[24px]"
          >
            We&apos;ve analyzed the data and have compelling{" "}
            <span className="text-gray-500">
              <br />
              statistics to share
            </span>
            .
          </h4>
        </div>
        <div className="counter grid grid-cols-12 sm:gap-7 gap-6 mt-10 justify-center">
          {counter.map(({ number, text, id, dataAosDelay }) => (
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={dataAosDelay}
              key={id}
              className="lg:col-span-4 md:col-span-6 col-span-12 text-center"
            >
              <h2 className="sm:text-[91px] text-[70px] font-semibold">
                {number}
              </h2>
              <p className="text-[18px] font-semibold text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
