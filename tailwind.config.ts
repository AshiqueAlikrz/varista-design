import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        "screen-130": "130vh",
      },
      fontSize: {
        "3xl": "3.875rem",
        "10xl": "1000px",
      },
      dropShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.7)', // Example of a black shadow
      },
      screens: {
        xs: "480px", // Custom breakpoint for extra small screens
        sm: "640px", // Default small screens
        md: "768px", // Default medium screens
        lg: "1024px", // Default large screens
        xl: "1280px", // Default extra-large screens
        "2xl": "1536px",
        "3xl": "2036px",
        ms: "344px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
