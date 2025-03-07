"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NavItem } from "@/components/common/NavItem";

const Header = () => {
  const [scrollAlpha, setScrollAlpha] = useState<number>(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollAlpha = Math.min(scrollTop / 300);
      setScrollAlpha(scrollAlpha);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: `rgba(255, 255, 255, ${scrollAlpha})`,
  };

  return (
    <header className={`w-full fixed top-0 left-0 z-[111]`} style={headerStyle}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-20 lg:py-7 py-5">
        <div className="flex items-center justify-between">
          <div className="header-logo ">
            <Link href="/">
              <h6 className="font-semibold text-[30px]">Liège</h6>
            </Link>
          </div>
          <NavItem />
        </div>
      </div>
    </header>
  );
};

export default Header;
