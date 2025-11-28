import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0F172A", // Deep Midnight Blue
          dark: "#05050A",
          light: "#1E293B",
        },
        secondary: {
          DEFAULT: "#FF6B00", // Safety Orange
          dark: "#E55A00",
          light: "#FF8533",
        },
        tertiary: {
          DEFAULT: "#94A3B8", // Cool Grey / Silver
          dark: "#64748B",
          light: "#CBD5E1",
        },
        accent: {
          DEFAULT: "#06B6D4", // Cyan / Electric Blue
          dark: "#0891B2",
          light: "#22D3EE",
        },
        neon: {
          blue: "#00F5FF",
          cyan: "#67E8F9",
          pink: "#FF4DFF",
          purple: "#C084FC",
        },
        shock: {
          red: "#FF1744",
          magenta: "#FF3CAC",
          blue: "#2D9CFF",
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-ring': 'pulseRing 2.5s ease-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 107, 0, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 107, 0, 0.8)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        pulseGlow: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(103, 232, 249, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgba(255, 23, 68, 0.6))' },
          '100%': { filter: 'drop-shadow(0 0 5px rgba(103, 232, 249, 0.4))' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

