import Image from "next/image";
import { trust } from "@/lib/placeholder-data";
import Button from "../common/Button";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import style from "@/style";
import Ring from "/public/media-ring.png"
import OSTransition, { YXtransition } from "@/components/common/Transition";

const Trust = () => {
  return (
    <>
    <section className={style.section}>
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 sm:gap-x-7 gap-x-6 gap-y-7">
          <div className="lg:col-span-4 col-span-12">
            <YXtransition x={-40}>
            <h4
              className="lg:text-[26px] text-[24px] font-semibold"
            >
              More than 100 companies internationally{" "}
              <span className="text-gray-500">place their <br /> trust in us</span>.
            </h4>
            </YXtransition>
          
          </div>
          <div className="lg:col-span-8 col-span-12">
            <div className="grid grid-cols-12 gap-5">
              {trust.map((item, index) => (
                <div key={index} className="sm:col-span-4 col-span-6">
                  <OSTransition scale={0.5}>
                  <div
                    className="bg-primary-200 lg:px-16 px-12 py-9 lg:py-11 h-full"
                  >
                    <Image
                      className="mx-auto"
                      width={100}
                      height={30}
                      src={item.src}
                      alt="trust image"
                    />
                  </div>
                  </OSTransition>
                
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </MaxWidthWrapper>
    </section>
    <section className={style.section}>
      <MaxWidthWrapper>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-12 gap-x-5 place-items-center">
          <div>
            <YXtransition x={-40}>
            <h4
              className="text-[34px] font-semibold mb-10"
            >
              Check out our range of social media{" "}
              <span className="text-gray-500">marketing options</span>.
            </h4>
            </YXtransition>
              <YXtransition x={-40} delay={0.4}>
                <Button type="button" href="/price" title="View Packages" />
              </YXtransition>
            
          </div>
          <OSTransition scale={0.6} delay={0.1}>
            <Image
              className="w-full"
              width={590}
              height={338}
              src={Ring}
              alt="media ring"
            />
          </OSTransition>
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
};

export default Trust;
