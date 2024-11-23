"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  
  const [active, setActive] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const [rotate, setRotate] = useState<string>(
    "transform duration-400 ease-in-out"
  );

  const contentSpace = useRef<null>(null);

  return (
    <div className="flex flex-col">
      <button
        className="py-6 border-b-2 box-border appearance-none cursor-pointer 
        focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block sm:text-[20px] text-[16px] font-semibold">
          {title}
        </p>
        <div className="p-3 bg-black inline-block rounded-full">
          <Image
            className={`${rotate}`}
            src="/svg/plus.svg"
            alt="plus"
            width={15}
            height={15}
          />
        </div>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-300 ease-out"
      >
        <div className="py-6 text-[17px] text-gray-500 font-medium leading-[1.4] ">
          {content}
        </div>
      </div>
    </div>
  );

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-300"
        : "transform duration-300 rotate-[45deg]"
    );
  }
};

export default Accordion;
