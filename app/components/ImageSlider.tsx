import React, { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import honorImage from "@/public/assets/photos/JUDU ENGAGEMENT-74.jpg";
import intentionalityImage from "@/public/assets/photos/JUDU ENGAGEMENT-88.jpg";
import serviceImage from "@/public/assets/photos/JUDU ENGAGEMENT-76.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        loading="lazy"
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
        <p className="text-3xl">{text}</p>
      </div>
    </div>
  );
};

const ImageSlider = () => {
  const slides = [
    {
      image: honorImage,
      text: "Honor",
      alt: "honor",
    },
    {
      image: intentionalityImage,
      text: "Intentionality",
      alt: "intentionality",
    },
    {
      image: serviceImage,
      text: "Service",
      alt: "service",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [nextSlide, prevSlide]);

  // Calculate the translation for the slider
  const getSlideTranslation = () => {
    const slideWidth = 320; // w-80 = 20rem = 320px
    const gap = 16; // gap-4 = 1rem = 16px
    return -(currentIndex * (slideWidth + gap));
  };

  return (
    <section className="relative w-screen max-w-full overflow-hidden">
      <div className="relative flex justify-center items-center px-4 py-8">
        {/* Arrow buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-8 z-10 p-2 rounded-full bg-white/30 backdrop-blur-sm 
                   hover:bg-white/40 transition-colors duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 z-10 p-2 rounded-full bg-white/30 backdrop-blur-sm 
                   hover:bg-white/40 transition-colors duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slides container with transition */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(${getSlideTranslation()}px)`,
            }}
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
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex gap-2 justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 
                        ${
                          currentIndex === index
                            ? "bg-white w-4"
                            : "bg-white/50"
                        }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
