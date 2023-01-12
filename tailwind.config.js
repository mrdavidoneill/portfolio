/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        desk: "url('/images/desk.jpg')",
      },
      animation: {
        blob: "blob 20s ease-in-out infinite ",
        flip: "flip 0.3s ease-in-out ",
        hand: "hand 0.3s ease-in-out ",
        thumb: "thumb 0.3s ease-in-out ",
        fadein: "fadein 0.5s ease-in-out",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0vh, 0vh) scale(2)",
          },
          "35%": {
            transform: "translate(-15vh, -15vh) scale(1)",
          },
          "70%": {
            transform: "translate(15vh, 15vh) scale(3)",
          },
          "100%": {
            transform: "translate(0vh, 0vh) scale(2)",
          },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100%" },
        },
        flip: {
          "0%": {
            transform: "rotateX(180deg)",
          },
          "30%": {
            transform: "rotateX(110deg)",
          },
          "100%": {
            transform: "rotateX(0)",
          },
        },
        thumb: {
          "0%": {
            transform: "rotate(0) translate(0vh, 0vh) scale(1)",
          },
          "30%": {
            transform: "rotate(40deg) translate(40vh, -20vh) scale(1.5)",
          },
          "100%": {
            transform: "rotate(0) translate(0vh, 0vh) scale(1)",
          },
        },
        hand: {
          "0%": {
            transform: "rotate(0) translate(0vh, 0vh) scale(1)",
          },
          "50%": {
            transform: "rotate(-20deg) translate(10vh, 10vh) scale(1.25)",
          },
          "100%": {
            transform: "rotate(0) translate(0vh, 0vh) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
