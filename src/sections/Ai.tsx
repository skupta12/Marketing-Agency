import Image from "next/image";
import { Check } from "lucide-react";
import { aiList } from "@/lib/placeholder-data";
import { DownloadButton } from "../components/Button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import style from "@/style";

const Ai = () => {
  return (
    <section className={`${style.sectionPadding}`}>
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div
            data-aos="fade-up"
            data-aos-offset="-350"
          >
            <h4 className="sm:text-[34px] text-[30px] font-semibold leading-tight">
              Artificial Intelligence solutions that deliver
              <span className="text-gray-500"> remarkable success</span>.
            </h4>
            <ul className="mt-10 mb-14">
              {aiList.map(({ id, content }) => (
                <li key={id} className="flex items-center gap-x-2 mb-5">
                  <div className="bg-primary-200 rounded-full p-2">
                    <Check className="w-[15px] h-[15px] text-black/50" />
                  </div>

                  <p className="sm:text-[17px] text-[16px] font-medium">
                    {content}
                  </p>
                </li>
              ))}
            </ul>
            <div className="sm:flex gap-x-4">
              <DownloadButton
                className="shadow-lg text-black"
                title="Download IOS"
                icon="IOS"
              />
              <DownloadButton
                className="bg-black text-white sm:mt-0 mt-5"
                title="Download Android"
                icon="Android"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="-350"
          >
            <Image quality={100} width={900} height={800} src="/ai.jpg" alt="ai image" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Ai;
