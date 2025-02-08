import React from "react";

function Footer() {
  return (
    <footer className="relative h-screen w-full">
      {/* Main footer content */}
      <div className="absolute w-full bg-latte px-8 pt-16 pb-8 mt-auto text-center h-[130%] rounded-[100%] transform translate-y-[100%]">
        <h2 className="text-terracota font-bold italic text-3xl mb-2">
          dustin & julia
        </h2>
        <div className="text-terracota font-bold italic text-sm space-x-4">
          <span>@dustindagamac</span>
          <span>@juliamorados</span>
        </div>
        <div className="mt-4 font-bold text-terracota text-xs">
          designed and developed by
          <br />
          Alessandro Cruz
        </div>
      </div>
    </footer>
  );
}

export default Footer;
