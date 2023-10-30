/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      margin:{
        '120': '28rem',
        '180': '44rem',
        '160': '41.5rem',
        '140': '39rem',
        '138': '35.4rem',
        '137': '33rem',
        '120': '17rem',
      },
      width: {
        '120': '30rem', 
        '180': '47rem',
      },
      height: {
        '120': '30rem',
         // Agrega un tamaño personalizado de alto 'h-120'
      },
    },
  },
  plugins: [],
}
