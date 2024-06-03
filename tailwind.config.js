/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'button-primary-bg': '#16C586',
        'button-secondary-bg': '#0368FF'
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
