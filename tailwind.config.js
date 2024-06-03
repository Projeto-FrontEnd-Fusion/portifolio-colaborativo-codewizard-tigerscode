/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundColor: {
        'button-primary-bg': '#16C586',
        'button-secondary-bg': '#0368FF',
        'dark-bg': '#0F0920',
        'light-bg': '#EBEBEB',
      },
      colors: {
        'white-one': '#F2F0FF',
        'white-two': '#EBEBEB',
        'white-tree': '#E1E1E1',
        'white-four': '#FFFF',
        'gray-text': '#B5B3BC'
      }
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
        '.title-font': {
          'font-family': 'ZenDots, sans-serif',
        },
        '.subtitle-font': {
          'font-family': 'Inconsolata, sans-serif',
        },
        '.body-font': {
          'font-family': 'Mulish, sans-serif',
        }
      })
    })
  ],
};
