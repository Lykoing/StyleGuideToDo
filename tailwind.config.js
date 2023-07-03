/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      main: {
        bg: '#c5e7f0',
        brd: '#5c6c70',
        btn: '#f0e8c5',
      },

      input: {
        brd: '#5c6c70',
        bgActive: '##eff0c5',
        brdActive: '#5c6c70',
      },

      btn: {
        bgActive: '#ecee98',
        bg: '#f0e8c5',
        imp: '#ed9898',
      },
      tasks: {
        item: {
          brd: '#5c6c70',
          bg: {
            DEFAULT: '#c5dff0',
            imp: '#ed9898',
          },
        },
        brd: '#5c6c70',
      },
      mod: {
        bg: 'black',
        brd: '#5c6c70',
      },
    },
  },
  plugins: [],
}
