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
      className="container px-4 md:px-20"
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
