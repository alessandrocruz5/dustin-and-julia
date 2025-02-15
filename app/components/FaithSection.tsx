import React from "react";
import Image, { StaticImageData } from "next/image";

interface FaithSectionProps {
  image: StaticImageData;
}

function FaithSection({ image }: FaithSectionProps) {
  return (
    <>
      <div className="relative w-full h-screen grid grid-cols-[1fr,2fr,1fr] mt-32 md:mt-48 lg:mt-64">
        <div className="relative h-full overflow-hidden">
          <div className="absolute inset-0 w-[200%] h-full">
            <Image
              src={image}
              alt="Couple left side"
              className="object-cover object-right h-full w-full scale-[2] origin-[60%_70%]"
              priority
              fill
            />
          </div>
        </div>
        <div className="flex items-center justify-center px-8 bg-latte">
          <div className="max-w-xl space-y-6 text-center">
            <h2 className="text-terracotta text-2xl md:text-4xl font-bold mb-6">
              a love rooted in faith
            </h2>
            <div className="space-y-10">
              <p className="text-terracotta text-lg md:text-xl font-medium leading-relaxed">
                dustin and julia&apos;s love story began serving side-by-side at
                their church, where they fostered a deep and strong foundation
                in Christ. blossoming into a life-long love, they grew together,
                serving the next generation and His truth as they spent time in
                the inner-halls of church, shared laughs over bubble tea and
                coffee, and continued to center their bond on Jesus, their firm
                foundation, even through the ups and bittersweet seasons.
              </p>
              <p className="text-terracotta text-lg md:text-2xl font-medium leading-relaxed">
                as they start this new chapter together, dustin and julia are
                dedicated to celebrating in a way that honors their families,
                heritage, and the people who have supported them along the way.
                their wedding is a reflection of their hearts—intimate,
                authentic, and joyfully candid. surrounded by loved ones, they
                aim to cherish this moment as a testimony to the love they share
                and the faith that brought them together.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-full overflow-hidden">
          <div className="absolute inset-0 w-[200%] h-full">
            <Image
              src={image}
              alt="Couple left side"
              className="object-cover object-right h-full w-full scale-[2] origin-[120%_80%]"
              priority
              fill
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default FaithSection;
