import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="lg:pt-[180px] pt-[150px] lg:pb-24 pb-16">
      <MaxWidthWrapper>
        <div className="text-center">
          <h2 className="text-[70px] text-bold leading-tight mb-5">Bad Route 404</h2>
          <div className="relative inline-block">
            <Link className="text-[18px] font-medium leading-tight before:absolute before:content-[''] before:-bottom-1 before:w-full before:h-[2px] before:bg-gray-500" href="/">Go to the main page</Link>
          </div>
         
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default NotFound;
