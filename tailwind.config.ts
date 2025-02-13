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
        candy: "#ff69b4",
        lemon: "#ffec47",
        blue: "#82ddf0",
        cotton: "#ffa3c0",
        grape: "#8a3e99"
      },
      fontFamily: {
        poppins: "var(--font-poppins)", 
        pacifico: "var(--font-pacifico)", 
      }
    },
  },
  plugins: [],
} satisfies Config;
