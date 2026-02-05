/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom branding based on your images
        'brand': {
          primary: '#5B2C84', // Deep Purple (from the Archbishop's banner)
          secondary: '#8A4FB1', // Lighter Purple (for gradients)
          accent: '#FFD700', // Gold/Yellow (often found in the Bishop's vestments/trim)
          light: '#F3E8FF', // Very light purple for section backgrounds
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        // Suggesting a clean sans-serif for modern youth appeal
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'], // For Bible verses/Quotes
      }
    },
  },
  plugins: [],
}