/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          700: 'rgb(67 87 118)',
          50: 'rgb(245 247 250)',
          100: 'rgb(234 238 244)',
        },
      },
      backgroundColor: {
        'btn-primary': 'rgb(67 87 118)', 
      },
      borderColor: {
        'btn-primary': 'rgb(213 223 233)', 
      },
    },
  },
  plugins: [],
}
