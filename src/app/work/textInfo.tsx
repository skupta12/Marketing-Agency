import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { workList } from "@/lib/placeholder-data";
import styles from "@/style";
import Image from "next/image";

const TextInfo = ({ secSrc }: { secSrc: string }) => {
  return (
    <section className={`${styles.sectionPadding}`}>
      <MaxWidthWrapper>
        <div>
          <h3 className="text-[24px] font-medium mb-2 leading-tight">
            Objective
          </h3>
          <p className="sm:text-[18px] text-gray-500 font-medium leading-[2] mb-10">
            To design a illustration for a small business that accurately
            represents their brand and appeals to their target audience. <br />
            Webflow is the Berlin-based Series A startup on its way to becoming
            the leading finance platform for SMEs, freelancers, and
            self-employed persons.
          </p>
          <h3 className="text-[24px] font-medium mb-2 leading-tight">
            What we&apos;ve done
          </h3>
          <ol className="list-decimal list-inside">
            {workList.map((item, i) => {
              return (
                <li
                  className="sm:text-[18px] text-gray-500 font-medium mb-[6px]"
                  key={i}
                >
                  {item.text}
                </li>
              );
            })}
          </ol>
          <div className="w-full h-auto">
            <hr className="sm:mt-20 mt-10 sm:mb-16 mb-8 text-gray-300" />
            <div className="relative lg:h-[750px] md:h-[500px] h-[260px] overflow-hidden">
              <Image
                className="object-cover"
                fill               
                src={secSrc}
                alt="second details image"
                sizes="(min-width: 1440px) 1200px, (min-width: 780px) 83.13vw, calc(100vw - 32px)"
              />
            </div>

            <hr className="sm:mt-20 mt-10 sm:mb-16 mb-8 text-gray-300"/>
          </div>
          <div>
            <h3 className="text-[24px] font-medium mb-2 leading-tight">
              Creative Process
            </h3>
            <ol className="list-decimal list-inside">
              {workList.map((item, i) => {
                return (
                  <li
                    className="sm:text-[18px] text-gray-500 font-medium mb-[6px]"
                    key={i}
                  >
                    {item.text}
                  </li>
                );
              })}
            </ol>
            <h3 className="text-[24px] font-medium mb-2 mt-10 leading-tight">
              Results
            </h3>
            <p className="sm:text-[18px] text-gray-500 font-medium mb-10">
              The new logo accurately represented the brand&apos;s values and
              appealed to their target audience. The business reported increased
              website traffic and social media engagement, and the logo was
              featured in several local publications.
            </p>
            <h3 className="text-[24px] font-medium mb-2 leading-tight">
              Conclusion
            </h3>
            <p className="sm:text-[18px] text-gray-500 font-medium mb-10">
              Through careful research and a collaborative design process, I was
              able to create a unique and effective logo design that met the
              client&apos;s objectives and helped them to achieve their business
              goals.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TextInfo;
