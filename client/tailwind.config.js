/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Mono', 'sans-serif'],
        mono: ['Geist Mono', 'monospace']
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-out': 'fadeOut 1s ease-in 2.5s forwards', // Fade out starts after 2.5s
      },
    },
    },
  plugins: [],
};
