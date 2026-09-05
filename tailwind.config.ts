import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#006943',
        'primary-green-dark': '#004d2f',
        'primary-green-light': '#7cc99d',
        'primary-orange': '#ffd100',
        'primary-orange-dark': '#cca300',
        'primary-orange-light': '#fff4a8',
      },
    },
  },
  plugins: [],
}
export default config
