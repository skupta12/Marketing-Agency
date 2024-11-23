import Image from "next/image";

const Gradient = ({
  src,
  fill,
  isPriority,
  className,
}: {
  src: string;
  fill?: boolean
  isPriority?: boolean;
  className?: string;
}) => {
  return (
    <Image
      src={src}
      fill={fill}
      priority={isPriority}
      alt="gradients"
      className={`${className} -z-[1]`}
    />
  );
};

export default Gradient;
