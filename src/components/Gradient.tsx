import Image from "next/image";

const Gradient = ({
  src,
  isPriority,
  className,
}: {
  src: string;
  isPriority?: boolean;
  className?: string;
}) => {
  return (
    <Image
      src={src}
      fill
      priority={isPriority}
      alt="gradients"
      className={`${className} absolute bg-no-repeat bg-center w-full h-full -z-[1]`}
    />
  );
};

export default Gradient;
