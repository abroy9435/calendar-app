// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ['class', '.dark'], // This is key for next-themes
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can define vibrant custom colors here
        calendar: {
          primary: "#FF3366", // Vibrant accent
          range: "rgba(255, 51, 102, 0.1)",
        }
      }
    },
  },
  plugins: [],
};
export default config;