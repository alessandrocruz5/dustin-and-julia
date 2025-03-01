"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

import flowerImage from "@/public/assets/graphics/Gumamelaburnt.png";
import foundationImage from "@/public/assets/photos/JUDU ENGAGEMENT-11.jpg";
import faithImage from "@/public/assets/photos/JUDU ENGAGEMENT-41.jpg";
import backstoryImage from "@/public/assets/photos/JUDU ENGAGEMENT-05.jpg";

import PageTitle from "../components/PageTitle";
import ImageSlider from "../components/ImageSlider";

import RevealOnScroll from "./RevealOnScroll";

function MobileCouplePage() {
  const [activeProfile, setActiveProfile] = useState<"dustin" | "julia" | null>(
    null
  );

  console.log("Current active profile:", activeProfile);

  return (
    <>
      <Navbar />
      <RevealOnScroll delay={0.2}>
        <PageTitle
          image={flowerImage}
          title="Get to know us!"
          width={300}
          height={300}
        />
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <section className="h-screen w-screen p-10">
          <div className="flex flex-col justify-center items-center space-y-4">
            <Image
              src={foundationImage}
              alt="foundation"
              className="object-cover aspect-square w-[20rem] h-[20rem] rounded-2xl"
              loading="lazy"
            />
            <div className="text-terracotta font-bold flex flex-col space-y-5">
              <h2 className="text-3xl mr-auto">Our foundation</h2>
              <p className="text-xl">
                Because of the Lord&apos;s great love we are not consumed, for His
                compassions never fail. They are new every morning; great is your
                faithfulness.
              </p>
              <h2 className="text-2xl ml-auto">Lamentations 3:22-23</h2>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <section className="h-screen w-screen overflow-hidden mt-10 mb-[15rem]">
          <div className="relative">
            <Image
              src={faithImage}
              alt="faith"
              className="scale-[2] object-cover transform translate-x-[-5.5rem] brightness-[.6]"
              loading="lazy"
            />
            <div className="absolute flex flex-col text-latte font-bold text-center top-[10%] p-10 space-y-5">
              <div className="text-3xl">A love rooted in faith</div>
              <div className="text-md space-y-3">
                <div>
                  Dustin and Julia&apos;s love story began serving side by side in
                  youth ministry at church. What started as good friends quickly
                  blossomed into a deep connection rooted in their mutual love for
                  the next generation and the Lord. As they spent time in the same
                  circle of friends, Dustin found himself drawn to Julia&apos;s
                  lively energy, a perfect contrast to his quiet and introverted
                  nature.
                </div>
                <div>
                  As they start this new chapter together, Dustin and Julia are
                  dedicated to celebrating in a way that honors their families,
                  heritage, and the people who have supported them along the way.
                  Their wedding is a reflection of their hearts—intimate,
                  authentic, and joyfully candid. Surrounded by loved ones, they
                  aim to cherish this moment as a testimony to the love they share
                  and the faith that brought them together.
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <section className="h-[200%] w-full p-10 space-y-3">
          <div className="relative mb-8">
            <Image
              src={backstoryImage}
              alt="backstory"
              className="object-cover rounded-t-[10rem]"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
              <p className="text-white font-bold text-xl">
                Tap here to get to know us!
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
              <div className="text-3xl">Dustin</div>
              <div className="text-lg space-y-5">
                <div>
                  Dustin is the kind of person whose quiet demeanor speaks
                  volumes. An introvert at heart, he carries wisdom and passion
                  that is evident in every conversation.
                </div>
                <div>
                  As a filmmaker, Dustin&apos;s gift for storytelling is seen
                  through his creative lens as he captures stories in a way that
                  inspires and connects people. His artistry reflects not just his
                  skill, but the heart he pours into his work.
                </div>
                <div>
                  Dustin&apos;s love for others and devotion to family are at the
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
              <div className="text-3xl">Julia</div>
              <div className="text-lg space-y-5">
                <div>
                  Julia is a passionate and purposeful individual who pours her
                  heart into everything she does. A proud multi-passionate, she
                  embraces God&apos;s call through the many roles she fulfills.
                </div>
                <div>
                  Her love for local fashion, uplifting communities, and teaching
                  kids reflects her values, as she strives to champion creativity
                  and connection wherever she goes.
                </div>
                <div>
                  A true people person, Julia&apos;s warmth and energy light up
                  every room. Her love for family and building meaningful
                  relationships is at the heart of who she is.
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <section className="flex flex-col justify-center items-center h-screen w-screen p-10 text-terracotta text-center font-bold space-y-10">
          <div className=" text-5xl">What we value</div>
          <div>
            <div>Tap to find out!</div>
            <ImageSlider />
          </div>
          <div className="text-xl">
            We want to be intentional in everything we do in preparation of our
            wedding and marriage that will help us honor God through honoring our
            parents, families, and community.
          </div>
        </section>
      </RevealOnScroll> delay={0.2}
    </>
  );
}

export default MobileCouplePage;
