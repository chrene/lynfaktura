module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

    },
    fontFamily: {
      'sans': ['Montserrat', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        default: {
          primary: '#004F77',
          'primary-content': '#FFFFFF',
          secondary: '#F000B8',
          accent: '#3E87D7',
          neutral: '#3D4451',
          'neutral-content': '#ffffff',
          'base-100': '#FFFFFF',
          'base-200': '#F0F3F5',
          'base-content': '#354A54',
          info: '#3ABFF8',
          success: '#2FAB69',
          warning: '#FBBD23',
          error: '#F4697F',
        },
      },
    ],
  },
};
