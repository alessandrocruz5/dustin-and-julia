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
import PrincipalSponsorCard from "./PrincipalSponsorCard";

import RevealOnScroll from "./RevealOnScroll";

function MobileEntouragePage() {
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

      <Navbar />

      <RevealOnScroll>
        <div className="h-screen flex justify-center items-center text-terracotta text-5xl sm:text-6xl md:text-7xl font-bold">
          Entourage
        </div>
      </RevealOnScroll>

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
          <RevealOnScroll delay={0.2}>
            <EntourageCard title="Parents of the Groom">
              <div>Jerry Dennis L. Dagamac</div>
              <div>Ma. Luisa B. Dagamac</div>
            </EntourageCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <EntourageCard title="Parents of the Bride">
              <div>Janssen James D. Morados</div>
              <div>Maria A. Morados</div>
            </EntourageCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <EntourageCard title="Officiating Minister">
              <div>Michael A. Paderes</div>
            </EntourageCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <EntourageCard title="Principal Sponsors">
              <div className="flex flex-col space-y-4 text-center w-full">
                <PrincipalSponsorCard>
                  <div>Michael A. Paderes</div>
                  <div>Pia A. Paderes</div>
                </PrincipalSponsorCard>
                <PrincipalSponsorCard>
                  <div>Edgardo Antonio Q. Abad Jr.</div>
                  <div>Charibelle M. Abad</div>
                </PrincipalSponsorCard>
                <PrincipalSponsorCard>
                  <div className="flex justify-center items-center">
                    Marino D. Que
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
                  <div>Samantha C. Que</div>
                </PrincipalSponsorCard>
                <PrincipalSponsorCard>
                  <div>Gerard C. Mulligan</div>
                  <div>Desiree D. Mulligan</div>
                </PrincipalSponsorCard>
                <PrincipalSponsorCard>
                  <div>Phillip G. Chalmers</div>
                  <div>Jennifer H. Chalmers</div>
                </PrincipalSponsorCard>
                <PrincipalSponsorCard>
                  <div>Salvador Ricardo V. Peña</div>
                  <div>Mary Anne P. Peña</div>
                </PrincipalSponsorCard>
                <PrincipalSponsorCard>
                  <div>Ariel Jose G. Marquez</div>
                  <div>Shirley T. Marquez</div>
                </PrincipalSponsorCard>
                <PrincipalSponsorCard>
                  <div>Brian C. Lindsey</div>
                  <div>Lori M. Lindsey</div>
                </PrincipalSponsorCard>
                <PrincipalSponsorCard>
                  <div>Erwan Jean A. Heussaff</div>
                  <div>Soraya S. Tierie</div>
                </PrincipalSponsorCard>
              </div>
            </EntourageCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <EntourageCard title="Best Men">
              <div>Juan Jaime Mari A. Morados</div>
              <div>Joshua Eldrick B. Cao</div>
            </EntourageCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <EntourageCard title="Matrons of Honor">
              <div>Ma. Samantha Andreana M. Bautista</div>
              <div>Samantha Grace B. Tagala</div>
            </EntourageCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <EntourageCard title="Groomsmen">
              <div className="flex flex-col justify-center space-y-4 text-center w-full">
                <div>Jaime Mari Joaquin A. Morados</div>
                <div>John Carl B. Bautista</div>
                <div>Sean Ellis J. Raymundo</div>
                <div>James Dominic B. Belizario</div>
                <div>Jose Gabriel V. Tagala</div>
                <div>Samuel Christopher L. Flores</div>
              </div>
            </EntourageCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <EntourageCard title="Bridesmaids">
              <div className="flex flex-col justify-center space-y-4 text-center w-full">
                <div>Sofia P. Manaligod</div>
                <div>Kristina A. Paderes</div>
                <div>Kiara Adrienne C. Jaro</div>
                <div>Isabel G. Vilchez</div>
                <div>Gwyneth P. Jardiniano</div>
                <div>Alexandra M. Santelices</div>
              </div>
            </EntourageCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <EntourageCard title="Bible Bearer">
              <div>Cairo M. Abad</div>
            </EntourageCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <EntourageCard title="Flower Princess">
              <div>Calista M. Abad</div>
            </EntourageCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <EntourageCard title="Groom's Little Dudes">
              <div className="flex flex-col justify-center space-y-4 text-center w-full">
                <div>Bucky</div>
                <div>Jacob Kyle John D. Mulligan</div>
                <div>Gusten Caleb O. Dagamac</div>
                <div>Calix Kristoffer F. Bondoc</div>
              </div>
            </EntourageCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <EntourageCard title="To Usher the Bride in Love">
              <div className="flex flex-col justify-center space-y-4">
                <div>Ann Therese D. Bostre</div>
                <div>Margaux Yacel P. Buñales</div>
                <div>Clarisse Julienne C. Alvarez</div>
              </div>
            </EntourageCard>
          </RevealOnScroll>
        </div>
      </div>
    </>
  );
}

export default MobileEntouragePage;
