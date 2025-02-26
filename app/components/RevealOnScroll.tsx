"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface RevealOnScrollProps {
    children: React.ReactNode;
    direction?: string;
    delay?: number;
    className?: string;
}

function RevealOnScroll({ children, direction = "up", delay = 0, className = "" }: RevealOnScrollProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default RevealOnScroll;