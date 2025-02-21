import React, { ReactNode } from "react";

interface EntourageCardProps {
  title?: string;
  children: ReactNode;
}

function EntourageCard({ title, children }: EntourageCardProps) {
  return (
    <div className="text-center text-terracotta flex flex-col justify-center items-center font-bold space-y-10 my-40 p-10">
      <div className="text-4xl lg:text-6xl">{title}</div>
      <div className="w-screen">
        {/* Remove the flex and justify-between from here */}
        <div className="text-3xl">{children}</div>
      </div>
    </div>
  );
}

export default EntourageCard;
