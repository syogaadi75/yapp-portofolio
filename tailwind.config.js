/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      boxShadow: {
        '3xl': '0px 10px 20px -8px rgba(234, 179, 8, .5)',
      },
      dropShadow: {
        '2xl-primary': [
          '0 35px 35px rgba(0, 0, 0, 0.45)',
          '0 45px 65px rgba(0, 0, 0, 0.35)'
        ], 
      },
      colors: {
        primary: '#facc15',
        secondary: '#F47A04',
        light: '#f5f5f5',
        dark: '#27272a',
      }, 
      backgroundImage: {
        'logo-img': "url('/img/logo.png')", 
      },
      animation: {
        type: 'type 2.7s ease-out 1s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '4%, 8%': { transform: 'translateX(1ch)' },
          '12%, 16%': { transform: 'translateX(2ch)' },
          '20%, 24%': { transform: 'translateX(3ch)' },
          '28%, 32%': { transform: 'translateX(4ch)' },
          '36%, 40%': { transform: 'translateX(5ch)' },
          '44%, 48%': { transform: 'translateX(6ch)' },
          '52%, 56%': { transform: 'translateX(7ch)' },
          '60%, 64%': { transform: 'translateX(8ch)' },
          '68%, 72%': { transform: 'translateX(9ch)' },
          '76%, 80%': { transform: 'translateX(10ch)' },
          '80%, 84%': { transform: 'translateX(11ch)' },
          '84%, 88%': { transform: 'translateX(12ch)' },
          '92%, 96%': { transform: 'translateX(13ch)' },
          '97%, 100%': { transform: 'translateX(14ch)' },
        },
      },
    }
  },
  plugins: [],
}
