import style from "@/style";
import { ReactNode } from "react";

// Creating a container

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`${style.boxWidth}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
