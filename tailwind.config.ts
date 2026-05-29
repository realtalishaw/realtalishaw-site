import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Libre Baskerville", "Georgia", "serif"],
        sans: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "#ffffff",
        ink: "#050505",
        "ink-soft": "#404040",
        rule: "#d9d9d9",
        margin: "#050505",
      },
      boxShadow: {
        paper: "0 28px 70px rgba(45, 35, 24, 0.22)",
        sketch: "4px 6px 0 rgba(24, 39, 68, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
