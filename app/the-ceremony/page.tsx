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
import Footer from "../components/Footer";
import ColorPalette from "../components/ColorPalette";

function CeremonyPage() {
  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <PageTitle image={titleImage} title="venue" width={250} />
      <div className="h-screen flex flex-col items-center text-terracotta text-center">
        <Image src={venueImage} alt="monochrome" className="w-[60%]" />
        <div className="text-5xl font-bold">the monochrome, nuvali</div>
        <div className="text-3xl italic">
          evozone avenue, santa rosa, laguna
        </div>
      </div>
      <div className="h-screen flex flex-col items-center text-terracotta text-center space-y-20">
        <div className="font-bold text-6xl">schedule</div>
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr]">
          <ImageCard
            image={welcomeImage}
            time="3:00PM"
            title="welcome"
            subtitle="monochrome lobby"
            height={200}
          />
          <ImageCard
            image={ceremonyImage}
            time="3:30PM"
            title="ceremony"
            subtitle="lower chrome"
          />
          <ImageCard
            image={snacksImage}
            time="5:00PM"
            title="snacks"
            subtitle="courtyard"
          />
          <ImageCard
            image={celebrationImage}
            time="6:00PM"
            title="celebration"
            subtitle="silver wing"
          />
        </div>
      </div>
      <div className="h-screen flex flex-col items-center text-terracotta space-y-8">
        <div className="font-bold text-6xl">dress code</div>
        <div className="space-y-16">
          <div className="grid grid-cols-[2fr,2fr,2fr]">
            <ImageCard
              image={dressImage}
              time="ladies"
              title="cocktail dress"
              subtitle="long or tea length"
              height={350}
            />
            <div></div>
            <ImageCard
              image={barongImage}
              time="gentlemen"
              title="barong tagalog"
              subtitle="regular collar & black slacks"
              height={350}
            />
          </div>
          <ColorPalette />
        </div>
        <div className="text-5xl font-bold">color palette</div>
      </div>
      <Footer />
    </>
  );
}

export default CeremonyPage;
