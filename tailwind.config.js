export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px',
      '3xl': '2500px',
    },
    extend: {
      colors: {
        'custom-blue': '#002D40',
      },
      fontFamily: {
        outfit: ["outfit", "sans-serif"]
      },
    },
  },
  plugins: [],
}
