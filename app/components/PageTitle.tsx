import Image, { StaticImageData } from "next/image";
import React from "react";

interface PageTitleProps {
  image: StaticImageData;
  title: string;
  width: number;
  height?: number;
}

function PageTitle({ image, title, width, height }: PageTitleProps) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image src={image} alt="flower" width={width} height={height} />
      <p className="text-terracotta text-5xl font-bold">{title}</p>
    </div>
  );
}

export default PageTitle;
