import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

import flowerImage from "@/public/assets/graphics/Gumamelaburnt.png";
import foundationImage from "@/public/assets/photos/JUDU ENGAGEMENT-11.jpg";
import faithImage from "@/public/assets/photos/JUDU ENGAGEMENT-41.jpg";
import backstoryImage from "@/public/assets/photos/JUDU ENGAGEMENT-05.jpg";
import honorImage from "@/public/assets/photos/JUDU ENGAGEMENT-74.jpg";
import intentionalityImage from "@/public/assets/photos/JUDU ENGAGEMENT-88.jpg";
import serviceImage from "@/public/assets/photos/JUDU ENGAGEMENT-76.jpg";

import Segment from "../components/Segment";
import FaithSection from "../components/FaithSection";
import BackstorySection from "../components/BackstorySection";
import ValueSection from "../components/ValueSection";
import Footer from "../components/Footer";

function CouplePage() {
  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image src={flowerImage} alt="flower" className="w-[400px] h-[400px]" />
        <p className="text-terracotta text-8xl font-bold">get to know us</p>
      </div>
      <Segment>
        <div className="w-full md:w-1/2">
          <Image
            src={foundationImage}
            alt="JUDU ENGAGEMENT-36"
            className="rounded-3xl object-cover w-full aspect-square"
          />
        </div>
        <div className="aspect-square flex flex-col justify-between w-full md:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl text-terracotta font-extrabold">
            our foundation
          </h2>
          <p className="text-xl md:text-3xl text-terracotta font-bold italic">
            &quot;because of the Lord&apos;s great love we are not consumed, for
            His compassions never fail. they are new every morning; great is
            your faithfulness.&quot;
          </p>
          <p className="text-3xl md:text-5xl text-terracotta font-bold ml-auto">
            lamentations 3:22-23
          </p>
        </div>
      </Segment>
      <FaithSection image={faithImage} />
      <BackstorySection image={backstoryImage} />
      <ValueSection
        image1={honorImage}
        image2={intentionalityImage}
        image3={serviceImage}
      />
      <Footer />
    </>
  );
}

export default CouplePage;
