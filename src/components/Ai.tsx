"use client";

import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Check } from "lucide-react";
import { aiList } from "@/data/data";
import { DownloadButton } from "./Button";

const Ai = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid lg:grid-cols-2 items-center gap-10">
        <div>
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
        <div>
          <Image width={900} height={800} src="/ai.jpg" alt="ai image" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Ai;
