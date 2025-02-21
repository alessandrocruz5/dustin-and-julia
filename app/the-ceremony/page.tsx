import React from "react";
import MobileCeremonyPage from "../components/MobileCeremonyPage";
import ResponsiveLayout from "../components/ResponsiveLayout";
import DesktopCeremonyPage from "../components/DesktopCeremonyPage";

function CeremonyPage() {
  return (
    <>
      <ResponsiveLayout
        mobileContent={<MobileCeremonyPage />}
        desktopContent={<DesktopCeremonyPage />}
        breakpoint={1025}
      />
    </>
  );
}

export default CeremonyPage;
