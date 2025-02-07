import Image from "next/image";
import React from "react";

import Navbar from "../components/Navbar";
import Segment from "../components/Segment";
import Button from "../components/Button";

import spinImage from "@/public/assets/photos/JUDU ENGAGEMENT-63.jpg";
import ringImage from "@/public/assets/photos/JUDU ENGAGEMENT-36.jpg";
import ceremonyImage from "@/public/assets/graphics/Monochrome.jpg";
import registryImage from "@/public/assets/photos/JUDU ENGAGEMENT-22.jpg";
import rsvpImage from "@/public/assets/photos/JUDU ENGAGEMENT-68.jpg";

function Landing() {
  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="w-full h-screen relative overflow-hidden mb-[20rem]">
        <Image
          className="absolute brightness-[0.75] object-cover transform -translate-x-[4%] -translate-y-[20%] scale-[1.3]"
          src={spinImage}
          alt="JUDU ENGAGEMENT-63"
        />
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-30%]">
          <h1 className="pb-10 text-9xl font-bold text-center text-linen ">
            dustin & julia
          </h1>
          <h2 className="pt-10 text-7xl font-bold text-center text-linen ">
            5.5.2025
          </h2>
        </div>
      </div>
      <div className="w-full h-screen my-[10rem]">
        <Segment>
          <div>
            <Image
              src={ringImage}
              alt="JUDU ENGAGEMENT-36"
              className="rounded-[5%] object-cover w-[35rem] h-[35rem]"
            />
          </div>
          <div className="flex flex-col justify-between h-[35rem]">
            <h2 className="text-9xl text-terracota font-extrabold">
              the couple
            </h2>
            <Button title="about us" cssStyles="ml-auto" />
          </div>
        </Segment>
      </div>
      <div className="w-full h-screen my-[10rem]">
        <Segment>
          <div className="flex flex-col justify-between h-[35rem]">
            <h2 className="text-9xl text-terracota font-extrabold">
              the ceremony
            </h2>
            <Button title="details" cssStyles="mr-auto" />
          </div>
          <div>
            <Image
              src={ceremonyImage}
              alt="JUDU ENGAGEMENT-36"
              className="rounded-[5%] object-cover w-[35rem] h-[35rem]"
            />
          </div>
        </Segment>
      </div>
      <div className="w-full h-screen my-[10rem]">
        <Segment direction="col" gap="4">
          <div>
            <Image
              src={spinImage}
              alt="JUDU ENGAGEMENT-36"
              className="rounded-3xl object-cover w-full h-[35rem]"
            />
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-9xl text-terracota font-extrabold">
              the entourage
            </h2>
            <Button title="details" cssStyles="ml-auto" />
          </div>
        </Segment>
      </div>
      <div className="w-full h-screen my-[10rem]">
        <Segment>
          <div>
            <Image
              src={registryImage}
              alt="JUDU ENGAGEMENT-36"
              className="rounded-[5%] object-cover w-[35rem] h-[35rem]"
            />
          </div>
          <div className="flex flex-col justify-between h-[35rem]">
            <h2 className="text-9xl text-terracota font-extrabold">
              the registry
            </h2>
            <Button title="about us" cssStyles="ml-auto" />
          </div>
        </Segment>
      </div>
      <div className="w-full h-screen my-[10rem]">
        <Segment>
          <div className="flex flex-col justify-between h-[35rem]">
            <h2 className="text-9xl text-terracota font-extrabold">rsvp</h2>
            <div>
              <h3 className="text-5xl text-terracota font-extrabold">
                please message us on instagram <br /> by <u>march 31</u>
              </h3>
              <p className="text-5xl text-terracota font-extrabold">
                @dustinandjulia
              </p>
            </div>
          </div>
          <div>
            <Image
              src={rsvpImage}
              alt="JUDU ENGAGEMENT-36"
              className="rounded-[5%] object-cover w-[35rem] h-[35rem]"
            />
          </div>
        </Segment>
      </div>
    </>
  );
}

export default Landing;
