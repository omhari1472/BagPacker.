/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#dbd4f3',
        'custom-primary': '#6657cb', // Custom primary color
      },
      borderColor: {
        'primary': '#dbd4f3',
        'custom-primary': '#6657cb', // Custom primary border color
        'custom-secondary': '#2a0cdc', // Custom secondary border color
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'],
      backgroundColor: ['hover'],
      borderColor: ['hover'],
    },
  },
  plugins: [],
};
