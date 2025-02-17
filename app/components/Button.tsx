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
  const buttonClasses = `
    group flex items-center gap-2 
    px-6 py-3 rounded-2xl border-2 border-terracotta
    bg-latte text-terracotta font-bold
    ${cssStyles}
  `;

  const buttonContent = (
    <div className="flex items-center gap-2">
      <span>{title}</span>
      <Image
        src={arrowImage}
        alt="arrow"
        className="w-6 h-6 transition-transform duration-300"
      />
    </div>
  );

  return (
    <div>
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
