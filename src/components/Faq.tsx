import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Accordion from "./Accordion";
import { accordion } from "@/lib/placeholder-data";
import style from "@/style";

const Faq = () => {
  return (
    <section className={`${style.sectionPadding}`}>
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="text">
            <h2 className="sm:text-[50px] text-[40px] leading-tight font-semibold">
              Frequently <span className="text-gray-500">asked questions</span>.
            </h2>
          </div>
          <div className="accordion">
            {accordion.map(({ id, title, content }) => {
              return (
                <Accordion key={id} content={content} title={title} />
              )
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Faq;
