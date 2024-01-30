import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Check } from "lucide-react";

const Ai = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center gap-x-10">
        <div>
          <h4 className="sm:text-[34px] text-[30px] font-semibold leading-tight">
            Artificial Intelligence solutions that deliver
            <span className="text-gray-500"> remarkable success</span>.
          </h4>
          <ul>
            <li className="flex items-center gap-x-2 sm:text-[17px] text-[16px] font-medium mt-10 mb-5">
              <Check className="w-[20px] h-[20px]" />
              <p>Marketing plans powered by AI technology</p>
            </li>
            <li className="flex items-center gap-x-2 sm:text-[17px] text-[16px] font-medium mb-5">
            <Check className="w-[20px] h-[20px]" />
              <p>Marketing plans powered by AI technology</p>
            </li>
            <li className="flex items-center gap-x-2 sm:text-[17px] text-[16px] font-medium mb-5">
            <Check className="w-[20px] h-[20px]" />
              <p>Marketing plans powered by AI technology</p>
            </li>
            <li className="flex items-center gap-x-2 sm:text-[17px] text-[16px] font-medium">
            <Check className="w-[20px] h-[20px]" />
              <p>Marketing plans powered by AI technology</p>
            </li>
          </ul>
        </div>
        <div>
          <Image width={900} height={800} src="/ai.jpg" alt="ai image" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Ai;
