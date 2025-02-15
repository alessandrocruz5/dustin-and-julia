import React, { ReactNode } from "react";

interface EntourageCardProps {
  title?: string;
  children: ReactNode;
}

function EntourageCard({ title, children }: EntourageCardProps) {
  return (
    <div className="text-center text-terracotta flex flex-col items-center font-bold space-y-10 my-40">
      <div className="text-7xl">{title}</div>
      <div className="w-[1300px]">
        {/* Remove the flex and justify-between from here */}
        <div className="text-4xl">{children}</div>
      </div>
    </div>
  );
}

export default EntourageCard;
