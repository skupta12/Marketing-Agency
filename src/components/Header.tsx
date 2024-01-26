"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/components/NavItem";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
      setInitialLoad(false);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const headerStyle = {
    backgroundColor: isScrolled || initialLoad ? "white" : "transparent",
    transition: "background-color 0.3s ease",
  };

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-[111] transition-all duration-300`}
        style={headerStyle}
      >
        <div className="max-w-[1536px] mx-auto px-4 md:px-20 py-8">
          <div className="flex items-center justify-between">
            <div className="header-logo ">
              <Link href="/">
                <Image
                  quality={100}
                  width={70}
                  height={70}
                  src="/header-logo.png"
                  alt="header logo"
                />
              </Link>
            </div>
            <div className="nav-items">
              <NavItem />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
