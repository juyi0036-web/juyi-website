module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0f172a', // Slate 900
        'brand-blue': '#1e293b', // Slate 800
        'brand-orange': '#ea580c', // Orange 600
        'cream': '#F8FAFC', // Slate 50 replacement for legacy 'cream'
        'choco': '#334155', // Slate 700 replacement for legacy 'choco'
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
