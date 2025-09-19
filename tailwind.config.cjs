/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Nueva Paleta de colores neutros con mejor contraste
        primary: '#18181b', // Color principal para texto y fondos oscuros
        secondary: '#52525b', // Color secundario con mejor contraste en modo claro
        accent: '#3b82f6', // Un azul vibrante para acentos
        background: '#fafafa', // Fondo más claro
        surface: '#e4e4e7', // Superficies
        border: '#d4d4d8', // Bordes
        
        // Paleta de grises de Tailwind (se mantiene igual, pero no la usas)
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.secondary'), // Usar secondary para el texto del blog
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
            h1: {
              color: theme('colors.primary'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.primary'),
              fontWeight: '600',
            },
            h3: {
              color: theme('colors.primary'),
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: theme('colors.accent'),
              backgroundColor: theme('colors.surface'),
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.lg'),
              fontStyle: 'italic',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.secondary'),
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
            h1: {
              color: theme('colors.background'),
            },
            h2: {
              color: theme('colors.background'),
            },
            h3: {
              color: theme('colors.background'),
            },
            blockquote: {
              borderLeftColor: theme('colors.accent'),
              backgroundColor: theme('colors.surface'),
              color: theme('colors.secondary'),
            },
            strong: {
              color: theme('colors.background'),
            },
            code: {
              color: theme('colors.background'),
            },
            hr: {
              borderColor: theme('colors.border'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};