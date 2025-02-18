import Image, { StaticImageData } from "next/image";
import React from "react";

interface MobileLandingProps {
  image: StaticImageData;
}

function MobileLanding({ image }: MobileLandingProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="landing image"
          fill
          priority
          className="w-full h-full object-cover transform translate-x-[-1.5rem] scale-[1.2] brightness-75"
        />
      </div>
      <div className="absolute text-linen text-center text-6xl font-bold top-[13rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        dustin <br /> & <br /> julia
      </div>
      <div className="absolute text-linen text-center text-3xl font-bold bottom-[-7rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center space-y-2 font-light tracking-widest">
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
