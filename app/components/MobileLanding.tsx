import Image, { StaticImageData } from "next/image";
import React from "react";

interface MobileLandingProps {
  image: StaticImageData;
}

function MobileLanding({ image }: MobileLandingProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="landing image"
          fill
          loading="lazy"
          className="w-full h-full object-cover transform translate-x-[-1.5rem] scale-[1.2] brightness-75"
        />
      </div>

      {/* Couple Names - Responsive positioning */}
      <div
        className="absolute text-linen text-center font-bold w-full
                      text-5xl sm:text-6xl
                      top-1/3 sm:top-[35%] md:top-[38%]
                      transform -translate-y-1/2"
      >
        <div className="space-y-1">
          <div>Dustin</div>
          <div>&</div>
          <div>Julia</div>
        </div>
      </div>

      {/* Date - Dynamically positioned based on viewport height */}
      <div
        className="absolute text-linen text-center text-2xl sm:text-3xl
                      font-bold w-full
                      bottom-[10vh] sm:bottom-[12vh] md:bottom-[15vh]"
      >
        <div className="flex flex-col items-center space-y-1 sm:space-y-2 font-light tracking-widest">
          <span>5</span>
          <span>.</span>
          <span>5</span>
          <span>.</span>
          <span>2</span>
          <span>0</span>
          <span>2</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
}

export default MobileLanding;
