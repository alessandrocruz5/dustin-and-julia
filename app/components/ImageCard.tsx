import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImageCardProps {
  image: StaticImageData;
  time?: string;
  title: string;
  subtitle?: string;
  width?: number;
  height?: number;
}

function ImageCard({
  image,
  time,
  title,
  subtitle,
  width,
  height,
}: ImageCardProps) {
  return (
    <div className="flex flex-col text-center items-center text-terracotta space-y-3">
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        loading="lazy"
      />
      <div className="font-bold text-2xl">{time}</div>
      <div className="font-bold text-4xl">{title}</div>
      <div className="italic text-2xl">{subtitle}</div>
    </div>
  );
}

export default ImageCard;
