import React from "react";
import { fetchCurrentPost } from "@/lib/data";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { oswald } from "@/app/fonts";
import NotFound from "@/app/not-found";
import CTA from "@/sections/CTA";

export default async function Page({ params }: { params: { url: string } }) {

  const blogs = await fetchCurrentPost();
  const post = blogs?.find((obj) => obj.url === params.url);

  if (!post) {
    return <NotFound />
  }

  const { srcd, text, label, blur } = post;

  return (
    <>
      <section className="lg:pt-[180px] pt-[150px] lg:pb-24 pb-16 relative">
        <MaxWidthWrapper>
          <div className="text-center">
            <span className="text-[15px] inline-block font-semibold border-2 
            border-black px-4 py-1 rounded-full mb-7">
              {label}
            </span>
            <div className="md:mb-20 mb-10">
              <h1 className="font-semibold text-[30px] lg:text-[70px] 
              md:text-[50px] xl:text-[94px] leading-[1.1]">
                {text}
              </h1>
            </div>

            <div className="relative lg:h-[750px] md:h-[500px] h-[320px] overflow-hidden">
              <Image
                className="object-cover"
                src={srcd}
                alt="blog details image"
                fill 
                priority
                loading="eager"
                quality={90}
                placeholder="blur"
                blurDataURL={blur}
                sizes="(min-width: 1360px) 1000px, (min-width: 780px) 83.13vw, calc(100vw - 32px)"
              />
            </div>
          </div>
          <div className="text-info">
            <p className="text-gray-500 sm:text-[18px] text-base font-medium mt-14 mb-[10px]">
              The rich text element allows you to create and format headings,
              paragraphs, block-quotes, images, and video all in one place
              instead of having to add and format them individually. Just
              double-click and easily create content.
            </p>
            <p className="text-gray-500 sm:text-[18px] text-base font-medium mb-10">
              For dynamic content, add a rich text field to any collection and
              then connect a rich text element to that field in the settings
              panel. Headings, paragraphs, block-quotes, figures, images, and
              figure captions can all be styled.
            </p>
            <h3 className="text-[24px] font-medium mb-[10px] leading-tight">
              We love design beautiful things.
            </h3>
            <p className="text-gray-500 sm:text-[18px] text-base font-medium mb-10">
              Headings, paragraphs, blockquotes, figures, images, and figure
              captions can all be styled after a class is added to the rich text
              element using the &quot;When inside of&quot; nested selector
              system. A rich text element can be used with static or dynamic
              content. For static content, just drop it into any page and begin
              editing.
            </p>
            <div className="relative">
              <blockquote
                className={`${oswald.className} blockquote text-[25px] leading-tight 
                before:absolute before:content-[''] before:w-[1px] before:h-full 
                before:left-0 before:bg-black pl-5 mb-10`}
              >
                A rich text element can be used with static or dynamic content.
                For static content, just drop it into any page and begin
                editing.
              </blockquote>
            </div>

            <p className="text-gray-500 sm:text-[18px] text-base font-medium mb-10">
              The rich text element allows you to create and format headings,
              paragraphs, blockquotes, images, and video all in one place
              instead of having to add and format them individually. Just
              double-click and easily create content.
            </p>
            <h3 className="text-[24px] font-medium mb-[10px] leading-tight">
              How to customize formatting for each rich text.
            </h3>
            <p className="text-gray-500 sm:text-[18px] text-base font-medium">
              The rich text element allows you to create and format headings,
              paragraphs, blockquotes, images, and video all in one place
              instead of having to add and format them individually. A rich text
              element can be used with static or dynamic content. For static
              content, just drop it into any page and begin editing. For dynamic
              content, add a rich text field to any collection and then connect
              a rich text element to that field in the settings panel. Voila!
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
      <CTA />
    </>
  );
}
