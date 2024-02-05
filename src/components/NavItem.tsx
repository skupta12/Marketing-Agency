"use client";

import { useState } from "react";
import { navItems } from "../data/data";
import Link from "next/link";

export function NavItem() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false)
  }
  
  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className={`w-11 h-8 hover:scale-90 flex justify-around flex-col flex-wrap z-10 cursor-pointer transition-all duration-400`}
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
        className={`fixed left-0 right-0 top-0 h-screen flex justify-center items-center bg-white
        transition-transform duration-700 ease-in-out 
       ${
         isOpen ? "transform translate-y-[96px]" : "transform translate-y-full"
       }`}
      >
        <nav className="navbar">
          <ul className="text-center leading-tight">
            {navItems.map(({ id, name, href }) => (
              <li className="overflow-hidden" key={id}>
                <Link href={href}>
                  <div onClick={closeMenu} className="text-black lg:text-[90px] text-[50px] font-semibold">
                    <span className="relative inline-block transition-transform duration-500" data-hover={name}>{name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavItem;
