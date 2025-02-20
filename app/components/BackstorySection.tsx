"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface BackstorySectionProps {
  image: StaticImageData;
}

function BackstorySection({ image }: BackstorySectionProps) {
  const [showDustin, setShowDustin] = useState(false);
  const [showJulia, setShowJulia] = useState(false);

  return (
    <div className="h-screen mt-32 md:mt-48 lg:mt-64 mx-14 grid grid-cols-[1.3fr,2fr,1.3fr]">
      <div
        className={`text-terracotta space-y-8 font-bold flex flex-col justify-center transition-opacity duration-500 ${
          showDustin ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-4xl">dustin</div>
        <div className="text-xl space-y-6">
          <div>
            dustin is the kind of person whose quiet demeanor speaks volumes. an
            introvert at heart, he carries wisdom and passion that is evident in
            every conversation.
          </div>
          <div>
            as a filmmaker, dustin&apos;s gift for storytelling is seen through
            his creative lens as he captures stories in a way that inspires and
            connects people. his artistry reflects not just his skill, but the
            heart he pours into his work.
          </div>
          <div>
            dustin&apos;s love for others and devotion to family are at the core
            of who he is.
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center relative">
        <div className="relative w-[55%]">
          <div className="relative">
            <Image
              src={image}
              alt="Backstory"
              className="w-full object-cover rounded-t-[14rem] brightness-[0.9]"
            />
            <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
              <p className="text-white font-bold text-xl">
                Tap here to get to know us!
              </p>
            </div>
          </div>
          <div className="absolute inset-0 flex">
            <div
              className="w-1/2 h-full cursor-pointer"
              onClick={() => setShowDustin(!showDustin)}
            />
            <div
              className="w-1/2 h-full cursor-pointer"
              onClick={() => setShowJulia(!showJulia)}
            />
          </div>
        </div>
      </div>
      <div
        className={`text-terracotta space-y-8 font-bold flex flex-col justify-center text-right transition-opacity duration-500 ${
          showJulia ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-4xl">julia</div>
        <div className="text-xl space-y-4">
          <div>
            julia is a passionate and purposeful individual who pours her heart
            into everything she does. a proud multi-passionate, she embraces
            God’s call through the many roles she fulfills.
          </div>
          <div>
            her love for local fashion, uplifting communities, and teaching kids
            reflects her values, as she strives to champion creativity and
            connection wherever she goes.
          </div>
          <div>
            a true people person, julia’s warmth and energy light up every room.
            her love for family and building meaningful relationships is at the
            heart of who she is.
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackstorySection;
