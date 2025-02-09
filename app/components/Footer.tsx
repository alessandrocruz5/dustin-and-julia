import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="relative h-screen w-full overflow-hidden">
      {/* Main footer content */}
      <div className="absolute bg-latte px-8 pt-16 pb-8 mt-auto text-center w-[140%] h-[140%] rounded-[100%] transform translate-y-[20%] translate-x-[-15%]">
        <h2 className="text-terracotta font-bold italic text-9xl mb-2 mt-28">
          dustin & julia
        </h2>
        <div className="text-terracotta font-bold text-4xl space-x-40 my-20">
          <Link
            href="https://www.instagram.com/dustindagamac/?hl=en"
            target="_blank"
          >
            <span className="hover:underline">@dustindagamac</span>
          </Link>
          <Link
            href="https://www.instagram.com/juliamorados/?hl=en"
            target="_blank"
          >
            <span className="hover:underline">@juliamorados</span>
          </Link>
        </div>
        <div className="mt-4 font-bold text-terracotta text-2xl">
          <p>designed and developed by</p>
          <Link
            href="mailto:alessandrorafaelcruz@gmail.com"
            target="_blank"
            className="hover:underline"
          >
            Alessandro Cruz
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
