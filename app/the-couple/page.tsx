"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResponsiveLayout from "../components/ResponsiveLayout";
import MobileCouplePage from "../components/MobileCouplePage";
import DesktopCouplePage from "../components/DesktopCouplePage";

function CouplePage() {
  return (
    <>
      <Navbar />
      <ResponsiveLayout
        mobileContent={<MobileCouplePage />}
        desktopContent={<DesktopCouplePage />}
        breakpoint={1025}
      />
      <Footer />
    </>
  );
}
export default CouplePage;
