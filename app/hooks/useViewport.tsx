"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect viewport size and provide responsive breakpoints
 * @returns {Object} Viewport information including width and boolean flags for breakpoints
 */
export function useViewport() {
  // Default to desktop size to prevent hydration mismatch
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  // Responsive breakpoints
  const isMobile = width <= 1024;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width > 1024;

  useEffect(() => {
    // Skip if SSR
    if (typeof window === "undefined") return;

    // Handler to call on window resize
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away to update state with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect runs only on mount and unmount

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
  };
}

export default useViewport;
