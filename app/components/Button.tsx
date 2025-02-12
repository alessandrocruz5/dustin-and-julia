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
  );

  const buttonClasses =
    "rounded-xl hover:bg-fair hover:text-terracotta bg-latte border-terracotta border-solid border-2 w-56 h-16 text-terracotta";

  return (
    <div className={cssStyles}>
      {external ? (
        // External link using regular anchor tag
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {buttonContent}
        </a>
      ) : (
        // Internal link using Next.js Link component
        <Link href={href}>
          <button className={buttonClasses}>{buttonContent}</button>
        </Link>
      )}
    </div>
  );
}

export default Button;
