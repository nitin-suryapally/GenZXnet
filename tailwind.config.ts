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
        gray: {
          primary: "#2e2e2e",
          background: "#2e2e2e",
        },
        green: {
          primary: "#61cb2c",
          text: "#5fcc29",
          button: "#67f81d",
        },
      },
      fontFamily: {
        sans: [`var(--font-merriweather)`],
        mono: [`var(--font-montserrat)`],
      },
    },
  },
  plugins: [],
};
export default config;
