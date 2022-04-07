module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        default: {
          primary: '#3E87D7',
          'primary-content': '#FFFFFF',
          secondary: '#F000B8',
          accent: '#37CDBE',
          neutral: '#3D4451',
          'neutral-content': '#ffffff',
          'base-100': '#FFFFFF',
          'base-200': '#F0F3F5',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
};
