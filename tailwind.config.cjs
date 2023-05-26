/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/tailwindcss-animate/**/*.js",
  ],
  theme: {
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    extend: {
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
      },
      colors: {
        primary: withOpacity("--primary"),
        secondary: withOpacity("--secondary"),
        main: withOpacity("--main"),
        background: withOpacity("--background"),
        header: withOpacity("--header"),
        accent: withOpacity("--accent"),
        dark: withOpacity("--dark"),
      },
      animation: {
        blob: "blob 9s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        scroll: "scroll ease-in 1.5s infinite",
        "transition-background-position":
          "transition-background-position 1s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 15s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        scroll: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(100px)" },
        },
        "transition-background-position": {
          "0%": { backgroundPosition: "25%_75%" },
          "100%": { backgroundPosition: "0%" },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    plugin(function ({ addVariant }) {
      addVariant("optional", "&:optional");
      addVariant("hocus", ["&:hover", "&:focus-within"]);
      addVariant("inverted-colors", "@media (inverted-colors: inverted)");
    }),
  ],
};
