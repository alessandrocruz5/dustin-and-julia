import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrowImage from "@/public/assets/graphics/arrow.svg";

interface ButtonProps {
  title: string;
  cssStyles?: string;
  href: string;
  external?: boolean;
}

function Button({
  title,
  cssStyles = "",
  href,
  external = false,
}: ButtonProps) {
  const buttonContent = (
    <div className="flex justify-evenly">
      <div className="flex items-center xl:text-3xl md:text-2xl xs:text-lg font-bold justify-center">
        {title}
      </div>
      <div>
        <Image
          src={arrowImage}
          alt="arrow"
          className="flex items-center justify-center xl:w-[3rem] lg:w-[2rem] md:w-[2rem] sm:w-[1.75rem] xs:w-[1.75rem]"
        />
      </div>
    </div>
  );

  const buttonClasses =
    "rounded-xl hover:bg-fair hover:text-terracotta bg-latte border-terracotta border-solid border-2 xl:w-[14rem] lg:w-[12rem] md:w-[10rem] sm:w-[8rem] xs:w-[8rem] xl:h-[5rem] lg:h-[4.5rem] md:h-[4rem] sm:h-[3.5rem] xs:h-[3rem] text-terracotta";

  return (
    <div className={cssStyles}>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {buttonContent}
        </a>
      ) : (
        <Link href={href}>
          <button className={buttonClasses}>{buttonContent}</button>
        </Link>
      )}
    </div>
  );
}

export default Button;
