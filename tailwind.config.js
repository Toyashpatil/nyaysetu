/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
      },
      colors: {
        white: "#fff",
        lightseagreen: "#41c0ab",
        black: "#000",
        silver: "#b4bec9",
        whitesmoke: "#efefef",
        gray: "#010101",
      },
    },
  },
  plugins: [],
}

