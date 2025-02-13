import React from "react";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Image from "next/image";

import sunImage from "@/public/assets/graphics/Sunburnt.png";
import EntourageCard from "../components/EntourageCard";
import crossSm from "@/public/assets/graphics/cross-sm.png";
import Footer from "../components/Footer";

function EntouragePage() {
  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <PageTitle image={sunImage} title="entourage" width={300} height={300} />
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
        <div className="flex justify-between">
          <div className="w-[600] flex flex-col space-y-4 text-right">
            <div>michael a. paredes</div>
            <div>edgardo antonio q. abad jr.</div>
            <div className="flex justify-end">
              marino d. que
              <Image
                src={crossSm}
                alt="cross"
                width={40}
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
          </div>
          <div className="w-[600] flex flex-col space-y-4 text-left">
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
        <div className="flex justify-between">
          <div className="flex flex-col justify-center space-y-4 text-right w-[600]">
            <div>jaime mari joaquin a. morados</div>
            <div>john carl b. bautista</div>
            <div>sean ellis j. raymundo</div>
          </div>
          <div className="flex flex-col justify-center space-y-4 text-left w-[600]">
            <div>james dominic b. belizario</div>
            <div>jose gabriel v. tagala</div>
            <div>samuel christopher l. flores</div>
          </div>
        </div>
      </EntourageCard>
      <EntourageCard title="bridesmaids">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center space-y-4 text-right w-[600]">
            <div>sofia p. manaligod</div>
            <div>kristina a. paderes</div>
            <div>kiara adrienne c. jaro</div>
          </div>
          <div className="flex flex-col justify-center space-y-4 text-left w-[600]">
            <div>isabel g. vilchez</div>
            <div>gwyneth p. jardiniano</div>
            <div>alexandra m. santelices</div>
          </div>
        </div>
      </EntourageCard>
      <EntourageCard title="bible bearer">
        <div>cairo m. abad</div>
      </EntourageCard>
      <EntourageCard title="flower princess">
        <div>calista m. abad</div>
      </EntourageCard>
      <EntourageCard title="groom's little dudes">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center space-y-4 text-right w-[600]">
            <div>bucky</div>
            <div>gusten caleb o. dagamac</div>
          </div>
          <div className="flex flex-col justify-center space-y-4 text-left w-[600]">
            <div>jacob d. mulligan</div>
            <div>calix kristoffer f. bondoc</div>
          </div>
        </div>
      </EntourageCard>
      <EntourageCard title="to usher the bride in love">
        <div className="flex flex-col justify-center space-y-4">
          <div>ann therese d. bostre</div>
          <div>margaux yacel p. bunales</div>
          <div>clarisse julienne c. alvarez</div>
        </div>
      </EntourageCard>
      <Footer />
    </>
  );
}

export default EntouragePage;
