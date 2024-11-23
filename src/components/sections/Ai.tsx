import Image from "next/image";
import { Check } from "lucide-react";
import { aiList } from "@/lib/placeholder-data";
import { DownloadButton } from "../common/Button";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import style from "@/style";
import { YXtransition } from "@/components/common/Transition";

const Ai = () => {
  return (
    <section className={`${style.section}`}>
      <YXtransition y={70} delay={0.1}>
        <MaxWidthWrapper>
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div>
              <h4 className="sm:text-[34px] text-[30px] font-semibold leading-tight">
                Artificial Intelligence solutions that deliver
                <span className="text-gray-500"> remarkable success</span>.
              </h4>
              <ul className="mt-10 mb-14">
                {aiList.map((content, i) => (
                  <li key={i} className="flex items-center gap-x-2 mb-5">
                    <div className="bg-primary-200 rounded-full p-2">
                      <Check className=" w-[15px] h-[15px] text-black/50" />
                    </div>

                    <p className="sm:text-[17px] text-[16px] font-medium">
                      {content.content}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="sm:flex gap-x-4">
                <DownloadButton
                  type="button"
                  className="shadow-lg text-black"
                  title="Download IOS"
                  icon="IOS"
                />
                <DownloadButton
                  type="button"
                  className="bg-black text-white sm:mt-0 mt-5"
                  title="Download Android"
                  icon="Android"
                />
              </div>
            </div>
            <div className="relative overflow-hidden lg:h-[640px] h-[400px]">
              <Image
                className="object-cover"
                quality={100}
                fill
                src="/ai.jpg"
                alt="ai image"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </YXtransition>
    </section>
  );
};

export default Ai;
