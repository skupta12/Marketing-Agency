import { footer, media } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="lg:pt-24 pt-16 lg:pb-12 pb-10 border-t border-gray-100">
      <MaxWidthWrapper>
        <div className="grid grid-cols-12">
          <div className="lg:col-span-7 col-span-12 lg:mb-0 mb-14">
            <div className="inline-block text-[14px] font-semibold border-2 
            border-black px-5 py-2 rounded-full mb-10">
              VISIT US
            </div>
            <div className="grid grid-cols-12 gap-6">
              {footer.map(({ id, city, street }) => (
                <div
                  key={id}
                  className="lg:col-span-4 md:col-span-6 col-span-12"
                >
                  <p className="inline-block text-[16px] font-semibold mb-5 text-gray-500 relative">
                    <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-black"></span>
                    {city}
                  </p>
                  <p className="text-[18px] font-medium text-gray-500">
                    {street}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 col-span-12 lg:ml-14 lg:justify-self-center">
            <div className="inline-block text-[14px] font-semibold border-2 
            border-black px-5 py-2 rounded-full sm:mb-10 mb-5">
              STAY IN TOUCH
            </div>
            <p className="mb-4 text-[16px] font-semibold text-gray-500 relative">
              +1 333 20 98 40
            </p>
            <p className="text-[16px] font-semibold text-gray-500 sm:mb-10 mb-5 relative">
              contact@liege.com
            </p>
            <div className="flex items-center gap-x-4">
              {media.map(({ id, href }) => (
                <Link key={id} href="#">
                  <Image
                    className="hover:scale-90"
                    width={20}
                    height={20}
                    src={href}
                    alt="media logo"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between items-center gap-5 mt-20">
          <div className="flex items-center gap-x-5 text-[16px] text-gray-500 
          font-medium lg:mt-0 mt-3">
            <Link className="relative inline-block" href="#">
              <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-black"></span>
              Style Guide
            </Link>

            <Link className="relative inline-block" href="#">
              <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-black"></span>
              Image Licensing
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
