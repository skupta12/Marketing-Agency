import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { fetchBlog } from "@/lib/data";


export default async function postDetails({ params }: { params: { postId: string } }) {

  const id = params.postId;

  return (
    <section className="pt-[150px] lg:pb-24 pb-16 relative">
      <MaxWidthWrapper>
        <div>
          <h1 className="text-black">{id}</h1>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

