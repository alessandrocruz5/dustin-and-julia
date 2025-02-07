import React from "react";
import arrowImage from "@/public/assets/graphics/arrow.svg";
import Image from "next/image";

function Button({ title, cssStyles }) {
  return (
    <div className={cssStyles}>
      <button className="rounded-xl bg-latte border-terracota border-solid border-2 w-[14rem] h-16 text-terracota">
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
