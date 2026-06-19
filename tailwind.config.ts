import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Space Grotesk gives us that sharp, premium Gemini-style AI aesthetic
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-geist-sans)", "sans-serif"],
      },
      colors: {
        background: "colors.zinc.950",
        // Custom neon accents for our borders and highlights
        emeraldAccent: "#10b981",
        indigoAccent: "#6366f1",
      },
      backgroundImage: {
        "gemini-gradient": "linear-gradient(to right, #10b981, #6366f1)",
      },
    },
  },
  plugins: [],
};
export default config;