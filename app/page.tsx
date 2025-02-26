"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MobileHome from "./components/MobileHome";
import DesktopHome from "./components/DesktopHome";
import ResponsiveLayout from "./components/ResponsiveLayout";
import ScrollToTop from "./components/ScrollToTop";
import RevealOnScroll from "./components/RevealOnScroll";
import { motion } from "framer-motion";

function LandingPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Delay to ensure any previous page has faded out
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
    className="min-h-screen bg-linen min-w-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}>
      <ScrollToTop />
      <Navbar />
      <ResponsiveLayout
        mobileContent={<MobileHome />}
        desktopContent={<DesktopHome />}
        breakpoint={1025}
      />
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </motion.div>
  );
}

export default LandingPage;
