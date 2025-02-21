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
      <div className="fixed top-0 z-[999] w-full">
        <nav className="fixed w-screen h-[4rem] lg:h-[5rem] bg-latte z-[998]">
          <div className="flex justify-between lg:justify-end items-center h-full">
            <div className="flex justify-center items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <Link href="/">
                <Image
                  src={logoImage}
                  alt="dustin & julia"
                  className="w-[1.7rem] flex justify-center ml-4 lg:w-[2.2rem] lg:ml-10"
                  loading="lazy"
                />
              </Link>
            </div>
            <div>
              <Image
                src={burgerMenu}
                alt="burger menu"
                className="w-[2rem] mr-4 lg:w-[3rem] lg:mr-10"
                onClick={togglePanel}
                loading="lazy"
              />
            </div>
          </div>
        </nav>
      </div>

      <SidePanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;
