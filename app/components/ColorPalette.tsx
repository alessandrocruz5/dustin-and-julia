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
    <div className="flex flex-wrap justify-center gap-8">
      {colors.map((color) => (
        <Circle key={color} color={color} />
      ))}
    </div>
  );
}

export default ColorPalette;
