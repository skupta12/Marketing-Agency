import Image from "next/image";
import { trust } from "@/lib/placeholder-data";
import Button from "../components/Button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import style from "@/style";

const Trust = () => {
  return (
    <section className={`${style.sectionPadding}`}>
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 gap-7 lg:pb-32 pb-20">
          <div className="lg:col-span-4 col-span-12 lg:pr-5 pr-0">
            <h4
              data-aos="fade-right"
              className="lg:text-[26px] text-[24px] font-semibold"
            >
              More than 100 companies internationally{" "}
              <span className="text-gray-500">place their trust in us</span>.
            </h4>
          </div>
          <div className="lg:col-span-8 col-span-12 grid grid-cols-12 gap-5">
            {trust.map((item, index) => (
              <div key={index} className="sm:col-span-4 col-span-6">
                <div
                  data-aos="zoom-in"
                  className="bg-primary-200 p-12"
                >
                  <Image
                    className="mx-auto"
                    width={100}
                    height={100}
                    src={item.src}
                    alt="trust image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-12 gap-x-5 place-items-center">
          <div>
            <h4
              data-aos="fade-right"
              className="text-[34px] font-semibold mb-10"
            >
              Check out our range of social media{" "}
              <span className="text-gray-500">marketing options</span>.
            </h4>
            <Button href="/price" title="View Packages" />
          </div>
          <div>
            <Image
              className="w-full"
              data-aos="zoom-in"
              width={590}
              height={338}
              src="/media-ring.png"
              alt="media ring"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Trust;
