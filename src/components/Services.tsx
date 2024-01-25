import MaxWidthWrapper from "./MaxWidthWrapper";
import { playfair } from "./Hero";
import { services } from "@/data";
import Image from "next/image"

const Services = () => {
  return (
    <MaxWidthWrapper>
      <div>
        <div className="text-center">
          <h3 className="text-[50px] font-semibold">What <span className={`font-medium ${playfair.className}`}>we do</span></h3>
          <p className="text-[26px] font-medium">Build a customer-focused <span className="text-gray-500">business approach</span>.</p>
        </div>
        <div className="grid grid-cols-12 gap-4 lg:pt-20 pt-10"> 
            {services.map((item) => (
              <div className="w-full lg:col-span-4 md:col-span-6 col-span-12 bg-primary-200 p-12" key={item.id}>
                <div className="services-icon flex flex-col justify-center items-center w-[100px] h-[100px] bg-white rounded-full p-6">
                  <Image width={45} height={45} src={item.icon} alt="service icon" />
                </div>
                <div className="services-text">
                  <h5 className="text-[22px] mt-10 font-semibold">{item.title}</h5>  
                  <p className="text-[18px] opacity-[0.8] font-medium">{item.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Services;
