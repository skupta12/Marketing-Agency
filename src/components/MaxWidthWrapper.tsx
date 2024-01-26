import { ReactNode } from "react";

// Creating a container

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string; // optional
  children: ReactNode;
}) => {
  return (
    <div
      className="mx-auto max-w-[1360px] px-4 md:px-20"
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
