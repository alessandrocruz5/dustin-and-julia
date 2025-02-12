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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`
        fixed top-0 right-0 h-full w-96 bg-latte z-50
        transform transition-transform duration-600 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="p-1 hover:bg-linen rounded-full absolute right-6"
          >
            <X className="text-terracotta" size={50} />
          </button>

          <div className="mt-32">
            <nav className="text-terracotta space-y-3">
              <Link
                href="/the-couple"
                className="block text-4xl font-bold p-6 hover:bg-linen rounded-2xl"
              >
                the couple
              </Link>
              <Link
                href="/the-ceremony"
                className="block text-4xl font-bold p-6 hover:bg-linen rounded-2xl"
              >
                the ceremony
              </Link>
              <Link
                href="/the-entourage"
                className="block text-4xl font-bold p-6 hover:bg-linen rounded-2xl"
              >
                the entourage
              </Link>
              <Link
                href="/the-registry"
                className="block text-4xl font-bold p-6 hover:bg-linen rounded-2xl"
              >
                the registry
              </Link>
              <Link
                className="block text-4xl font-bold p-6 hover:bg-linen rounded-2xl"
                href="https://www.instagram.com/dustinandjulia/?hl=en"
                target="_blank"
              >
                rsvp
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidePanel;
