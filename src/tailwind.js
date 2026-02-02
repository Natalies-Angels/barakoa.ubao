/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        baseblack: '#0b0b0b',
        bone: '#f4f1ec',
        ember: '#c04a2f',
        ochre: '#cfa75d',
      },

      fontFamily: {
        headline: ['"Playfair Display"', 'serif'],
        script: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        soft: '0 20px 50px rgba(0,0,0,0.35)',
        ember: '0 0 0 1px rgba(192,74,47,0.35)',
      },

      letterSpacing: {
        wide: '0.25em',
      },
    },
  },

  plugins: [],
};
