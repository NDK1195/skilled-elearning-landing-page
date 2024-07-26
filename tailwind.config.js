/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        '666CA3': '#666CA3',
        '13183F': '#13183F',
        '83869A': '#83869A',
        F74780: '#F74780',
        FFA7C3: '#FFA7C3',
      },
      backgroundColor: {
        'gradient-1': 'linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%)',
        'gradient-2': 'linear-gradient(180deg, #4851FF 0%, #F02AA6 99.92%)',
      },
    },
  },
  plugins: [],
};
