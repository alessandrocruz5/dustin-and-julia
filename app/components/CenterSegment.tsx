import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "./Button";

interface CenterSegmentProps {
  children: React.ReactNode;
  image: StaticImageData;
  alt: string;
  buttonTitle: string;
  buttonLink: string;
}

function CenterSegment({
  children,
  image,
  alt,
  buttonTitle,
  buttonLink,
}: CenterSegmentProps) {
  return (
    <section className="w-full min-h-screen flex items-center justify-center my-20">
      <div className="container mx-auto px-4 flex flex-col space-y-12">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl">
            <Image
              src={image}
              alt={alt}
              className="w-full h-[22rem] rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto w-full gap-8">
          <div className="text-terracotta text-7xl font-bold">{children}</div>
          <div>
            <Button title={buttonTitle} href={buttonLink} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CenterSegment;
