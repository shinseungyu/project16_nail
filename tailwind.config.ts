import type { Config } from "tailwindcss";

const config: Config = {
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
        brand: {
          light: "#FFF1F2", // rose-50
          DEFAULT: "#FB7185", // rose-500
          dark: "#E11D48", // rose-600
        },
        accent: {
          light: "#FEF3C7", // amber-100
          DEFAULT: "#FDE68A", // amber-200
          dark: "#F59E0B", // amber-500
        },
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(to bottom right, #FFF1F2, #FFF7ED, #FFFFFF)',
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(251, 113, 133, 0.1), 0 4px 15px -5px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
