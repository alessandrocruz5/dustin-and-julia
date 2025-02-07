import Image from "next/image";
import React from "react";

import spinImage from "@/public/assets/photos/JUDU ENGAGEMENT-63.jpg";
import Navbar from "../components/Navbar";

function Landing() {
  return (
    <>
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>
      <div className="w-full h-screen relative overflow-hidden">
        <Image
          className="absolute brightness-[0.75] object-cover transform -translate-x-[4%] -translate-y-[20%] scale-[1.3]"
          src={spinImage}
          alt="Landing Image"
        />
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-30%]">
          <h1 className="pb-10 text-9xl font-bold text-center text-linen ">
            dustin & julia
          </h1>
          <h2 className="pt-10 text-7xl font-bold text-center text-linen ">
            5.5.2025
          </h2>
        </div>
      </div>
    </>
  );
}

export default Landing;
