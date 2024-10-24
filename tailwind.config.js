/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins'],
        'frank': ['Frank Ruhl Libre'],
        'pod': ['Podkova'],
        
        
      },
      colors: {
        'btnHover': '#FDBB57',
        'btnBdr': '#FFD687',
        'menuColor': '#FAE3B6',
        'counterColor': '#FEECC8',
        'sellerColor': '#CFA485',
        'starColor': '#FFAF37',
        'dlrColor': '#C4C4C4',

      },
      maxWidth: {
        'containerAll': '1320px',
      }
    },
  },
  plugins: [],
}

