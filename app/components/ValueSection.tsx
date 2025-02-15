"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface ValueSectionProps {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
}

function ValueSection({ image1, image2, image3 }: ValueSectionProps) {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <div className="h-screen mt-32 md:mt-48 lg:mt-64 mx-14 flex flex-col items-center space-y-16">
      <div className="text-center text-terracotta text-5xl font-bold">
        what we value
      </div>
      <div className="grid grid-cols-3 w-full max-w-6xl">
        <div
          className="relative flex justify-center items-center"
          onClick={() => setActiveImage(activeImage === 1 ? null : 1)}
        >
          <div className="relative w-[70%]">
            <Image
              src={image1}
              alt="Honor"
              className="aspect-square object-cover rounded-3xl cursor-pointer"
            />
            <div
              className={`absolute top-0 left-0 w-full h-full rounded-3xl inset-0 flex items-center justify-center transition-all duration-300 ${
                activeImage === 1 ? "bg-black/30" : ""
              }`}
            >
              <span
                className={`font-bold italic text-7xl text-white transition-opacity duration-300 ${
                  activeImage === 1 ? "opacity-100" : "opacity-0"
                }`}
              >
                honor
              </span>
            </div>
          </div>
        </div>
        <div
          className="relative flex justify-center items-center"
          onClick={() => setActiveImage(activeImage === 2 ? null : 2)}
        >
          <div className="relative w-[70%]">
            <Image
              src={image2}
              alt="Intentionality"
              className="aspect-square object-cover rounded-3xl cursor-pointer"
            />
            <div
              className={`absolute w-full h-full rounded-3xl inset-0 flex items-center justify-center transition-all duration-300 ${
                activeImage === 2 ? "bg-black/30" : ""
              }`}
            >
              <span
                className={`font-bold italic text-4xl text-white transition-opacity duration-300 ${
                  activeImage === 2 ? "opacity-100" : "opacity-0"
                }`}
              >
                intentionality
              </span>
            </div>
          </div>
        </div>
        <div
          className="relative flex justify-center items-center"
          onClick={() => setActiveImage(activeImage === 3 ? null : 3)}
        >
          <div className="relative w-[70%]">
            <Image
              src={image3}
              alt="Service"
              className="aspect-square object-cover rounded-3xl cursor-pointer"
            />
            <div
              className={`absolute top-0 left-0 w-full h-full rounded-3xl  inset-0 flex items-center justify-center transition-all duration-300 ${
                activeImage === 3 ? "bg-black/30" : ""
              }`}
            >
              <span
                className={`font-bold italic text-7xl text-white transition-opacity duration-300 ${
                  activeImage === 3 ? "opacity-100" : "opacity-0"
                }`}
              >
                service
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-terracotta font-bold text-xl w-[70%]">
        we want to be intentional in everything we do in preparation of our
        wedding and marriage that will help us honor God through honoring our
        parents, families, and community.
      </div>
    </div>
  );
}

export default ValueSection;
