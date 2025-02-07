import React from "react";

function Segment({ children, direction = "row", gap = "20" }) {
  return (
    <div
      className={`flex flex-${direction} h-full justify-between px-60 gap-${gap}`}
    >
      {direction === "row" ? <>{children}</> : <>{children}</>}
    </div>
  );
}

export default Segment;
