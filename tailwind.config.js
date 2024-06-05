/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      'title': 'Zen Dots, sans-serif',
      'subtitle': 'Inconsolata, monospace',
      'body': 'Mulish, sans-serif',
    },
    extend: {
      backgroundColor: {
        'btn-primary': '#16C586',
        'btn-secondary': '#0368FF',
        'dark-bg': '#0F0920',
        'light-bg': '#EBEBEB',
      },
      colors: {
        'primary': '#0F0920',
        'pirmary-muted': '#221C3E',
        'white-one': '#F2F0FF',
        'white-two': '#EBEBEB',
        'white-tree': '#E1E1E1',
        'white-four': '#FFFF',
        'gray-text': '#B5B3BC'
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.github-button': {
          'width': '128px',
          'height': '48px',
          'border-radius': '8px',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'gap': '8px',
          'cursor': 'pointer',
          'font-family': 'Montserrat, sans-serif',
          'font-size': '16px',
          'font-weight': '700',
        },
      })
    })
  ],
};
