// import Image, { StaticImageData } from "next/image";
// import React, { ReactNode } from "react";
// import Button from "./Button";

// interface SegmentProps {
//   children: ReactNode;
//   image: StaticImageData;
//   buttonStyles: string;
//   buttonTitle: string;
//   buttonLink: string;
//   textStyle?: string;
//   direction?: "row" | "col";
//   isMobile?: boolean;
// }

// // function Segment({ children, direction = "row", isMobile = false }: SegmentProps) {
// //   return (
// //     <div className="w-full min-h-screen sm:my-16 md:my-24 lg:my-32">
// //       <div
// //         className={`
// //           max-w-7xl m-auto px-4 md:px-8 lg:px-16 h-full
// //           ${
// //             direction === "row"
// //               ? "flex flex-col md:flex-row justify-around items-center gap-8 md:gap-16"
// //               : "flex flex-col gap-8"
// //           }
// //         `}
// //       >
// //         {children}
// //       </div>
// //     </div>
// //   );
// // }

// function Segment({
//   children,
//   image,
//   textStyle = "",
//   buttonStyles,
//   buttonTitle,
//   buttonLink,
// }: SegmentProps) {
//   return (
//     <section className="w-full min-h-screen flex flex-col justify-center items-center">
//       <div className="w-full max-w-xl p-[2rem] px-8 py-[12rem] space-y-10 mx-auto">
//         <div
//           className={`text-terracotta space-y-1 text-5xl font-bold ${textStyle}`}
//         >
//           {children}
//         </div>
//         <div className="relative w-full">
//           <Image
//             src={image}
//             alt="the couple"
//             className="object-cover aboslute rounded-3xl aspect-square object-top"
//             loading="lazy"
//           />
//         </div>
//         <div>
//           <Button
//             title={buttonTitle}
//             href={buttonLink}
//             cssStyles={buttonStyles}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Segment;

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
          <div>
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
    <section className="w-full min-h-screen flex items-center justify-center">
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
                className={`text-terracotta text-8xl font-bold mb-[8rem] ${textStyle}`}
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
                className={`text-terracotta text-8xl font-bold mb-[8rem] ${textStyle}`}
              >
                {children}
              </div>
              <Button
                title={buttonTitle}
                href={buttonLink}
                cssStyles={buttonStyles}
              />
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
