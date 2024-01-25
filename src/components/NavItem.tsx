"use client"

import { useState } from "react";
import NavItems from "./NavItems";


export function NavItem() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className={`w-8 h-8 hover:scale-90 flex justify-around flex-col flex-wrap z-10 cursor-pointer transition-all duration-400`}
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
        className={`fixed left-0 right-0 top-0 h-screen flex justify-center items-center bg-white transition-transform duration-700 ease-in-out 
       ${isOpen ? "transform translate-y-[90px]" : "transform translate-y-full"}`}
      >
        {isOpen ? <NavItems/> : <NavItems/>}
      </div>
    </>
  );
}

export default NavItem;

