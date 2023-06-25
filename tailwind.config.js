const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './icons/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      colors: {
        gray: colors.neutral,
        hotPink: '#FF1966',
        dark: '#111111',
        light: '#FAFAFA',
        violetDark: '#4c2889'
      },

      keyframes: {
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
          '100% ': { opacity: 0.2 }
        }
      },
      /* @keyframes duration | easing-function | delay |
          iteration-count | direction | fill-mode | play-state | name */
      animation: {
        leapsIn: 'leapsIn 2.5s ease-in-out',
        growOut: 'growOut 10s ease-in-out',
        fadeIn: 'fadeIn 1.2s ease-in-out',
        pdfadeIn: 'fadeIn .2s ease-in-out',
        pageBgFadeIn: 'fadeIn .5s linear',
        stickyFadeIn: 'stickyFadeIn .01s',
        longStickyFadeIn: 'stickyFadeIn 5s',
        videoFadeIn: 'videoFadeIn 6s linear',
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
  plugins: [
    require('@tailwindcss/typography'),
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
