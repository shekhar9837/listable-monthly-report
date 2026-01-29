import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        border: "var(--color-border)",
        canvas: "#FAFAF9",
        report: "#FFFFFF",
        ink: "#000000",
        muted: "#6B7280",
        green: "#16A34A",
        red: "#EF4444",
        orange: "#F97316",
        yellow: "#F59E0B",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
