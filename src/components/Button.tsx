import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface TitleProps {
  title: string;
  icon?: string;
  className?: string;
}

const Button = ({ title, className }: TitleProps) => {
  return (
    <>
      <button
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="400"
        data-aos-once="true"
        data-aos-offset="-250"
        className={`${className} text-white text-[17px] font-medium px-11 
      py-4 inline-flex rounded-[30px] group bg-gradient-to-r from-purple-400 
      from-20% via-sky-600 via-50% to-cyan-400 to-90%`}
        type="button"
      >
        {title}
        <ArrowUpRight className="ml-2 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      </button>
    </>
  );
};

export const DownloadButton = ({ title, icon, className }: TitleProps) => {
  return (
    <>
      <button
        className={`${className} text-[17px] font-medium px-9 
        py-5 inline-flex gap-x-4 sm:w-auto w-full items-center justify-center rounded-[50px] group text-black transform hover:-translate-y-[2px] transition duration-300`}
        type="button"
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

export default Button;
