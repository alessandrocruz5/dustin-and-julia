import Image from "next/image";
import React from "react";

import Navbar from "@/app/components/Navbar";
import Segment from "@/app/components/Segment";
import Button from "@/app/components/Button";

import spinImage from "@/public/assets/photos/JUDU ENGAGEMENT-63.jpg";
import ringImage from "@/public/assets/photos/JUDU ENGAGEMENT-36.jpg";
import ceremonyImage from "@/public/assets/graphics/Monochrome.jpg";
// import registryImage from "@/public/assets/photos/JUDU ENGAGEMENT-22.jpg";
import rsvpImage from "@/public/assets/photos/JUDU ENGAGEMENT-68.jpg";
import Footer from "@/app/components/Footer";
import Link from "next/link";

function LandingPage() {
  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="w-full h-screen relative overflow-hidden pb-[10rem]">
        <Image
          className="absolute brightness-[0.75] object-cover transform -translate-x-[4%] -translate-y-[20%] scale-[1.2]"
          src={spinImage}
          alt="JUDU ENGAGEMENT-63"
        />
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-40%]">
          <h1 className="pb-5 text-7xl font-bold text-center text-linen ">
            dustin & julia
          </h1>
          <h2 className="pt-5 text-6xl font-bold text-center text-linen ">
            5.5.2025
          </h2>
        </div>
      </div>
      <Segment>
        <div>
          <Image
            src={ringImage}
            alt="JUDU ENGAGEMENT-36"
            className="rounded-[5%] object-cover w-[25rem] h-[25rem]"
          />
        </div>
        <div className="flex flex-col justify-between h-[25rem]">
          <h2 className="text-8xl text-terracotta font-extrabold">
            the couple
          </h2>
          <Button title="about us" cssStyles="ml-auto" href="/the-couple" />
        </div>
      </Segment>
      <Segment>
        <div className="flex flex-col justify-between h-[25rem]">
          <h2 className="text-8xl text-terracotta font-extrabold">
            the ceremony
          </h2>
          <Button title="details" cssStyles="mr-auto" href="/the-ceremony" />
        </div>
        <div>
          <Image
            src={ceremonyImage}
            alt="JUDU ENGAGEMENT-36"
            className="rounded-[5%] object-cover w-[25rem] h-[25rem]"
          />
        </div>
      </Segment>
      <Segment direction="col">
        <div>
          <Image
            src={spinImage}
            alt="JUDU ENGAGEMENT-36"
            className="rounded-3xl object-cover w-full h-[25rem]"
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-8xl text-terracotta font-extrabold">
            the entourage
          </h2>
          <Button
            title="details"
            cssStyles="ml-auto mt-auto"
            href="/the-entourage"
          />
        </div>
      </Segment>
      {/* <Segment>
        <div>
          <Image
            src={registryImage}
            alt="JUDU ENGAGEMENT-36"
            className="rounded-[5%] object-cover w-[25rem] h-[25rem]"
          />
        </div>
        <div className="flex flex-col justify-between h-[25rem]">
          <h2 className="text-8xl text-terracotta font-extrabold">
            the registry
          </h2>
          <Button title="about us" cssStyles="ml-auto" href="/the-registry" />
        </div>
      </Segment> */}
      <Segment>
        <div className="flex flex-col justify-between h-[25rem]">
          <h2 className="text-8xl text-terracotta font-extrabold">rsvp</h2>
          <div className="space-y-5">
            <div className="space-y-4">
              <h3 className="text-4xl text-terracotta font-extrabold">
                please message us on instagram by
              </h3>
              <h3 className="text-4xl text-linen bg-terracotta w-[10rem] p-2 font-extrabold text-center rounded-2xl">
                march 31
              </h3>
            </div>
            <p className="w-[21rem] text-5xl text-terracotta font-extrabold hover:underline">
              <Link
                href="https://www.instagram.com/dustinandjulia/?hl=en"
                target="_blank"
              >
                @dustinandjulia
              </Link>
            </p>
          </div>
        </div>
        <div>
          <Image
            src={rsvpImage}
            alt="JUDU ENGAGEMENT-36"
            className="rounded-[5%] object-cover w-[25rem] h-[25rem]"
          />
        </div>
      </Segment>
      <Footer />
    </>
  );
}

export default LandingPage;
