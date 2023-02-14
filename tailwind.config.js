const colors = require('tailwindcss/colors')

// temporary fix, see https://github.com/tailwindlabs/tailwindcss/issues/4690#issuecomment-1046087220
delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{tsx,jsx,css}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      red: {
        50: '#FBF2F5',
        100: '#F6E6EB',
        200: '#E9BFCE',
        300: '#DC99B0',
        400: '#C24D74',
        500: '#A80039',
        600: '#970033',
        700: '#650022',
        800: '#4C001A',
        900: '#320011'
      },
      orange: {
        50: '#FBF7F5',
        100: '#F8EEEB',
        200: '#EDD5CE',
        300: '#E2BBB0',
        400: '#CC8875',
        500: '#B6553A',
        600: '#A44D34',
        700: '#6D3323',
        800: '#52261A',
        900: '#371A11'
      },
      yellow: {
        50: '#FAFDF5',
        100: '#F6FAEB',
        200: '#E8F3CE',
        300: '#DAEBB0',
        400: '#BFDD74',
        500: '#A3CE39',
        600: '#93B933',
        700: '#627C22',
        800: '#495D1A',
        900: '#313E11'
      },
      green: {
        50: '#F2FAF8',
        100: '#E6F4F0',
        200: '#BFE4DB',
        300: '#99D3C5',
        400: '#4DB399',
        500: '#00926D',
        600: '#008362',
        700: '#005841',
        800: '#004231',
        900: '#002C21'
      },
      blue: {
        50: '#F4F8F8',
        100: '#EAF0F1',
        200: '#CADADC',
        300: '#A9C3C7',
        400: '#69969E',
        500: '#296974',
        600: '#255F68',
        700: '#193F46',
        800: '#122F34',
        900: '#0C2023'
      },
      purple: {
        50: '#FBF6FF',
        100: '#F7ECFF',
        200: '#EAD1FF',
        300: '#DDB5FF',
        400: '#C47DFF',
        500: '#AA45FF',
        600: '#993EE6',
        700: '#662999',
        800: '#4D1F73',
        900: '#33154D'
      },
      black: '#212121'
    }
  },
  plugins: []
}
