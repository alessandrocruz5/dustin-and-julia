import React from "react";

interface CircleProps {
  color:
    | "silverpink"
    | "artichoke"
    | "pastelgray"
    | "pastelbeige"
    | "beaver"
    | "tan";
}

function Circle({ color }: CircleProps) {
  const colorClasses = {
    silverpink: "bg-silverpink",
    artichoke: "bg-artichoke",
    pastelgray: "bg-pastelgray",
    pastelbeige: "bg-pastelbeige",
    beaver: "bg-beaver",
    tan: "bg-tan",
  };

  return <div className={`w-16 h-16 rounded-full ${colorClasses[color]}`} />;
}

export default Circle;
