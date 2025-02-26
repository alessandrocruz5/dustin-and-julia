"use client";

import React from "react";
import ResponsiveLayout from "../components/ResponsiveLayout";
import MobileCouplePage from "../components/MobileCouplePage";
import DesktopCouplePage from "../components/DesktopCouplePage";
import ScrollToTop from "../components/ScrollToTop";

function CouplePage() {
  return (
    <>
      <ScrollToTop />
      <ResponsiveLayout
        mobileContent={<MobileCouplePage />}
        desktopContent={<DesktopCouplePage />}
        breakpoint={1025}
      />
    </>
  );
}
export default CouplePage;
