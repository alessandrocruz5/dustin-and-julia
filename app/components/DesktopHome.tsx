import React from "react";
import DesktopLanding from "./DesktopLanding";
import Segment from "./Segment";

import spinImage from "@/public/assets/photos/JUDU ENGAGEMENT-63.jpg";
import coupleImage from "@/public/assets/photos/JUDU ENGAGEMENT-36.jpg";
import ceremonyImage from "@/public/assets/graphics/Monochrome.jpg";
import rsvpImage from "@/public/assets/photos/JUDU ENGAGEMENT-68.jpg";
import CenterSegment from "./CenterSegment";

function DesktopHome() {
  return (
    <>
      <DesktopLanding />
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
      {/* <Segment
        image={spinImage}
        buttonStyles="ml-auto mt-[10rem]"
        buttonTitle="details"
        buttonLink="the-entourage"
        imagePosition="left"
        contentAlignment="right"
      >
        <h2>the entourage</h2>
      </Segment> */}
      <CenterSegment
        image={spinImage}
        alt="spin"
        buttonLink="the-entourage"
        buttonTitle="Details"
        className="my-20"
      >
        <h2>The Entourage</h2>
      </CenterSegment>
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
    </>
  );
}

export default DesktopHome;
