"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/lib/placeholder-data";
import Link from "next/link";

export function NavItem() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
      setIsOpen((prev) => !prev)
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        aria-label="Burger Menu"
        className={`w-11 h-8 hover:scale-90 flex justify-around flex-col flex-wrap 
        z-10 cursor-pointer transition-all duration-400`}
      >
        <div
          className={`bg-black block w-8 h-[2px] transition-all origin-[5px] 
              ${isOpen ? "rotate-45" : "rotate-0"}`}
        />
        <div
          className={`bg-black block w-8 h-[2px] transition-all origin-[5px] 
              ${isOpen ? "rotate-[-45deg]" : "rotate-0"}`}
        />
      </button>

      <div
        className={`fixed bg-white left-0 -z-[1] right-0 top-0 
        h-screen flex justify-center items-center
        transition-transform duration-[850ms] ease-in-out 
       ${isOpen ? "transform translate-y-0" : "transform translate-y-full"}`}
      >
        <nav className="navbar">
          <ul>
            <AnimatePresence>
              {isOpen &&
                navItems.map(({ id, name, href, number, delay }) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, ease: "backIn", delay: delay }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.7, ease: "backOut" },
                    }}
                  >
                    <div className="flex gap-x-3 justify-center leading-tight relative">
                      <span className="flex flex-col justify-center items-center border-2 border-black rounded-full p-1 w-[40px] h-[40px]">
                        {number}
                      </span>
                      <li className="overflow-hidden">
                        <Link href={href}>
                          <div
                            onClick={() => setIsOpen(false)}
                            className="text-black lg:text-[90px] text-[50px] font-semibold"
                          >
                            <span
                              className="relative inline-block transition-transform duration-500"
                              data-hover={name}
                            >
                              {name}
                            </span>
                          </div>
                        </Link>
                      </li>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavItem;
