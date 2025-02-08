import React from "react";

function Segment({ children, direction = "row" }) {
  return (
    <div className="w-full h-screen py-[20rem]">
      <div className={`flex flex-${direction} h-full justify-between px-60`}>
        {direction === "row" ? <>{children}</> : <>{children}</>}
      </div>
    </div>
  );
}

export default Segment;
