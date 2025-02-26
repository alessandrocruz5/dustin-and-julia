"use client";

import React from "react";
import ResponsiveLayout from "../components/ResponsiveLayout";
import MobileCouplePage from "../components/MobileCouplePage";
import DesktopCouplePage from "../components/DesktopCouplePage";
import ScrollToTop from "../components/ScrollToTop";
import RevealOnScroll from "../components/RevealOnScroll";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function CouplePage() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Delay to ensure any previous page has faded out
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}>
      <ScrollToTop />
      <ResponsiveLayout
          mobileContent={<MobileCouplePage />}
          desktopContent={<DesktopCouplePage />}
          breakpoint={1025}
        />
        <RevealOnScroll delay={0.2}>
          <Footer />
        </RevealOnScroll>
    </motion.div>
  );
}
export default CouplePage;
