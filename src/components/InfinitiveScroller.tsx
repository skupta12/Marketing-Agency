"use client";

import { useEffect, useRef } from "react";

const InfinitiveScroller = ({ title }: { title: string }) => {
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller-box");

    scrollers.forEach((scroller) => {
      if (isFirstRender.current) {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller-list");

        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      }
    });

    isFirstRender.current = false;
  }, []);

  return (
    <ul className="scroller-list flex flex-nowrap gap-[1rem] pointer-events-none select-none">
      <li
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-once="true"
        // data-aos-offset="-500"
        className="p-[1rem]"
      >
        <span className={`lg:text-[55px] text-[40px] text-white font-semibold`}>
          {title}
        </span>
      </li>
    </ul>
  );
};

export default InfinitiveScroller;
