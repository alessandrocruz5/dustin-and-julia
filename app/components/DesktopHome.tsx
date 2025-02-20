import React from "react";
import DesktopLanding from "./DesktopLanding";
import Segment from "./Segment";

import spinImage from "@/public/assets/photos/JUDU ENGAGEMENT-63.jpg";
import coupleImage from "@/public/assets/photos/JUDU ENGAGEMENT-36.jpg";
import ceremonyImage from "@/public/assets/graphics/Monochrome.jpg";
import rsvpImage from "@/public/assets/photos/JUDU ENGAGEMENT-68.jpg";

function DesktopHome() {
  return (
    <>
      <DesktopLanding />
      <Segment
        image={coupleImage}
        buttonStyles="ml-auto mt-[8rem]"
        buttonTitle="about us"
        buttonLink="the-couple"
        imagePosition="left"
        contentAlignment="right"
      >
        <h2>the couple</h2>
      </Segment>
      <Segment
        image={ceremonyImage}
        buttonStyles="mr-auto mt-[8rem]"
        buttonTitle="details"
        buttonLink="the-ceremony"
        imagePosition="right"
        contentAlignment="left"
      >
        <h2>the ceremony</h2>
      </Segment>
      <Segment
        image={spinImage}
        buttonStyles="ml-auto"
        buttonTitle="details"
        buttonLink="the-entourage"
        imagePosition="left"
        contentAlignment="right"
      >
        <h2>the entourage</h2>
      </Segment>
    </>
  );
}

export default DesktopHome;
