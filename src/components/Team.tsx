import { playfair } from "@/app/fonts";
import { media, team } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <section className="lg:py-32 py-16">
      <div className="container md:px-10 px-5">
        <h3 className="text-center sm:text-[40px] text-[36px] font-semibold">
          The <span className={playfair.className}>team</span>
        </h3>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 pt-10">
          {team.map(({ id, src, prof, name }) => (
            <div key={id} className="lg:col-span-4 md:col-span-6 col-span-12">
              <Image
                className="w-full"
                width={500}
                height={500}
                src={src}
                alt="blog post"
              />
              <div className="text-center">
                <span className="inline-block font-semibold text-[22px] mt-6 mb-2">
                  {name}
                </span>
                <Link href="#">
                  <p className="text-[17px] text-gray-500 font-semibold">
                    {prof}
                  </p>
                </Link>
                <span className="text-gray-500 font-medium text-[18px]">
                  <div className="flex items-center justify-center gap-x-4 mt-4">
                    {media.map(({ id, href }) => (
                      <Link href="#" key={id}>
                        <Image
                          className="hover:scale-90"
                          width={20}
                          height={20}
                          src={href}
                          alt="media logo"
                        />
                      </Link>
                    ))}
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
