import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        linen: "#f3ece2",
        fair: "#e8d4c3",
        latte: "#dbc3af",
        fawn: "#a3846d",
        burnt: "#9b7750",
        terracotta: "#854626",
        silverpink: "#bcb4a5",
        artichoke: "#988f6f",
        pastelgray: "#d3cbb9",
        pastelbeige: "#d4cbba",
        beaver: "#a4846c",
        tan: "#d2bc96",
      },
      fontFamily: {
        ebBold: ["var(--font-eb-garamond-bold)"],
        ebGaramond: ["var(--font-eb-garamond)"],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
} satisfies Config;
