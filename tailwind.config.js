/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Varela Round', 'sans-serif'], 
          header: ['Varela Round', 'sans-serif']
      },
  },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "valentine",
      "halloween",
      "forest",
      "dracula",
      "night",
      "coffee",
      "winter",
      "dim",
      "sunset"
    ],
  },
};
