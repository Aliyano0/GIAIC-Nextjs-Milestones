import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      colors: {
        'main-gray': 'var(--main-gray)',
        'navLiColor': 'var(--navLiColor)',
        'main-red': 'var(--main-red)',
        'subtitle': 'var(--subtitle)',
        'input-icon': 'var(--inputIcon)',
        'input-border': 'var(--inputBorder)',
      },
      screens: {
        xl: '1200px',
        lg: '1024px',
        lg991: '991px',
        lg822: '822px',
        lg2: '810px',
        md: '768px',
        sm: '640px',
        xs: '480px',
        xxs: '390px',
      },
    },
  },
  plugins: [],
} satisfies Config;
