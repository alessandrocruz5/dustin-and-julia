import React from "react";
import { X } from "lucide-react";
import Link from "next/link";

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

function SidePanel({ isOpen, onClose }: SidePanelProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/50 transition-opacity duration-300 z-[999]
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      {/* Side Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-md bg-latte z-[1000]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Panel Content */}
        <div className="relative h-full p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 hover:bg-linen rounded-full transition-colors"
          >
            <X className="w-[2rem] h-[2rem] md:h-8 md:w-8 text-terracotta" />
          </button>

          {/* Navigation Links */}
          <nav className="mt-24 md:mt-32">
            <div className="space-y-2 text-terracotta font-bold text-center">
              {[
                { href: "/the-couple", label: "the couple" },
                { href: "/the-ceremony", label: "the ceremony" },
                { href: "/the-entourage", label: "the entourage" },
                {
                  href: "https://www.instagram.com/dustinandjulia/?hl=en",
                  label: "rsvp",
                  external: true,
                },
              ].map(({ href, label, external }) => (
                <Link
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="block w-full rounded-2xl p-4 text-2xl md:text-3xl lg:text-4xl 
                            font-ebBold hover:bg-linen transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SidePanel;
