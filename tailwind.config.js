/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#141315",
        'background-secondary': "#1e1d20",
        'accent': "#1888C4",
        'paragraph': "#94a1b2",


        "PHP": "rgb(79, 93, 149)",
        "Vue": "rgb(65, 184, 131)",
        "Blade": "rgb(247, 82, 63)",
        "JavaScript": "rgb(241, 224, 90)",
        "CSS": "rgb(86, 61, 124)",
        "Python": "rgb(53, 114, 165)",
        "Lua": "#000080",
        "Shell": "#89e051",
        "GLSL": "#5686a5",
        "Rust": "rgb(222, 165, 132)",
        "TypeScript": "#3178c6",
        "Dockerfile": "#384d54",
        "HTML": "#e34c26"
      },
      letterSpacing: {
        "1xl": "0.2em",
      }
    },
    fontFamily: {
      'sans': 'Montserrat',
      'sans-serif': 'Helvetica'
    }
  },
  safelist: [
    {
      pattern: /bg-(PHP|Vue|Blade|JavaScript|CSS|Python|Lua|Shell|GLSL|Rust|TypeScript|Dockerfile|HTML)/,
    },
  ],
  plugins: [
    require('@tailwindcss/typography'),
    function({ addVariant }) {
      addVariant('child', '& > *');
    }
  ],
}
