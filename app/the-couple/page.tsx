"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

import flowerImage from "@/public/assets/graphics/Gumamelaburnt.png";
import foundationImage from "@/public/assets/photos/JUDU ENGAGEMENT-11.jpg";
import faithImage from "@/public/assets/photos/JUDU ENGAGEMENT-41.jpg";
import backstoryImage from "@/public/assets/photos/JUDU ENGAGEMENT-05.jpg";

// import FaithSection from "../components/FaithSection";
// import BackstorySection from "../components/BackstorySection";
// import ValueSection from "../components/ValueSection";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import ImageSlider from "../components/ImageSlider";

function CouplePage() {
  const [activeProfile, setActiveProfile] = useState<"dustin" | "julia" | null>(
    null
  );

  console.log("Current active profile:", activeProfile);

  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <PageTitle
        image={flowerImage}
        title="get to know us"
        width={300}
        height={300}
      />
      <section className="h-screen w-screen p-10">
        <div className="flex flex-col justify-center items-center space-y-4">
          <Image
            src={foundationImage}
            alt="foundation"
            className="object-cover aspect-square w-[20rem] h-[20rem] rounded-2xl"
          />
          <div className="text-terracotta font-bold flex flex-col space-y-5">
            <h2 className="text-3xl mr-auto">our foundation</h2>
            <p className="text-xl">
              because of the Lord&apos;s great love we are not consumed, for His
              compassions never fail. they are new every morning; great is your
              faithfulness.
            </p>
            <h2 className="text-2xl ml-auto">lamentations 3:22-23</h2>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen overflow-hidden mt-10 mb-[15rem]">
        <div className="relative">
          <Image
            src={faithImage}
            alt="faith"
            className="scale-[2] object-cover transform translate-x-[-5.5rem] brightness-[.6]"
          />
          <div className="absolute flex flex-col text-latte font-bold text-center top-[20%] p-10 space-y-5">
            <div className="text-4xl">a love rooted in faith</div>
            <div className="space-y-3">
              <div>
                dustin and julia&apos;s love story began serving side by side in
                youth ministry at church. what started as good friends quickly
                blossomed into a deep connection rooted in their mutual love for
                the next generation and the Lord. as they spent time in the same
                circle of friends, dustin found himself drawn to julia&apos;s
                lively energy, a perfect contrast to his quiet and introverted
                nature.
              </div>
              <div>
                as they start this new chapter together, dustin and julia are
                dedicated to celebrating in a way that honors their families,
                heritage, and the people who have supported them along the way.
                their wedding is a reflection of their hearts—intimate,
                authentic, and joyfully candid. surrounded by loved ones, they
                aim to cherish this moment as a testimony to the love they share
                and the faith that brought them together.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[200%] w-full p-10 space-y-3">
        <div className="relative mb-8">
          <Image
            src={backstoryImage}
            alt="backstory"
            className="object-cover rounded-t-[10rem]"
          />
          <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
            <p className="text-white font-bold text-xl">
              tap on either of us to know us!
            </p>
          </div>
          <div className="absolute inset-0 flex">
            <div
              className="w-1/2 h-full cursor-pointer"
              onClick={() =>
                setActiveProfile(activeProfile === "dustin" ? null : "dustin")
              }
            />
            <div
              className="w-1/2 h-full cursor-pointer"
              onClick={() =>
                setActiveProfile(activeProfile === "julia" ? null : "julia")
              }
            />
          </div>
        </div>

        <div className="relative min-h-[50rem]">
          <div
            className={`text-terracotta space-y-2 font-bold flex flex-col justify-center
                       transition-opacity duration-500 ease-in-out absolute w-[80%] left-0
                       ${
                         activeProfile === "dustin"
                           ? "opacity-100 z-10"
                           : "opacity-0 z-0"
                       }`}
          >
            <div className="text-3xl">dustin</div>
            <div className="text-lg space-y-5">
              <div>
                dustin is the kind of person whose quiet demeanor speaks
                volumes. an introvert at heart, he carries wisdom and passion
                that is evident in every conversation.
              </div>
              <div>
                as a filmmaker, dustin&apos;s gift for storytelling is seen
                through his creative lens as he captures stories in a way that
                inspires and connects people. his artistry reflects not just his
                skill, but the heart he pours into his work.
              </div>
              <div>
                dustin&apos;s love for others and devotion to family are at the
                core of who he is.
              </div>
            </div>
          </div>
          <div
            className={`text-terracotta space-y-2 font-bold flex flex-col justify-center text-right
                       transition-opacity duration-500 ease-in-out absolute w-[80%] right-0
                       ${
                         activeProfile === "julia"
                           ? "opacity-100 z-10"
                           : "opacity-0 z-0"
                       }`}
          >
            <div className="text-3xl">julia</div>
            <div className="text-lg space-y-5">
              <div>
                julia is a passionate and purposeful individual who pours her
                heart into everything she does. a proud multi-passionate, she
                embraces God&apos;s call through the many roles she fulfills.
              </div>
              <div>
                her love for local fashion, uplifting communities, and teaching
                kids reflects her values, as she strives to champion creativity
                and connection wherever she goes.
              </div>
              <div>
                a true people person, julia&apos;s warmth and energy light up
                every room. her love for family and building meaningful
                relationships is at the heart of who she is.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center h-screen w-screen p-10 text-terracotta text-center font-bold space-y-10">
        <div className=" text-5xl">what we value</div>
        <div>
          <ImageSlider />
        </div>
        <div className="text-xl">
          we want to be intentional in everything we do in preparation of our
          wedding and marriage that will help us honor God through honoring our
          parents, families, and community.
        </div>
      </section>
      <Footer />
      {/* 
      <ValueSection
        image1={honorImage}
        image2={intentionalityImage}
        image3={serviceImage}
      />
      <Footer /> */}
    </>
  );
}

export default CouplePage;
