"use client";

import Image from "next/image";
import React, { useState } from "react";

import logoImage from "@/public/assets/graphics/Logo.png";
import burgerMenu from "@/public/assets/graphics/burger-menu.svg";
import SidePanel from "./SidePanel";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-latte xl:h-20 lg:h-16 md:h-12 sm:h-10 xs:h-8 sticky z-40 w-full flex justify-between items-center">
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image src={logoImage} alt="logo" className="xl:h-[2.75rem] xl:w-[2rem] lg:h-[2.5rem] lg:w-[1.75rem] md:h-[2.25rem] md:w-[1.5rem] sm:h-[2rem] sm:w-[1.25rem] xs:h-[1.75rem] xs:w-[1.25rem]" />
          </Link>
        </div>
        <div className="ml-auto pr-10">
          <button onClick={togglePanel}>
            <Image src={burgerMenu} alt="menu" className="xl:h-[3.75rem] xl:w-[2.75rem] lg:h-[3.5rem] lg:w-[2.5rem] md:h-[3.25rem] md:w-[2.25rem] sm:h-[3rem] sm:w-[2rem] xs:h-[2.75rem] xs:w-[1.75rem]" />
          </button>
        </div>
      </nav>

      <SidePanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;
