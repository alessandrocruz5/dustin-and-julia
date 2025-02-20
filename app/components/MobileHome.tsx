"use client";

import Image from "next/image";
import React from "react";

import Segment from "@/app/components/Segment";

import spinImage from "@/public/assets/photos/JUDU ENGAGEMENT-63.jpg";
import coupleImage from "@/public/assets/photos/JUDU ENGAGEMENT-36.jpg";
import ceremonyImage from "@/public/assets/graphics/Monochrome.jpg";
import rsvpImage from "@/public/assets/photos/JUDU ENGAGEMENT-68.jpg";
import MobileLanding from "./MobileLanding";

function MobileHome() {
  return (
    <>
      <MobileLanding image={spinImage} />
      <Segment
        image={coupleImage}
        buttonStyles="ml-auto"
        buttonTitle="about us"
        buttonLink="the-couple"
      >
        <h2>the</h2>
        <h2>couple</h2>
      </Segment>
      <Segment
        image={ceremonyImage}
        textStyle="text-right"
        buttonStyles="mr-auto"
        buttonTitle="details"
        buttonLink="the-ceremony"
      >
        <h2>the</h2>
        <h2>ceremony</h2>
      </Segment>
      <Segment
        image={spinImage}
        buttonStyles="ml-auto"
        buttonTitle="details"
        buttonLink="the-entourage"
      >
        <h2>the</h2>
        <h2>entourage</h2>
      </Segment>
      <section className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-xl p-[2rem] px-8 py-[12rem] space-y-10 mx-auto">
          <div className="text-terracotta space-y-1 text-5xl font-bold text-center">
            <h2>rsvp</h2>
          </div>
          <div className="relative w-full">
            <Image
              src={rsvpImage}
              alt="the couple"
              className="object-cover aboslute rounded-3xl aspect-square object-top"
              loading="lazy"
            />
          </div>
          <div className="text-terracotta text-center text-[1.4em] font-bold">
            <p>
              We&apos;d love to know if you can make it so that we can prepare
              accordingly! Kindly message us on Instagram by{" "}
              <span className="bg-terracotta text-linen px-3 w-[7rem] rounded-lg">
                March 31
              </span>
            </p>
            <div className="mt-[2rem]">
              <a
                className="text-2xl"
                target="_blank"
                href="https://www.instagram.com/dustinandjulia/?hl=en"
              >
                @dustinandjulia
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MobileHome;
