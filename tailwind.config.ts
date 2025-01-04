import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        darkBlue: "#2b3945", // Dark Mode Elements
        darkBlueBg: "#202c37", // Dark Mode Background
        darkBlueText: "#111517", // Light Mode Text
        darkGray: "#858585", // Light Mode Input
        lightGrayBg: "#fafafa", // Light Mode Background
        // Dark Mode Text & Light Mode Elements
      },
    },
  },
  plugins: [],
} satisfies Config;
