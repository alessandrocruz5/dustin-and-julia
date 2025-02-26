"use client";

import React, { useState } from "react";
import PageTitle from "./PageTitle";
import Image from "next/image";

import flowerImage from "@/public/assets/graphics/Gumamelaburnt.png";

import foundationImage from "@/public/assets/photos/JUDU ENGAGEMENT-11.jpg";
import faithImage from "@/public/assets/photos/JUDU ENGAGEMENT-41.jpg";
import backstoryImage from "@/public/assets/photos/JUDU ENGAGEMENT-05.jpg";
import honorImage from "@/public/assets/photos/JUDU ENGAGEMENT-74.jpg";
import intentionalityImage from "@/public/assets/photos/JUDU ENGAGEMENT-88.jpg";
import serviceImage from "@/public/assets/photos/JUDU ENGAGEMENT-76.jpg";
import Navbar from "./Navbar";
import RevealOnScroll from "./RevealOnScroll";

function DesktopCouplePage() {
  const [dustinProfile, setDustinProfile] = useState(false);
  const [juliaProfile, setJuliaProfile] = useState(false);
  const [honorVisible, setHonorVisible] = useState(false);
  const [intentionalityVisible, setIntentionalityVisible] = useState(false);

  return (
    <>
      <Navbar />
      <RevealOnScroll>
        <PageTitle
          image={flowerImage}
          title="Get to know us!"
          width={400}
          height={400}
        />
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <section className="w-full min-h-screen flex items-center justify-center my-20 p-10">
          <div className="w-full max-w-6xl xl:max-w-8xl flex items-center justify-between gap-8">
            <div className="w-1/2 max-w-md">
              <Image
                src={foundationImage}
                alt="foundation"
                className="object-cover aspect-square w-[25rem] h-[25rem] rounded-2xl xl:w-[30rem] xl:h-[30rem] xl:rounded-3xl"
                loading="lazy"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-between text-terracotta space-y-[8rem] font-bold">
              <h2 className="text-3xl xl:text-4xl">Our Foundation</h2>
              <p className="text-2xl xl:text-3xl italic">
                Because of the Lord&apos;s great love we are not consumed, for His
                compassions never fail. They are new every morning; great is your
                faithfulness.
              </p>
              <h2 className="text-3xl xl:text-4xl text-right">
                Lamentations 3:22-23
              </h2>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <section className="w-full min-h-screen flex items-center justify-center my-20">
          <div className="grid grid-cols-[1fr,2fr,1fr] w-full overflow-hidden">
            {/* Left image - zoomed and positioned */}
            <div className="h-screen overflow-hidden relative">
              <div className="absolute inset-0 w-[300%] h-[300%] top-[-120%] left-[-80%]">
                <Image
                  src={faithImage}
                  alt="left image"
                  className="w-full h-full object-cover"
                  layout="fill"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Center content - with proper padding */}
            <div className="bg-latte h-screen flex items-center justify-center">
              <div className="max-w-xl xl:max-w-4xl px-8 py-12 text-terracotta">
                <h2 className="text-4xl xl:text-5xl mb-8 xl:mb-14 font-bold text-center">
                  A love rooted in faith
                </h2>
                <div className="text-center font-bold text-xl xl:text-2xl space-y-10 xl:space-y-10">
                  <p>
                    Dustin and Julia&apos;s love story began serving side by side
                    in youth ministry at church. What started as good friends
                    quickly blossomed into a deep connection rooted in their
                    mutual love for the next generation and the Lord. As they
                    spent time in the same circle of friends, Dustin found himself
                    drawn to Julia&apos;s lively energy, a perfect contrast to his
                    quiet and introverted nature.
                  </p>
                  <p>
                    As they start this new chapter together, Dustin and Julia are
                    dedicated to celebrating in a way that honors their families,
                    heritage, and the people who have supported them along the
                    way. Their wedding is a reflection of their hearts—intimate,
                    authentic, and joyfully candid. Surrounded by loved ones, they
                    aim to cherish this moment as a testimony to the love they
                    share and the faith that brought them together.
                  </p>
                </div>
              </div>
            </div>
            {/* Right image - zoomed and positioned */}
            <div className="h-screen overflow-hidden relative">
              <div className="absolute inset-0 w-[300%] h-[300%] top-[-130%] -left-[180%]">
                <Image
                  src={faithImage}
                  alt="right image"
                  className="w-full h-full object-cover"
                  layout="fill"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <section className="w-full min-h-screen flex items-center justify-center my-20 p-4 md:p-10">
          <div className="w-full max-w-6xl xl:max-w-7xl grid grid-cols-[2fr,2fr,2fr] items-center gap-8 font-bold relative">
            {/* Dustin's Profile */}
            <div
              className={`text-terracotta space-y-4 font-bold flex flex-col justify-center text-left
                      transition-all duration-500 ease-in-out md:h-auto
                      ${
                        dustinProfile === true
                          ? "opacity-100 max-h-[1000px] overflow-visible"
                          : "opacity-0 md:opacity-0 max-h-0 md:max-h-[1000px] overflow-hidden md:overflow-visible"
                      }
                      order-2 md:order-1
                    `}
            >
              <div className="text-3xl md:text-4xl xl:text-5xl xl:mb-4">
                Dustin
              </div>
              <div className="text-lg md:text-xl xl:text-[1.6em] space-y-6 md:space-y-10">
                <p>
                  Dustin is the kind of person whose quiet demeanor speaks
                  volumes. An introvert at heart, he carries wisdom and passion
                  that is evident in every conversation.
                </p>
                <p>
                  As a filmmaker, Dustin&apos;s gift for storytelling is seen
                  through his creative lens as he captures stories in a way that
                  inspires and connects people. His artistry reflects not just his
                  skill, but the heart he pours into his work.
                </p>
                <p>
                  Dustin&apos;s love for others and devotion to family are at the
                  core of who he is.
                </p>
              </div>
            </div>
            {/* Center Image */}
            <div className="relative mx-auto md:mx-0 order-1 md:order-2 z-10">
              <Image
                src={backstoryImage}
                alt="Dustin and Julia"
                className="rounded-t-[12rem] w-full max-w-xs xl:max-w-xl"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
                <p className="text-white font-bold text-xl xl:text-2xl drop-shadow-lg">
                  Tap here to get to know us!
                </p>
              </div>
              <div className="absolute inset-0 flex">
                <div
                  className="w-1/2 h-full cursor-pointer"
                  onClick={() => setDustinProfile(!dustinProfile)}
                  aria-label="Learn about Dustin"
                />
                <div
                  className="w-1/2 h-full cursor-pointer"
                  onClick={() => setJuliaProfile(!juliaProfile)}
                  aria-label="Learn about Julia"
                />
              </div>
            </div>
            {/* Julia's Profile */}
            <div
              className={`text-terracotta space-y-4 font-bold flex flex-col justify-center text-right
                      transition-all duration-500 ease-in-out
                      ${
                        juliaProfile === true
                          ? "opacity-100 max-h-[1000px] overflow-visible"
                          : "opacity-0 md:opacity-0 max-h-0 md:max-h-[1000px] overflow-hidden md:overflow-visible"
                      }
                      order-3
                    `}
            >
              <div className="text-3xl md:text-4xl xl:text-5xl xl:mb-4">
                Julia
              </div>
              <div className="text-lg xl:text-[1.6em] space-y-6 md:space-y-10">
                <p>
                  Julia is a passionate and purposeful individual who pours her
                  heart into everything she does. A proud multi-passionate, she
                  embraces God&apos;s call through the many roles she fulfills.
                </p>
                <p>
                  Her love for local fashion, uplifting communities, and teaching
                  kids reflects her values, as she strives to champion creativity
                  and connection wherever she goes.
                </p>
                <p>
                  A true people person, Julia&apos;s warmth and energy light up
                  every room. Her love for family and building meaningful
                  relationships is at the heart of who she is.
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <section className="w-full min-h-screen flex items-center justify-center my-20 p-4 md:p-10">
          <div className="w-full max-w-6xl flex flex-col items-center justify-between gap-8 md:gap-12 font-bold">
            <div className="text-terracotta text-4xl xl:text-6xl">
              What we value
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full">
              {/* Honor Card */}
              <div
                className="relative cursor-pointer aspect-square"
                onClick={() => setHonorVisible(!honorVisible)}
              >
                <Image
                  src={honorImage}
                  alt="honor"
                  className="aspect-square object-cover rounded-2xl transition-all duration-300 hover:brightness-75"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center p-4 text-center
                  transition-opacity duration-300 text-white font-bold italic
                  opacity-0 hover:opacity-100"
                >
                  <p className="text-3xl md:text-5xl">Honor</p>
                </div>
              </div>
              {/* Intentionality Card */}
              <div
                className="relative cursor-pointer aspect-square"
                onClick={() => setIntentionalityVisible(!intentionalityVisible)}
              >
                <Image
                  src={intentionalityImage}
                  alt="intentionality"
                  className="aspect-square object-cover rounded-2xl transition-all duration-300 hover:brightness-75"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center p-4 text-center
                  transition-opacity duration-300 text-white font-bold italic
                  opacity-0 hover:opacity-100"
                >
                  <p className="text-3xl md:text-5xl">Intentionality</p>
                </div>
              </div>
              {/* Service Card */}
              <div className="relative cursor-pointer aspect-square">
                <Image
                  src={serviceImage}
                  alt="service"
                  className="aspect-square object-cover rounded-2xl transition-all duration-300 hover:brightness-75"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center p-4 text-center
                  transition-opacity duration-300 text-white font-bold italic
                  opacity-0 hover:opacity-100"
                >
                  <p className="text-3xl md:text-5xl">Service</p>
                </div>
              </div>
            </div>
            <div className="text-terracotta text-center text-xl xl:text-3xl max-w-4xl">
              We want to be intentional in everything we do in preparation of our
              wedding and marriage that will help us honor God through honoring
              our parents, families, and community.
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}

export default DesktopCouplePage;
