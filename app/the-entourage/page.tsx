"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

import coconutImage from "@/public/assets/graphics/Coconutburnt.png";
import flowerImage from "@/public/assets/graphics/Gumamelaburnt.png";
import treeImage from "@/public/assets/graphics/Palm treeburnt.png";
import cactusImage from "@/public/assets/graphics/Cactusburnt.png";
import EntourageCard from "../components/EntourageCard";
import crossSm from "@/public/assets/graphics/cross-sm.png";
import Footer from "../components/Footer";

function EntouragePage() {
  return (
    <>
      <style jsx global>{`
        @keyframes singleFrameFlip {
          0%,
          49.9% {
            transform: rotate(0.3rad);
          }
          50%,
          100% {
            transform: rotate(-0.3rad);
          }
        }

        @keyframes singleFrameFlipReverse {
          0%,
          49.9% {
            transform: rotate(-0.3rad);
          }
          50%,
          100% {
            transform: rotate(0.3rad);
          }
        }

        .flip-animation {
          animation: singleFrameFlip 1s infinite steps(1);
        }

        .flip-animation-reverse {
          animation: singleFrameFlipReverse 1s infinite steps(1);
        }
      `}</style>

      <div className="fixed top-0 z-[999] w-full">
        <Navbar />
      </div>
      <div className="h-screen flex justify-center items-center text-terracotta text-5xl sm:text-6xl md:text-7xl font-bold">
        entourage
      </div>

      <div className="relative mt-16 sm:mt-24 md:mt-32">
        {/* Decorative elements container - using percentages for positioning */}
        <div className="fixed inset-0 w-full -z-10 overflow-hidden">
          {/* Left side decorations - using percentages and viewport units */}
          <div className="absolute top-[10vh] left-[2vw] sm:left-[5vw] md:left-[8vw]">
            <Image
              src={cactusImage}
              alt="cactus graphic"
              className="flip-animation w-[11rem] sm:w-[160px] md:w-[200px] h-auto"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-[25vh] left-[3vw] sm:left-[5vw] md:left-[7vw]">
            <Image
              src={flowerImage}
              alt="flower graphic"
              className="flip-animation w-[11rem] sm:w-[160px] md:w-[200px] h-auto"
              loading="lazy"
            />
          </div>

          {/* Right side decorations - using percentages and viewport units */}
          <div className="absolute top-[20vh] right-[2vw] sm:right-[5vw] md:right-[8vw]">
            <Image
              src={coconutImage}
              alt="coconut graphic"
              className="flip-animation w-[11rem] sm:w-[160px] md:w-[200px] h-auto"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-[12vh] right-[3vw] sm:right-[5vw] md:right-[7vw]">
            <Image
              src={treeImage}
              alt="palm tree graphic"
              className="flip-animation w-[11rem] sm:w-[160px] md:w-[200px] h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Entourage Cards Container */}
        <div className="relative z-10 max-w-lg mx-auto px-4">
          <EntourageCard title="parents of the groom">
            <div>jerrie dennis l. dagamac</div>
            <div>ma. luisa b. dagamac</div>
          </EntourageCard>

          <EntourageCard title="parents of the bride">
            <div>janssen james d. morados</div>
            <div>maria a. morados</div>
          </EntourageCard>

          <EntourageCard title="officiating minister">
            <div>michael a. paredes</div>
          </EntourageCard>

          <EntourageCard title="principal sponsors">
            <div className="flex flex-col space-y-4 text-center w-full">
              <div>michael a. paredes</div>
              <div>edgardo antonio q. abad jr.</div>
              <div className="flex justify-center items-center">
                marino d. que
                <Image
                  src={crossSm}
                  alt="cross"
                  className="w-[1.3rem] h-[1.5rem] ml-2"
                  style={{
                    filter:
                      "invert(27%) sepia(51%) saturate(1000%) hue-rotate(346deg) brightness(88%) contrast(82%)",
                  }}
                />
              </div>
              <div>gerry c. mulligan</div>
              <div>phillip g. chalmers</div>
              <div>salvador ricardo v. pena</div>
              <div>ariel jose g. marquez</div>
              <div>brian c. lindsey</div>
              <div>erwan jean a. heussaff</div>
              <hr className="mx-auto w-[80%] rounded-2xl border-terracotta border-[0.12rem] my-4" />
              <div>pia a. paderes</div>
              <div>charibelle m. abad</div>
              <div>samantha c. que</div>
              <div>desiree d. mulligan</div>
              <div>jennifer h. chalmers</div>
              <div>mary anne p. pena</div>
              <div>shirley t. marquez</div>
              <div>lori m. lindsey</div>
              <div>soraya s. tierie</div>
            </div>
          </EntourageCard>

          <EntourageCard title="best men">
            <div>juan jaime mari a. morados</div>
            <div>joshua eldrick b. cao</div>
          </EntourageCard>

          <EntourageCard title="matrons of honor">
            <div>ma. samantha andreana m. bautista</div>
            <div>samantha grace b. tagala</div>
          </EntourageCard>

          <EntourageCard title="groomsmen">
            <div className="flex flex-col justify-center space-y-4 text-center w-full">
              <div>jaime mari joaquin a. morados</div>
              <div>john carl b. bautista</div>
              <div>sean ellis j. raymundo</div>
              <div>james dominic b. belizario</div>
              <div>jose gabriel v. tagala</div>
              <div>samuel christopher l. flores</div>
            </div>
          </EntourageCard>

          <EntourageCard title="bridesmaids">
            <div className="flex flex-col justify-center space-y-4 text-center w-full">
              <div>sofia p. manaligod</div>
              <div>kristina a. paderes</div>
              <div>kiara adrienne c. jaro</div>
              <div>isabel g. vilchez</div>
              <div>gwyneth p. jardiniano</div>
              <div>alexandra m. santelices</div>
            </div>
          </EntourageCard>

          <EntourageCard title="bible bearer">
            <div>cairo m. abad</div>
          </EntourageCard>

          <EntourageCard title="flower princess">
            <div>calista m. abad</div>
          </EntourageCard>

          <EntourageCard title="groom's little dudes">
            <div className="flex flex-col justify-center space-y-4 text-center w-full">
              <div>bucky</div>
              <div>gusten caleb o. dagamac</div>
              <div>jacob d. mulligan</div>
              <div>calix kristoffer f. bondoc</div>
            </div>
          </EntourageCard>

          <EntourageCard title="to usher the bride in love">
            <div className="flex flex-col justify-center space-y-4">
              <div>ann therese d. bostre</div>
              <div>margaux yacel p. bunales</div>
              <div>clarisse julienne c. alvarez</div>
            </div>
          </EntourageCard>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EntouragePage;
