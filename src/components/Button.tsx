import { ArrowUpRight } from "lucide-react";

interface TitleProps {
  title: string;
}

const Button = ({ title }: TitleProps) => {
  return (
    <div>
      <button
        className="text-white text-[17px] font-medium px-11 
      py-4 inline-flex rounded-[30px] group bg-gradient-to-r from-purple-400 
      from-20% via-sky-600 via-50% to-cyan-400 to-90%"
        type="button"
      >
        {title}
        <ArrowUpRight className="ml-2 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      </button>
    </div>
  );
};

export default Button;
