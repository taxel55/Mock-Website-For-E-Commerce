/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue,jsx,tsx}", // Add more file types or directories as needed
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1A1C22',
        'accent': '#580EF6',
        'text': '#F4F5FC',
        'secondary': '#3D3A50',
      },
    },
  },
  plugins: [
    // Add Tailwind plugins as needed (e.g., require('tailwindcss/forms'))
  ],
}