import React, { ReactNode } from "react";

interface SegmentProps {
  children: ReactNode;
  direction?: "row" | "col";
}

function Segment({ children, direction = "row" }: SegmentProps) {
  return (
    <div className="w-full min-h-screen mt-32 md:mt-48 lg:mt-64">
      <div
        className={`
          max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-full
          ${
            direction === "row"
              ? "flex flex-col md:flex-row justify-around items-center gap-8 md:gap-16"
              : "flex flex-col gap-8"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}

export default Segment;
