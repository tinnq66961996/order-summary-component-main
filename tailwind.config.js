/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('/images/pattern-background-mobile.svg')",
        desktop: "url('/images/pattern-background-desktop.svg')",
      },
    },
    fontFamily: {
      main: ['IBM Plex Sans', 'sans-serif'],
    },
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
  },
  plugins: [],
};
