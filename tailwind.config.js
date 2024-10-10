/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html","node_modules/flowbite/**/*.js"],
  theme: {
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',  
      'lg': '18px', 
      'xl': '20px', 
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',   
      '6xl': '64px',
    },
    screens: {
      'xsMax' : {
        'max' : '390px'
      },
      'smMax' : {
        'max' : '499px'
      },
      'md' : {
        'min' : '500px',
        'max' : '799px'
      },
      'md-max' : {
        'max' : '799px'

      },
      'lg' : {
        'min' : '800px',
        'max' : '1279px'
      },
      '600max' : {
        'min' : '500px',
        'max' : '599px',
      },
      '700max' : {
        'min' : '600px',
        'max' : '700px',
      },
      'min-lg' : {
        'min' : '800px'
      },
      'mdlg-max2' : {
        'max' : '900px'
      },
      'mdlg-max' : {
        'max' : '1050px'
      },
      'max-lg' : {
        'max' : '1279px'
      },
      'xl' : {
        'min' : '1280px',
        'max' : '1919px'
      },
      'max-xl' : {
        'max' : '1919px'
      },
      'max-xl' : {
        'max' : '1919px'
      },
      'min-1550' : {
        'min' : '1550px'
      },
      'mix-2xl' : {
        'min' : '1920px'
      },

    },
    spacing:{
      '0.5' : '4px',
      '1' : '4px',
      '1.5' : '6px',
      '2' : '8px',
      '2.5' : '10px',
      '3' : '12px',
      '3.5' : '14px',
      '4' : '16px',
      '5' : '20px',
      '6' : '24px',
      '7' : '28px',
      '8' : '32px',
      '9' : '36px',
      '10' : '40px',
      '11' : '44px',
      '12' : '48px',
      '14' : '56px',
      '16' : '64px',
      '20' : '80px',
      '24' : '96px',
      '28' : '112px',
      '32' : '128px',
      '36' : '144px',
      '40' : '160px',
      '44' : '176px',
      '48' : '192px',
      '52' : '208px',
      '56' : '224px',
      '60' : '240px',
      '64' : '256px',
      '72' : '288px',
      '80' : '320px',
      '96' : '3844px',
    },
    colors:{
      'light': '#FFFFFF',
      'glass': '#D9D9D959',
      'glass': '#FFFFFF2B',
      'black': {
        900: '#000000',
        850: '#161616',
        800: '#1A1A1A',
        750: '#222327',
        700: '#292929',
        600: '#424242',
        550: '#474747',
        500: '#5B5D65',
        450: '#8A8D8F',
        400: '#969696',
        350: '#BABABA',
        300: '#CFCFCF',
        250: '#CACACA',
        200: '#D8D8D8',
        150: '#D9D9D9',
      },
      'success': '#00FFCC',
      'successDark': '#00925A',
      'blue': {
        900: '#0E72FF',
        50: '#ADCCC2',
      },
      'red': '#EB004E',
    },
    fontFamily:{
      "Farsi-thin": ['yekan-thin'],
      "Farsi-UltraLight": ['yekan-UltraLight'],
      "Farsi-light": ['yekan-light'],
      "Farsi-regular": ['yekan-regular'],
      "Farsi-medium": ['yekan-medium'],
      "Farsi-semibold": ['yekan-semibold'],
      "Farsi-bold": ['yekan-bold'],
      "Farsi-ExtraBold": ['yekan-ExtraBold'],
      "Farsi-black": ['yekan-black'],
      "Farsi-ExtraBlack": ['yekan-ExtraBlack'],
      "Farsi-heavy": ['yekan-heavy'],
      "Farsi-FaNum-thin": ['yekan-thin'],
      "Farsi-FaNum-UltraLight": ['yekan-UltraLight'],
      "Farsi-FaNum-light": ['yekan-light-FaNum'],
      "Farsi-FaNum-regular": ['yekan-regular-FaNum'],
      "Farsi-FaNum-mdeium": ['yekan-medium-FaNum'],
      "Farsi-FaNum-semibold": ['yekan-semibold-FaNum'],
      "Farsi-FaNum-bold": ['yekan-bold-FaNum'],
      "Farsi-FaNum-ExtraBold": ['yekan-ExtraBold-FaNum'],
      "Farsi-FaNum-black": ['yekan-black-FaNum'],
      "Farsi-FaNum-ExtraBlack": ['yekan-ExtraBlack-FaNum'],
      "Farsi-FaNum-heavy": ['yekan-heavy-FaNum'],
      "Farsi-NoEn-thin": ['yekan-thin-NoEn'],
      "Farsi-NoEn-UltraLight": ['yekan-UltraLight-NoEn'],
      "Farsi-NoEn-light": ['yekan-light-NoEn'],
      "Farsi-NoEn-regular": ['yekan-regular-NoEn'],
      "Farsi-NoEn-mdeium": ['yekan-medium-NoEn'],
      "Farsi-NoEn-semibold": ['yekan-semibold-NoEn'],
      "Farsi-NoEn-bold": ['yekan-bold-NoEn'],
      "Farsi-NoEn-ExtraBold": ['yekan-ExtraBold-NoEn'],
      "Farsi-NoEn-black": ['yekan-black-NoEn'],
      "Farsi-NoEn-ExtraBlack": ['yekan-ExtraBlack-NoEn'],
      "Farsi-NoEn-heavy": ['yekan-heavy-NoEn'],
    },
    backgroundImage: {
      'texture1' : "url('../semi-image/bg-cover.png')"
    },
    extend: {
      aspectRatio: {
        '5/3' : "5 / 3",
        '1/132' : "1 / 1.32",
        '1/1472' : "1 / 1.472610",
        '165/1' : "1.65/1",
        '1/1470' : "1 / 1.47001",
        '1388/1' : "1.3889 / 1",
        '25/1' : "2.5 / 1",
        '1/147' : "1/1.4736",
        '183/1' : "1.8336/1",
      },
    },
  },
  plugins: [
    
  ],
}

// npx tailwindcss -i ./src/input.css -o ./public/styles/style.css --watch

