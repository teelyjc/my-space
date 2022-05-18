const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Kanit', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
