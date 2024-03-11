import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
      // "2xl": "1536px",
    },
    extend: {
      colors: {
        "port-rgba": "rgba(0, 0, 0, 0.1)",
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
      },
    },
    container: {
      center: true,
    },
  },

  plugins: [],
};
export default config;
