import Image from "next/image";
import React from "react";

import logoImage from "@/public/assets/graphics/Logo.png";
import burgerMenu from "@/public/assets/graphics/burger-menu.svg";

function Navbar() {
  return (
    <nav className="bg-latte h-20 sticky z-40 w-full flex justify-between items-center">
      <div className="absolute left-1/2 -translate-x-1/2">
        <Image src={logoImage} alt="logo" height={55} />
      </div>
      <div className="ml-auto pr-10">
        <Image src={burgerMenu} alt="menu" height={50} />
      </div>
    </nav>
  );
}

export default Navbar;
