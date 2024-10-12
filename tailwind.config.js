/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      title: "Zen Dots, sans-serif",
      subtitle: "Inconsolata, monospace",
      body: "Mulish, sans-serif",
      "body-two": "Montserrat, sans-serif",
    },
    extend: {
      backgroundColor: {
        "btn-primary": "#16C586",
        "btn-secondary": "#0368FF",
        "dark-bg": "#0F0920",
        "light-bg": "#EBEBEB",
      },
      colors: {
        "primary": "#0F0920",
        "primary-muted": "#221C3E",
        "blue-btn": "#0368FF",
        "white-one": "#F2F0FF",
        "white-two": "#EBEBEB",
        "white-tree": "#E1E1E1",
        "white-four": "#FFFF",
        "gray-text": "#B5B3BC",
      },
    },
  },
  plugins: [],
};
