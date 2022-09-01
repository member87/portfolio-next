/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#16161A",
        'background-secondary': "#242629",
        'accent': "#0F75AE",
        'paragraph': "#94a1b2",
      }
    },
    fontFamily: {
      'sans': 'Roboto',
      'sans-serif': 'Helvetica'
    }
  },
  plugins: [],
}
