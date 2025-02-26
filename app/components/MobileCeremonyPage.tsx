import React from "react";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Image from "next/image";
import ImageCard from "../components/ImageCard";

import titleImage from "@/public/assets/graphics/Palm treeburnt.png";
import venueImage from "@/public/assets/graphics/MonochromeDrawn.png";
import welcomeImage from "@/public/assets/graphics/Cactusburnt.png";
import ceremonyImage from "@/public/assets/graphics/Rings.png";
import snacksImage from "@/public/assets/graphics/Skewers.png";
import celebrationImage from "@/public/assets/graphics/Fan.png";
import dressImage from "@/public/assets/graphics/Dress.png";
import barongImage from "@/public/assets/graphics/barong.png";
import ColorPalette from "../components/ColorPalette";

import RevealOnScroll from "./RevealOnScroll";

function MobileCeremonyPage() {
  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>

      <RevealOnScroll delay={0.2}>
        <PageTitle image={titleImage} title="Venue" width={170} />
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className="h-screen flex flex-col items-center text-terracotta text-center">
          <Image src={venueImage} alt="monochrome" className="w-full" loading="lazy" />
          <div className="text-3xl font-bold">The Monochrome, Nuvali</div>
          <div className="text-xl italic">Evozone Avenue, Santa Rosa, Laguna</div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <section>
          <div className="flex flex-col items-center text-terracotta text-center py-10 my-10">
            <div className="font-bold text-5xl mb-20">Schedule</div>
            <div className="flex flex-col w-full max-w-6xl px-4 space-y-4">
              <ImageCard
                image={welcomeImage}
                time="3:00PM"
                title="WELCOME"
                subtitle="Monochrome Lobby"
                height={200}

              />
              <ImageCard
                image={ceremonyImage}
                time="3:30PM"
                title="CEREMONY"
                height={150}
                subtitle="Lower Chrome"

              />
              <ImageCard
                image={snacksImage}
                time="5:00PM"
                title="SNACKS"
                height={150}
                subtitle="Courtyard"

              />
              <ImageCard
                image={celebrationImage}
                time="6:00PM"
                title="CELEBRATION"
                height={120}
                subtitle="Silver Wing"
              />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <section>
          <div className="min-h-screen flex flex-col items-center justify-center text-terracotta my-10 p-10">
            <div className="font-bold text-5xl mb-8 text-center">Dress Code</div>
            <div className="flex flex-col mb-16">
              <ImageCard
                image={dressImage}
                time="Ladies"
                title="Cocktail Dress"
                subtitle="long or tea length"
                height={200}
              />
              <ImageCard
                image={barongImage}
                time="Gentlemen"
                title="Barong Tagalog"
                subtitle="regular collar & black slacks"
                height={200}
              />
            </div>
            <div className="text-5xl font-bold mb-8">Color Palette</div>
            <ColorPalette />
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}

export default MobileCeremonyPage;
