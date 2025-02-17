import React, { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import honorImage from "@/public/assets/photos/JUDU ENGAGEMENT-74.jpg";
import intentionalityImage from "@/public/assets/photos/JUDU ENGAGEMENT-88.jpg";
import serviceImage from "@/public/assets/photos/JUDU ENGAGEMENT-76.jpg";

interface SlideProps {
  image: StaticImageData;
  text: string;
  alt: string;
}

const ImageSlide: React.FC<SlideProps> = ({ image, text, alt }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <div
      className="relative w-80 h-80 rounded-2xl overflow-hidden cursor-pointer shrink-0"
      onClick={() => setIsTextVisible(!isTextVisible)}
    >
      <Image
        src={image}
        alt={alt}
        className={`object-cover transition-all duration-300 ${
          isTextVisible ? "brightness-[0.3]" : "brightness-100"
        }`}
        fill
        sizes="(max-width: 768px) 20rem,
               (max-width: 1200px) 20rem,
               20rem"
      />
      <div
        className={`absolute inset-0 flex items-center justify-center p-4 text-center
                   transition-opacity duration-300 text-white font-bold italic
                   ${isTextVisible ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-5xl">{text}</p>
      </div>
    </div>
  );
};

const ImageSlider = () => {
  const slides = [
    {
      image: honorImage,
      text: "honor",
      alt: "honor",
    },
    {
      image: intentionalityImage,
      text: "intentionality",
      alt: "intentionality",
    },
    {
      image: serviceImage,
      text: "service",
      alt: "service",
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    setIsDragging(true);
    if ("touches" in e) {
      setStartX(e.touches[0].pageX - sliderRef.current!.offsetLeft);
    } else {
      setStartX(e.pageX - sliderRef.current!.offsetLeft);
    }
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const move = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    e.preventDefault();
    const x =
      "touches" in e
        ? e.touches[0].pageX - sliderRef.current!.offsetLeft
        : e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative w-screen max-w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar px-4 py-8"
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={move}
        onTouchStart={startDragging}
        onTouchEnd={stopDragging}
        onTouchMove={move}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((slide, index) => (
          <ImageSlide
            key={index}
            image={slide.image}
            text={slide.text}
            alt={slide.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
