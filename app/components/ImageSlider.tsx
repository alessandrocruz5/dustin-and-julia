import React, { useState, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";

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
        <p className="text-5xl">{text}</p>
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

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragInfo = useRef({ startX: 0, scrollLeft: 0, lastX: 0, velocity: 0 });
  const animationFrame = useRef<number>();

  const startDragging = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!sliderRef.current) return;
      setIsDragging(true);

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      dragInfo.current = {
        startX: clientX,
        scrollLeft: sliderRef.current.scrollLeft,
        lastX: clientX,
        velocity: 0,
      };
    },
    []
  );

  const stopDragging = useCallback(() => {
    setIsDragging(false);

    if (Math.abs(dragInfo.current.velocity) > 0.5) {
      const startTime = performance.now();
      const startScroll = sliderRef.current?.scrollLeft ?? 0;
      const direction = dragInfo.current.velocity;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / 500, 1); // 500ms duration
        const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out

        if (sliderRef.current) {
          const momentum = direction * 400 * (1 - progress); // Gradually reduce velocity
          sliderRef.current.scrollLeft = startScroll + momentum;

          if (progress < 1) {
            animationFrame.current = requestAnimationFrame(animate);
          }
        }
      };

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      animationFrame.current = requestAnimationFrame(animate);
    }
  }, []);

  const move = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging || !sliderRef.current) return;
      e.preventDefault();

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const dx = clientX - dragInfo.current.lastX;
      dragInfo.current.velocity = dx * 0.01; // Scale down the velocity
      dragInfo.current.lastX = clientX;

      const x = clientX - dragInfo.current.startX;
      sliderRef.current.scrollLeft = dragInfo.current.scrollLeft - x;
    },
    [isDragging]
  );

  React.useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

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
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
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
    </section>
  );
};

export default ImageSlider;
