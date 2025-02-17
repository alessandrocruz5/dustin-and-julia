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
      <nav className="fixed w-screen h-[4rem] bg-latte z-[998]">
        <div className="flex justify-between items-center h-full">
          <div className="flex justify-center items-center">
            <Link href="/">
              <Image
                src={logoImage}
                alt="dustin & julia"
                className="w-[1.7rem] flex justify-center ml-4"
              />
            </Link>
          </div>
          <div>
            <Image
              src={burgerMenu}
              alt="burger menu"
              className="w-[2rem] mr-4"
              onClick={togglePanel}
            />
          </div>
        </div>
      </nav>

      <SidePanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;
