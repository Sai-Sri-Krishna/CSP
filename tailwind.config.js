/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          dark: '#1B4D2E',
          deep: '#143821',
          primary: '#1B4D2E',
          accent: '#2B7A4B',
          light: '#F3F8F2',
          card: '#FFFFFF',
          badgeBg: '#E2F0E0',
          badgeText: '#1B4D2E',
          textDark: '#1C2B20',
          textMuted: '#4A5D50',
          borderLight: '#E2EFE1'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
