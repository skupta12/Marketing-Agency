"use client";

import Faq from "@/components/sections/Faq";
import { playfair } from "../../fonts";
import Image from "next/image";
import { contact } from "@/lib/placeholder-data";
import { BlackButton } from "@/components/common/Button";
import Gradient from "@/components/common/Gradient";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import styles from "@/style";
import CTA from "@/components/sections/CTA";
import ContactImage from "/public/blog/blogd-1.jpg";
import { YXtransition } from "@/components/common/Transition";
import { schema } from "@/lib/validators";
import { z } from "zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { errorMessages } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {
  
  type FormFields = z.infer<typeof schema>;

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(data);

      setIsFormSubmitted(true);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <>
      <section className={`${styles.route} lg:pb-24 pb-16 relative`}>
        <Gradient
          fill
          className="sm:block hidden"
          src="/gradient.png"
          isPriority
        />
        <Gradient
          fill
          className="sm:hidden block"
          src="/gradient-mobile.png"
          isPriority
        />

        <MaxWidthWrapper>
          <YXtransition y={40}>
            <div className="text-center lg:mb-48 mb-20 relative">
              <h1 className="lg:text-[100px] md:text-[80px] text-[46px] font-semibold">
                Stay in <span className={playfair.className}>touch</span>
              </h1>
              <div>
                <span className="hscroll-line"></span>
              </div>
            </div>
          </YXtransition>
          <YXtransition y={40} delay={0.2}>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-6 col-span-12 lg:pr-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-12 gap-4">
                    {contact.map(({ id, label, placeholder, type, name }) => {
                      return (
                        <div key={id} className="lg:col-span-6 col-span-12">
                          <label className="form-label">{label}</label>
                          <input
                            {...register(name as keyof FormFields)}
                            className="mt-2 w-full border-2 border-black rounded-md p-[14px] 
                          placeholder:text-black placeholder:font-medium 
                            focus:outline-none focus:border-sky-500"
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            // required
                          />
                          {/* @ts-expect-error */}
                          {errors[name] && (
                            <div className="text-red-500 text-[14px] mt-2">
                              {/* @ts-expect-error */}
                              {errorMessages[name]}
                            </div>
                          )}
                        </div>
                      );
                    })}
                    <div className="col-span-12 mt-4">
                      <BlackButton
                        type="submit"
                        className={`w-full ${
                          isSubmitting ? "bg-black/85" : ""
                        }`}
                        title={isSubmitting ? "Loading..." : "Send a message"}
                      />
                      {errors.root && (
                        <div className="text-red-500">
                          {errors.root.message}
                        </div>
                      )}
                      {isFormSubmitted ? (
                        <div className="text-red-500 text-[14px] mt-2">
                          Disabled
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </form>
              </div>
              <div className="lg:col-span-6 col-span-12 lg:mt-0 mt-8">
                <div className="relative lg:h-[400px] md:h-[420px] h-[260px] overflow-hidden">
                  <Image
                    className="object-cover"
                    fill
                    loading="eager"
                    src={ContactImage}
                    alt="contact image"
                    sizes="(min-width: 1440px) 592px, 
                    (min-width: 1040px) 42.11vw, (min-width: 780px) 
                    calc(100vw - 112px), calc(100vw - 32px)"
                  />
                </div>
              </div>
            </div>
          </YXtransition>
        </MaxWidthWrapper>
      </section>
      <Faq />
      <CTA />
    </>
  );
};

export default Contact;
