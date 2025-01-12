// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "selected-bg": "var(--selected-bg-color)",
        brand: {
          green: 'var(--brand-green)',
          'gray-light': 'var(--brand-gray-light)',
          'gray-medium': 'var(--brand-gray-medium)',
          'gray-dark': 'var(--brand-gray-dark)',
          mint: 'var(--brand-mint)',
        }
      },
      fontSize: {
        'display': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'title-normal': ['24px', { lineHeight: '1.2', fontWeight: '400' }],
        'title': ['24px', { lineHeight: '1.5', fontWeight: '900' }],
        'body': ['20px', { lineHeight: '1.5' }],
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
    },
    borderRadius: {
      'large': '27px',
    }
  },
  plugins: [],
};

export default config;