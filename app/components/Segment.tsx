import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import Button from "./Button";

interface SegmentProps {
  children: ReactNode;
  image: StaticImageData;
  buttonStyles: string;
  buttonTitle: string;
  buttonLink: string;
  textStyle?: string;
  direction?: "row" | "col";
  isMobile?: boolean;
}

// function Segment({ children, direction = "row", isMobile = false }: SegmentProps) {
//   return (
//     <div className="w-full min-h-screen sm:my-16 md:my-24 lg:my-32">
//       <div
//         className={`
//           max-w-7xl m-auto px-4 md:px-8 lg:px-16 h-full
//           ${
//             direction === "row"
//               ? "flex flex-col md:flex-row justify-around items-center gap-8 md:gap-16"
//               : "flex flex-col gap-8"
//           }
//         `}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

function Segment({
  children,
  image,
  textStyle = "",
  buttonStyles,
  buttonTitle,
  buttonLink,
}: SegmentProps) {
  return (
    <section className="w-full min-h-screenflex flex-col justify-center items-center">
      <div className="w-full max-w-xl p-[2rem] px-8 py-[12rem] space-y-10">
        <div
          className={`text-terracotta space-y-1 text-5xl font-bold ${textStyle}`}
        >
          {children}
        </div>
        <div className="relative w-full">
          <Image
            src={image}
            alt="the couple"
            className="object-cover aboslute rounded-3xl aspect-square object-top"
          />
        </div>
        <div>
          <Button
            title={buttonTitle}
            href={buttonLink}
            cssStyles={buttonStyles}
          />
        </div>
      </div>
    </section>
  );
}

export default Segment;
