import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="relative h-screen w-full overflow-hidden">
      {/* Main footer content */}
      <div className="absolute bg-latte px-8 pt-16 pb-8 mt-auto text-center xl:w-[140%] lg:w-[150%] md:w-[160%] sm:w-[170%] xs:w-[180%] h-[140%] rounded-[100%] transform translate-y-[20%] xl:translate-x-[-15%] lg:translate-x-[-17%] md:translate-x-[-19%] sm:translate-x-[-21%] xs:translate-x-[-23%]">
        <h2 className="text-terracotta font-bold italic xl:text-8xl md:text-7xl xs:text-6xl mb-2 mt-[4rem]">
          dustin & julia
        </h2>
        <div className="text-terracotta font-bold xl:text-3xl md:text-2xl xs:text-xl xl:space-x-40 lg:space-x-35 md:space-x-30 sm:space-x-25 xs:space-x-20 my-[3rem]">
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
        <div className="mt-4 font-bold text-terracotta xl:text-2xl md:text-xl xs:text-lg">
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
