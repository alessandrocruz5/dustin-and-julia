import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import Button from "./Button";
import { useViewport } from "@/app/hooks/useViewport";

interface SegmentProps {
  children: ReactNode;
  image: StaticImageData;
  buttonStyles?: string;
  buttonTitle: string;
  buttonLink: string;
  textStyle?: string;
  imagePosition?: "left" | "right";
  aspectRatio?: string;
  contentAlignment?: "left" | "right";
  alternativeText?: ReactNode;
  showButton?: boolean;
}

function Segment({
  children,
  image,
  textStyle = "",
  buttonStyles = "",
  buttonTitle,
  buttonLink,
  imagePosition = "left",
  aspectRatio = "aspect-square",
  contentAlignment = "left",
  alternativeText = null,
  showButton = true,
}: SegmentProps) {
  const { isMobile } = useViewport();

  // Mobile layout - vertical stack
  if (isMobile) {
    return (
      <section className="w-full min-h-[90vh] flex flex-col justify-center items-center">
        <div className="w-full max-w-sm p-[1.5rem] px-6 py-[8rem] space-y-8 mx-auto">
          <div
            className={`text-terracotta space-y-1 text-4xl font-bold ${textStyle}`}
          >
            {children}
          </div>
          <div className="relative w-full">
            <Image
              src={image}
              alt="section image"
              className={`object-cover rounded-2xl ${aspectRatio} object-top`}
              loading="lazy"
            />
          </div>
          <div className="w-full flex">
            <Button
              title={buttonTitle}
              href={buttonLink}
              cssStyles={`${buttonStyles} text-sm`}
            />
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout - determine content alignment classes
  const contentAlignmentClasses =
    contentAlignment === "right"
      ? "items-end text-right"
      : "items-start text-left";

  // Desktop layout - horizontal with image on left or right
  return (
    <section className="w-full min-h-screen flex items-center justify-center my-20">
      <div className="w-full max-w-6xl flex items-center justify-between gap-8">
        {imagePosition === "left" ? (
          <>
            <div className="w-1/2 max-w-md">
              <Image
                src={image}
                alt="section image"
                className={`object-cover rounded-3xl ${aspectRatio} object-top`}
                loading="lazy"
              />
            </div>
            <div
              className={`w-1/2 flex flex-col justify-between${contentAlignmentClasses}`}
            >
              <div
                className={`text-terracotta text-7xl font-bold mb-[8rem] ${textStyle}`}
              >
                {children}
              </div>
              <Button
                title={buttonTitle}
                href={buttonLink}
                cssStyles={buttonStyles}
              />
            </div>
          </>
        ) : (
          <>
            <div className={`w-1/2 flex flex-col ${contentAlignmentClasses}`}>
              <div
                className={`text-terracotta text-7xl font-bold mb-[10rem] ${textStyle}`}
              >
                {children}
              </div>
              {showButton ? (
                <Button
                  title={buttonTitle}
                  href={buttonLink}
                  cssStyles={buttonStyles}
                />
              ) : (
                <div className="text-terracotta">{alternativeText}</div>
              )}
            </div>
            <div className="w-1/2 max-w-md">
              <Image
                src={image}
                alt="section image"
                className={`object-cover rounded-3xl ${aspectRatio} object-top`}
                loading="lazy"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Segment;
