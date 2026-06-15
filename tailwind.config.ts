import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        geo: {
          cyan: "#22d3ee",
          sky: "#0ea5e9",
          emerald: "#10b981",
        },
      },
      boxShadow: {
        glass: "0 20px 45px rgba(2, 6, 23, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
