/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f172a",   // Fundo principal (Slate 900)
          card: "#1e293b",   // Fundo dos cards (Slate 800)
          neon: "#99ccff",   // Sua cor principal (Azul Maker)
          text: "#cbd5e1",   // Texto secundário (Slate 300)
          white: "#f1f5f9",  // Títulos e destaques (Slate 100)
        }
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"], // Para títulos impactantes
        body: ["'Poppins'", "sans-serif"],          // Para descrições e menus
      },
      // Se quiser adicionar animações suaves para a sua Single Page:
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}