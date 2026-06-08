import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sumi: "#27231f",
        moss: "#526148",
        cedar: "#7a5136",
        clay: "#a76042",
        rice: "#f8f3ea",
        paper: "#fffaf1",
        smoke: "#e7dccb",
      },
      fontFamily: {
        sans: [
          '"Yu Gothic"',
          '"Hiragino Kaku Gothic ProN"',
          '"Meiryo"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        serif: [
          '"Yu Mincho"',
          '"Hiragino Mincho ProN"',
          '"MS PMincho"',
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(39, 35, 31, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
