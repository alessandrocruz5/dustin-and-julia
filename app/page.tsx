"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import Navbar from "@/app/components/Navbar";
import Segment from "@/app/components/Segment";
import Button from "@/app/components/Button";

import spinImage from "@/public/assets/photos/JUDU ENGAGEMENT-63.jpg";
import coupleImage from "@/public/assets/photos/JUDU ENGAGEMENT-36.jpg";
import ceremonyImage from "@/public/assets/graphics/Monochrome.jpg";
// import registryImage from "@/public/assets/photos/JUDU ENGAGEMENT-22.jpg";
import rsvpImage from "@/public/assets/photos/JUDU ENGAGEMENT-68.jpg";
import Footer from "@/app/components/Footer";
import Link from "next/link";

function LandingPage() {

  const useMobileDetect = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      // Check on initial load
      checkMobile();

      // Add event listener for window resize
      window.addEventListener('resize', checkMobile);

      // Cleanup
      return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint]);

    return isMobile;
  };

  const isMobile = useMobileDetect();

  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="w-full h-screen relative overflow-hidden xl:mb-[15rem] lg:mb-[12rem] md:mb-[9rem] sm:mb-[6rem] xs:mb-[3rem]">
        <Image
          className="absolute brightness-[0.75] object-cover transform -translate-x-[4%] -translate-y-[20%] scale-[1.2]"
          src={spinImage}
          alt="JUDU ENGAGEMENT-63"
        />
        <div className="absolute z-10 top-1/2 left-1/2 transform xl:-translate-x-1/2 xl:-translate-y-[-40%] lg:translate-y-[90%] md:-translate-x-1/2  md:translate-y-[30%] sm:-translate-x-1/2 sm:translate-y-[-30%]">
          <h1 className="xl:pb-5 lg:pb-3 md:pb-1 xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-bold text-center text-linen">
            dustin & julia
          </h1>
          <h2 className="xl:pt-5 lg:pb-3 md:pb-1 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold text-center text-linen">
            5.5.2025
          </h2>
        </div>
      </div>
      <Segment isMobile={isMobile}>
        <div className={isMobile ? "w-full" : "flex flex-col justify-between xl:h-[25rem] lg:h-[22rem] md:h-[19rem] sm:h-[25rem] xs:h-[13rem]"}>
          <h2 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl text-terracotta font-extrabold">
            the couple
          </h2>
          <Button title="about us" cssStyles={isMobile ? "mt-4" : "mr-auto"} href="/the-couple" />
        </div>

        <div className={isMobile ? "w-full" : "w-1/2 flex justify-end"}>
          <Image
            src={coupleImage}
            alt="JUDU ENGAGEMENT-36"
            className="rounded-[2rem] object-cover xl:w-[25rem] lg:w-[22rem] md:w-[19rem] sm:w-[30rem] xs:w-[13rem] xl:h-[25rem] lg:h-[22rem] md:h-[19rem] sm:h-[25rem] xs:h-[13rem]"
          />
        </div>
      </Segment>
      <Segment>
      <div>
          <Image
            src={ceremonyImage}
            alt="JUDU ENGAGEMENT-36"
            className="rounded-[5%] object-cover xl:w-[25rem] lg:w-[22rem] md:w-[19rem] sm:w-[16rem] xs:w-[13rem] xl:h-[25rem] lg:h-[22rem] md:h-[19rem] sm:h-[16rem] xs:h-[13rem]"
          />
        </div>
        <div className="flex flex-col justify-between xl:h-[25rem] lg:h-[22rem] md:h-[19rem] sm:h-[16rem] xs:h-[13rem]">
          <h2 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl text-terracotta font-extrabold">
            the ceremony
          </h2>
          <Button title="details" cssStyles="ml-auto" href="/the-ceremony" />
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
          <h2 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl text-terracotta font-extrabold">
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
        <div className="flex flex-col justify-between xl:h-[25rem] lg:h-[22rem] md:h-[19rem] sm:h-[16rem] xs:h-[13rem]">
          <h2 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl text-terracotta font-extrabold">rsvp</h2>
          <div className="space-y-5">
            <div className="space-y-4">
              <h3 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg text-terracotta font-extrabold">
                please message us on instagram by
              </h3>
              <h3 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg text-linen bg-terracotta xl:w-[10rem] lg:w-[9rem] md:w-[8rem] sm:w-[7rem] xs:[6rem] p-2 font-extrabold text-center rounded-2xl">
                march 31
              </h3>
            </div>
            <p className="w-[21rem] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-terracotta font-extrabold hover:underline">
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
            className="rounded-[5%] object-cover xl:w-[25rem] lg:w-[22rem] md:w-[19rem] sm:w-[16rem] xs:w-[13rem] xl:h-[25rem] lg:h-[22rem] md:h-[19rem] sm:h-[16rem] xs:h-[13rem]"
          />
        </div>
      </Segment>
      <Footer />
    </>
  );
}

export default LandingPage;
