import NotFound from "@/app/not-found";
import { BlackButton } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { portfolio } from "@/lib/placeholder-data";
import styles from "@/style";
import Image from "next/image";
import TextInfo from "../textInfo";
import CTA from "@/sections/CTA";

export default function Page({ params }: { params: { url: string } }) {

  const work = portfolio?.find((obj) => obj.url === params.url);

  if (!work) {
    return <NotFound />;
  }

  const { src, secSrc, scrollerTitle, client, role, recognition, year } = work;

  return (
    <>
    <section className={`${styles.routePadding} lg:pb-24 pb-16`}>
      <MaxWidthWrapper>
        <div className="mb-12">
          <h1 className="lg:text-[65px] md:text-[58px] text-[34px] font-semibold leading-tight tracking-[1.5px]">
            {scrollerTitle}
          </h1>
        </div>
        <div className="grid grid-cols-12 sm:gap-x-10 gap-x-5 gap-y-10 items-center">
          <div className="lg:col-span-7 col-span-12">
            <div className="relative overflow-hidden sm:h-[478px] h-[260px]">
              <Image
              className="object-cover"
              fill
              src={src}
              sizes="(min-width: 1440px) 683px, (min-width: 1040px) 48.95vw, (min-width: 780px) calc(100vw - 112px), calc(100vw - 32px)"
              alt="work image details" 
              loading="eager"
              // priority
              />
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12 flex flex-col h-full justify-center border border-gray-300">
            <div className="flex flex-col justify-center p-10">
              <div
                className={`${styles.flexBetween} border-b border-gray-300 pb-4`}
              >
                <p className="text-gray-600 text-[15px] font-semibold">
                  CLIENT
                </p>
                <p className="sm:text-[18px] font-medium text-gray-500">
                  {client}
                </p>
              </div>
              <div
                className={`${styles.flexBetween} border-b border-gray-300 py-4`}
              >
                <p className="text-gray-600 text-[15px] font-semibold">ROLE</p>
                <p className="sm:text-[18px] font-medium text-gray-500">{role}</p>
              </div>
              <div
                className={`${styles.flexBetween} border-b border-gray-300 py-4`}
              >
                <p className="text-gray-600 text-[15px] font-semibold">
                  RECOGNITION
                </p>
                <p className="sm:text-[18px] font-medium text-gray-500">
                  {recognition}
                </p>
              </div>
              <div
                className={`${styles.flexBetween} border-b border-gray-300 py-4`}
              >
                <p className="text-gray-600 text-[15px] font-semibold">YEAR</p>
                <p className="text-[18px] font-medium text-gray-500">{year}</p>
              </div>
              <BlackButton className="mt-8" title="Launch Project" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
    
    <TextInfo secSrc={secSrc} />
    <CTA />
    </>
  );
}
