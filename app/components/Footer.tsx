import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="h-screen overflow-hidden relative py-12 mt-[10rem]">
      <div className="absolute bottom-0 left-[-18rem] w-[250%] h-[70%] rounded-t-[35rem] bg-latte mx-auto px-4 text-center space-y-10">
        <div className="pt-[5rem]">
          <div className="text-terracotta font-bold italic text-7xl mb-4">
            dustin{" "}
          </div>
          <div className="text-terracotta font-bold italic text-7xl mb-4">
            &
          </div>
          <div className="text-terracotta font-bold italic text-7xl mb-4">
            julia
          </div>
        </div>
        <div className="space-x-4 mb-4">
          <Link
            href="https://www.instagram.com/dustindagamac/?hl=en"
            target="_blank"
            className="text-terracotta font-bold text-2xl"
          >
            @dustindagamac
          </Link>
          <Link
            href="https://www.instagram.com/juliamorados/?hl=en"
            target="_blank"
            className="text-terracotta font-bold text-2xl"
          >
            @juliamorados
          </Link>
        </div>
        <div className="text-xl text-terracotta font-bold">
          <p className="mb-1">designed and developed by</p>
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
