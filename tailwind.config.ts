import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#F4E9D2',
        'brand-brown': '#4E3034',
      },
      fontFamily: {
        fino:     ['Fino Sans', 'Playfair Display', 'Georgia', 'serif'],
        alliance: ['Alliance No2', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        dezoom: {
          '0%':   { transform: 'scale(1.12)', opacity: '0' },
          '100%': { transform: 'scale(1)',    opacity: '1' },
        },
        fadeUp: {
          '0%':   { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
      },
      animation: {
        dezoom: 'dezoom 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
export default config
