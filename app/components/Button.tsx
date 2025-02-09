import React from "react";
import arrowImage from "@/public/assets/graphics/arrow.svg";
import Image from "next/image";

interface ButtonProps {
  title: string;
  cssStyles: string;
}

function Button({ title, cssStyles }: ButtonProps) {
  return (
    <div className={cssStyles}>
      <button className="rounded-xl hover:bg-fair hover:text-terracotta  bg-latte border-terracotta border-solid border-2 w-[14rem] h-16 text-terracotta">
        <div className="flex justify-evenly">
          <div className="flex items-center text-3xl font-bold justify-center">
            {title}
          </div>
          <div>
            <Image
              src={arrowImage}
              alt="arrow"
              width={40}
              className="flex items-center justify-center"
            />
          </div>
        </div>
      </button>
    </div>
  );
}

export default Button;
