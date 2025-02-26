"use client";

import React from "react";
import MobileCeremonyPage from "../components/MobileCeremonyPage";
import ResponsiveLayout from "../components/ResponsiveLayout";
import DesktopCeremonyPage from "../components/DesktopCeremonyPage";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";
import { motion } from "framer-motion"

function CeremonyPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Delay to ensure any previous page has faded out
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div  initial={{ opacity: 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}>
      <ScrollToTop />
      <ResponsiveLayout
            mobileContent={<MobileCeremonyPage />}
            desktopContent={<DesktopCeremonyPage />}
            breakpoint={1025}
          />
      <RevealOnScroll delay={0.2}>
        <Footer />
      </RevealOnScroll>
    </motion.div>
  );
}

export default CeremonyPage;
