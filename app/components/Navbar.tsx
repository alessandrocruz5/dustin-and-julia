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
      <nav className="bg-latte h-20 sticky z-40 w-full flex justify-between items-center">
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image src={logoImage} alt="logo" height={55} />
          </Link>
        </div>
        <div className="ml-auto pr-10">
          <button onClick={togglePanel}>
            <Image src={burgerMenu} alt="menu" height={50} />
          </button>
        </div>
      </nav>

      <SidePanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;
