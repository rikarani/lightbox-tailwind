/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ddd",
        primaryFade: "#ddd / 50%",
      },
    },
  },
  plugins: [],
};
