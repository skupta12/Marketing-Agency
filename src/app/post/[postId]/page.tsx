import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const page = ({ params }: { params: { postId: string } }) => {
  return (
    <section className="pt-[150px] lg:pb-24 pb-16 relative">
      <MaxWidthWrapper>
        <div>
          <h1 className="text-black">{params.postId}</h1>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default page;
