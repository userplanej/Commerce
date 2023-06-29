const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './icons/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}' // Tremor module
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      colors: {
        tremor: {
          brand: {
            faint: '#eff6ff', // blue-50
            muted: '#bfdbfe', // blue-200
            subtle: '#60a5fa', // blue-400
            DEFAULT: '#3b82f6', // blue-500
            emphasis: '#1d4ed8', // blue-700
            inverted: '#ffffff' // white
          },
          background: {
            muted: '#f9fafb', // gray-50
            subtle: '#f3f4f6', // gray-100
            DEFAULT: '#ffffff', // white
            emphasis: '#374151' // gray-700
          },
          border: {
            DEFAULT: '#e5e7eb' // gray-200
          },
          ring: {
            DEFAULT: '#e5e7eb' // gray-200
          },
          content: {
            subtle: '#9ca3af', // gray-400
            DEFAULT: '#6b7280', // gray-500
            emphasis: '#374151', // gray-700
            strong: '#111827', // gray-900
            inverted: '#ffffff' // white
          }
        },
        // dark mode
        'dark-tremor': {
          brand: {
            faint: '#0B1229', // custom
            muted: '#172554', // blue-950
            subtle: '#1e40af', // blue-800
            DEFAULT: '#3b82f6', // blue-500
            emphasis: '#60a5fa', // blue-400
            inverted: '#030712' // gray-950
          },
          background: {
            muted: '#131A2B', // custom
            subtle: '#1f2937', // gray-800
            DEFAULT: '#111827', // gray-900
            emphasis: '#d1d5db' // gray-300
          },
          border: {
            DEFAULT: '#1f2937' // gray-800
          },
          ring: {
            DEFAULT: '#1f2937' // gray-800
          },
          content: {
            subtle: '#4b5563', // gray-600
            DEFAULT: '#6b7280', // gray-600
            emphasis: '#e5e7eb', // gray-200
            strong: '#f9fafb', // gray-50
            inverted: '#000000' // black
          }
        },
        gray: colors.neutral,
        hotPink: '#FF1966',
        dark: '#111111',
        light: '#FAFAFA',
        violetDark: '#4c2889'
      },
      boxShadow: {
        // light
        'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        // dark
        'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      },
      borderRadius: {
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px'
      },
      fontSize: {
        'tremor-label': ['0.75rem'],
        'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
        'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
        'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }]
      },
      keyframes: {
        flipIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        leapsIn: {
          '0%': { transform: 'translateX(0%)', opacity: 0.3 },
          '100% ': { transform: 'translate(20px, -50px)', opacity: 1.0 }
        },
        growOut: {
          '0%': { transform: 'scale(100%)', opacity: 0.3 },
          '100% ': { transform: 'scale(120%)', opacity: 1.0 }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1.0 }
        },
        pdfadeIn: {
          from: { opacity: 0 },
          to: { opacity: 0.8 }
        },
        stickyFadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1.0 }
        },
        videoFadeIn: {
          from: { width: '80%', height: '80%', opacity: 0 },
          to: { width: '100%', height: '100%', opacity: 1.0 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '40% ': { opacity: 0.2 },
          '60% ': { opacity: 1 },
          '80% ': { opacity: 0.2 },
          '100% ': { opacity: 1 }
        }
      },
      /* @keyframes duration | easing-function | delay |
          iteration-count | direction | fill-mode | play-state | name */
      animation: {
        leapsIn: 'leapsIn 2.5s ease-in-out',
        flipIn: 'blink 1.4s both ',
        growOut: 'growOut 10s ease-in-out',
        fadeIn: 'fadeIn 1.2s ease-in-out',
        pdfadeIn: 'fadeIn .2s ease-in-out',
        pageBgFadeIn: 'fadeIn .5s linear',
        stickyFadeIn: 'stickyFadeIn .01s ease-in-out',
        longStickyFadeIn: 'stickyFadeIn 6s ease-in-out',
        videoFadeIn: 'videoFadeIn 6s ease-in-out',
        carousel: 'marquee 10s linear infinite',
        blink: 'blink 1.4s both infinite'
      },

      backgroundImage: {
        lvmh: 'url("https://eu.louisvuitton.com/content/dam/lv/online/high-end/women/handbags/W_Fa_Capucines_Icon_Zendaya_V2.html/jcr:content/assets/CATEGORY_CAMPAIGN_VISUAL_LVCOM_2048x1152_DI3.jpg?imwidth=1240")',
        lvmhmo:
          'url(https://eu.louisvuitton.com/content/dam/lv/online/high-end/women/handbags/W_Fa_Capucines_Icon_Zendaya_V2.html/jcr:content/assets/CATEGORY_CAMPAIGN_VISUAL_LVCOM_1600x2000_DI.jpg?imwidth=1240)'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected']
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected']
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected']
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/
    }
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
