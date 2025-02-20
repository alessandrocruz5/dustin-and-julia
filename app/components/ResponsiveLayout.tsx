"use client";

import { useState, useEffect } from "react";
import { useViewport } from "@/app/hooks/useViewport";

const ResponsiveLayout = ({
  mobileContent,
  desktopContent,
  breakpoint = 1024,
}) => {
  const { width } = useViewport();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initial state - show nothing until mounted
  if (!mounted) {
    return null;
  }

  // Choose content based on viewport width
  return width < breakpoint ? mobileContent : desktopContent;
};

export default ResponsiveLayout;
