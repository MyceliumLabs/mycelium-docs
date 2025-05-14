/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      screens: {
        md: "848px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
