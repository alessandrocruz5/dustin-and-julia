import React from "react";
import DesktopLanding from "./DesktopLanding";
import Segment from "./Segment";

import spinImage from "@/public/assets/photos/JUDU ENGAGEMENT-63.jpg";
import coupleImage from "@/public/assets/photos/JUDU ENGAGEMENT-36.jpg";
import ceremonyImage from "@/public/assets/graphics/Monochrome.jpg";
import rsvpImage from "@/public/assets/photos/JUDU ENGAGEMENT-68.jpg";
import CenterSegment from "./CenterSegment";
import RevealOnScroll from "./RevealOnScroll";

function DesktopHome() {
  return (
    <>
      <DesktopLanding />
      <RevealOnScroll delay={0.3} direction="right">
        <Segment
          image={coupleImage}
          buttonStyles="ml-auto mt-[10rem]"
          buttonTitle="Details"
          buttonLink="the-couple"
          imagePosition="left"
          contentAlignment="right"
        >
          <h2>The Couple</h2>
        </Segment>
      </RevealOnScroll>
      <RevealOnScroll delay={0.3} direction="left">
        <Segment
          image={ceremonyImage}
          buttonStyles="mr-auto mt-[10rem]"
          buttonTitle="Details"
          buttonLink="the-ceremony"
          imagePosition="right"
          contentAlignment="left"
        >
          <h2>The Ceremony</h2>
        </Segment>
      </RevealOnScroll>
      <RevealOnScroll>
        <CenterSegment
          image={spinImage}
          alt="spin"
          buttonLink="the-entourage"
          buttonTitle="Details"
        >
          <h2>The Entourage</h2>
        </CenterSegment>
      </RevealOnScroll>
      <RevealOnScroll delay={0.3}>
        <Segment
          image={rsvpImage}
          buttonTitle="Details"
          buttonLink="/the-entourage"
          showButton={false}
          contentAlignment="left"
          imagePosition="right"
          alternativeText={
            <p className="text-4xl leading-[3rem] font-bold">
              We&apos;d love to know if you can make it so that we can prepare
              accordingly! Kindly message us on Instagram by{" "}
              <span className="bg-terracotta text-linen px-3 w-[7rem] rounded-lg">
                March 31
              </span>
            </p>
          }
        >
          <h2>RSVP</h2>
        </Segment>
      </RevealOnScroll>
    </>
  );
}

export default DesktopHome;
