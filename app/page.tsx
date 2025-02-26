"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MobileHome from "./components/MobileHome";
import DesktopHome from "./components/DesktopHome";
import ResponsiveLayout from "./components/ResponsiveLayout";
import ScrollToTop from "./components/ScrollToTop";

function LandingPage() {
  return (
    <div className="min-h-screen bg-linen min-w-screen">
      <ScrollToTop />
      <Navbar />
      <ResponsiveLayout
        mobileContent={<MobileHome />}
        desktopContent={<DesktopHome />}
        breakpoint={1025}
      />
      <Footer />
    </div>
  );
}

export default LandingPage;
