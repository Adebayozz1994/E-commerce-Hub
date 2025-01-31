import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sankofa: ["'Sankofa Display'", "sans-serif"],
        sedgwick: ["'Sedgwick Ave Display'", "cursive"],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
