"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type TitleProps = {
  title: string;
  icon?: string;
  className?: string;
  href?: string;
  type: "button" | "reset" | "submit";
};

export const Button = ({ title, className, href = "/", type }: TitleProps) => {
  
  const router = useRouter();

  return (
    <Link href={href} onClick={() => router.push(href)}>
      <button
        className={`${className} text-white text-[17px] font-medium px-11 
          py-4 inline-flex rounded-[30px] group bg-gradient-to-r from-purple-400 
          from-20% via-sky-600 via-50% to-cyan-400 to-90%`}
        type={type}
      >
        {title}
        <ArrowUpRight
          className="ml-2 transition group-hover:translate-x-[2px] 
          group-hover:-translate-y-[2px]"
        />
      </button>
    </Link>
  );
};

export const DownloadButton = ({ title, icon, className, type }: TitleProps) => {
  return (
    <>
      <button
        className={`${className} text-[17px] font-medium px-9 
        py-5 inline-flex gap-x-4 sm:w-auto w-full items-center justify-center rounded-[50px] 
        group text-black transform hover:-translate-y-[2px] transition duration-300`}
        type={type}
      >
        {icon === "IOS" ? (
          <Image width={25} height={25} src="/apple.png" alt="apple icon" />
        ) : (
          <Image width={25} height={25} src="/android.png" alt="android icon" />
        )}
        {title}
      </button>
    </>
  );
};

export const BlackButton = ({ title, className, type }: TitleProps) => {
  return (
    <>
      <button
        type={type}
        className={`${className} inline-block font-semibold text-center bg-black 
        text-white px-7 py-[14px] rounded-lg`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
