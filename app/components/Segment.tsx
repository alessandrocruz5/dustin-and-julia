import React, { ReactNode } from "react";

interface SegmentProps {
  children: ReactNode;
  direction?: "row" | "col";
}

function Segment({ children, direction = "row" }: SegmentProps) {
  return (
    <div className="w-full h-screen py-[20rem]">
      <div className={`flex flex-${direction} h-full justify-between px-60`}>
        {direction === "row" ? (
          <>{children}</>
        ) : (
          <div className="space-y-5">{children}</div>
        )}
      </div>
    </div>
  );
}

export default Segment;
