/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'gazzetta': ['"gazzetta-variable"', 'sans-serif'],
        'sans': ['"gazzetta-variable"', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'variable': '400',
      },
    },
  },
  plugins: [],
}
