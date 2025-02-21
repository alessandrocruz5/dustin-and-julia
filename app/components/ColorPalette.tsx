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

  return (
    <div
      className={`w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] rounded-full ${colorClasses[color]}`}
    />
  );
}

function ColorPalette() {
  const colors: CircleProps["color"][] = [
    "silverpink",
    "artichoke",
    "pastelgray",
    "pastelbeige",
    "beaver",
    "tan",
  ];

  return (
    <div className="grid grid-cols-3 gap-8 lg:grid-cols-6">
      {colors.map((color) => (
        <Circle key={color} color={color} />
      ))}
    </div>
  );
}

export default ColorPalette;
