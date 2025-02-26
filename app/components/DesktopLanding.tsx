import Image from "next/image";
import React from "react";
import RevealOnScroll from "./RevealOnScroll";

import spinImage from "@/public/assets/photos/JUDU ENGAGEMENT-63.jpg";

function DesktopLanding() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="relative h-full w-full">
        <Image
          src={spinImage}
          alt="spin"
          fill
          className="object-cover brightness-75 scale-[1.2] transform-gpu"
          loading="lazy"
        />
        <div className="absolute bottom-[5rem] space-y-10 flex flex-col justify-center items-center w-full">
          <RevealOnScroll delay={0.4}>
            <div className="text-linen text-8xl font-bold text-center">
              Dustin & Julia
            </div>
            <div className="text-linen text-5xl font-bold text-center">
              5.5.2025
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}

export default DesktopLanding;
