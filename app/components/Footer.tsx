import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="h-screen overflow-hidden relative py-12">
      <div
        className="absolute inset-x-0 bottom-0 overflow-hidden"
        style={{ height: "60%" }}
      >
        {/* This pseudo-element creates the subtle curve */}
        <div
          className="absolute w-[150%] left-1/2 -translate-x-1/2"
          style={{
            height: "100%",
            borderTopLeftRadius: "100%",
            borderTopRightRadius: "100%",
            bottom: "0",
            backgroundColor: "#e6d2c0", // latte color
          }}
        >
          {/* Content container - properly centered */}
          <div className="absolute top-[4rem] left-1/2 -translate-x-1/2 w-full max-w-md mx-auto px-4 text-center space-y-8">
            <div className="text-terracotta font-bold italic text-5xl sm:text-6xl space-y-1 lg:flex lg:gap-4 lg:justify-center lg:text-9xl">
              <div>dustin</div>
              <div>&</div>
              <div>julia</div>
            </div>

            <div className="space-x-4 text-terracotta font-bold text-lg sm:text-xl lg:text-3xl lg:flex">
              <Link
                href="https://www.instagram.com/dustindagamac/?hl=en"
                target="_blank"
              >
                @dustindagamac
              </Link>
              <Link
                href="https://www.instagram.com/juliamorados/?hl=en"
                target="_blank"
              >
                @juliamorados
              </Link>
            </div>

            <div className="text-lg text-terracotta font-bold lg:text-2xl">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
