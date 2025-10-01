import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        accent: '#16a34a',
      },
      fontFamily: {
        display: ['EB Garamond', 'serif'],
        body: ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
