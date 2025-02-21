import Image, { StaticImageData } from "next/image";
import React from "react";

interface PageTitleProps {
  image: StaticImageData;
  title: string;
  width: number;
  height?: number;
  imageStyle?: string;
  titleStyle?: string;
}

function PageTitle({
  image,
  title,
  width,
  height,
  imageStyle,
  titleStyle,
}: PageTitleProps) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src={image}
        alt="title image"
        width={width}
        height={height}
        loading="lazy"
        className={`${imageStyle}`}
      />
      <p
        className={`text-terracotta text-5xl lg:text-6xl font-bold ${titleStyle}`}
      >
        {title}
      </p>
    </div>
  );
}

export default PageTitle;
