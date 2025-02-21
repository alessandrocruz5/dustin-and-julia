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

function DesktopCeremonyPage() {
  return (
    <>
      <Navbar />
      <PageTitle
        title="Venue"
        image={titleImage}
        width={220}
        imageStyle="mb-[5rem]"
      />
      <div className="h-screen flex flex-col items-center text-terracotta text-center">
        <Image src={venueImage} alt="monochrome" className="w-[60%]" />
        <div className="text-5xl font-bold">The Monochrome, Nuvali</div>
        <div className="text-3xl italic">
          Evozone Avenue, Santa Rosa, Laguna
        </div>
      </div>
      <div className="flex flex-col items-center text-terracotta text-center min-h-screen py-10 my-10">
        <div className="font-bold text-6xl mb-20">Schedule</div>
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] w-full max-w-7xl px-4">
          <div className="flex justify-center items-center">
            <ImageCard
              image={welcomeImage}
              time="3:00PM"
              title="WELCOME"
              subtitle="Monochrome Lobby"
              height={170}
            />
          </div>
          <div className="flex justify-center items-center">
            <ImageCard
              image={ceremonyImage}
              time="3:30PM"
              title="CEREMONY"
              height={170}
              subtitle="Lower Chrome"
            />
          </div>
          <div className="flex justify-center items-center">
            <ImageCard
              image={snacksImage}
              time="5:00PM"
              title="SNACKS"
              height={170}
              subtitle="Courtyard"
            />
          </div>
          <div className="flex justify-center items-center">
            <ImageCard
              image={celebrationImage}
              time="6:00PM"
              title="CELEBRATION"
              height={170}
              subtitle="Silver Wing"
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center text-terracotta my-10 p-10">
        <div className="font-bold text-6xl mb-8 text-center">Dress Code</div>

        <div className="flex space-x-[10rem] my-20">
          <ImageCard
            image={dressImage}
            time="Ladies"
            title="Cocktail Dress"
            subtitle="long or tea length"
            height={250}
          />
          <ImageCard
            image={barongImage}
            time="Gentlemen"
            title="Barong Tagalog"
            subtitle="regular collar & black slacks"
            height={250}
          />
        </div>

        <div className="text-6xl font-bold my-20">Color Palette</div>
        <ColorPalette />
      </div>
      <Footer />
    </>
  );
}

export default DesktopCeremonyPage;
