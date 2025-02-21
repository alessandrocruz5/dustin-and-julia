import React from "react";

interface PrincipalSponsorCardProps {
  children: React.ReactNode;
}

function PrincipalSponsorCard({ children }: PrincipalSponsorCardProps) {
  return <div className="my-[0.2rem]">{children}</div>;
}

export default PrincipalSponsorCard;
