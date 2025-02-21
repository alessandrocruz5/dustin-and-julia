import React from "react";
import MobileEntouragePage from "../components/MobileEntouragePage";
import ResponsiveLayout from "../components/ResponsiveLayout";
import DesktopEntouragePage from "../components/DesktopEntouragePage";

function EntouragePage() {
  return (
    <>
      <ResponsiveLayout
        mobileContent={<MobileEntouragePage />}
        desktopContent={<DesktopEntouragePage />}
        breakpoint={1025}
      />
    </>
  );
}

export default EntouragePage;
