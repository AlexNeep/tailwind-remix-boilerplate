/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#A2D2FF",
          300: "#67B6FF",
          600: "#006CD1",
          900: "#002E5A",
        },
        secondary: {
          100: "#FFAFCC",
          300: "#FF70A5",
          600: "#F5005A",
          900: "#B80043",
        },
        accent: {
          100: "#CDB4DB",
          300: "#B28DC8",
          600: "#9967B6",
          900: "#5D3773",
        },
      },
    },
  },
  plugins: [],
};
