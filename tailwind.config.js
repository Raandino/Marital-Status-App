/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#018765',
        'primary-dark': '#016048',
        secondary: '#E6F9F4',
        tertiary: '#181B25',
        neutral: {
          1: '#DFE2E8',
          2: '#EFF2F5',
        },
        appBlue: '#00ABEC',
      },
      fontFamily: {
        osbold: ['Open-Sans-Bold', 'sans-serif'],
        ossemibold: ['Open-Sans-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
