module.exports = {
  content: [
    "./index.html",
    "./website/client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1028px',
        xl: '1280px',
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s forwards',
        'slide-in-right': 'slideInRight 1s forwards',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      margin: {
        '-180px': '-180px',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          // Set primary text color to black globally
          "text-base-content": "#000000", 
        },
      },
    ],
  }, 
}
