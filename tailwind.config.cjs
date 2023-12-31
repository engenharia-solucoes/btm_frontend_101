module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: "jit",
  dark:"class",
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    extend: {
      backgroundImage: {
        'login-bg': `url('./src/assets/bg.png')`,
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-delay': 'spin 6s linear infinite -3s',
        'spin-delay2': 'spin 6s linear infinite -4.5s',
        'spin-delay3': 'spin 6s linear infinite -7.5s',
      },    
      boxShadow: {
        'selected-route': '0 0 0 3px rgba(66, 153, 225, 0.5)'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        tertiary: '',
        accent: {
          DEFAULT: '',
          hover: '',
        },
        paragraph: '',
        'firefly': {
          '50': '#f2f7fb',
          '100': '#d2e6f5',
          '200': '#a6cbe9',
          '300': '#71a5d7',
          '400': '#447ebd',
          '500': '#2a61a2',
          '600': '#1f4b82',
          '700': '#1d3d68',
          '800': '#1b3354',
          '900': '#1b2d46',
          '950': '#050b15',
        },      
        'bondi-blue': {
          '50': '#eafffd',
          '100': '#cafffb',
          '200': '#9cfffb',
          '300': '#57fffa',
          '400': '#0cfaff',
          '500': '#00dcea',
          '600': '#00afc4',
          '700': '#0093a7',
          '800': '#0b6e7f',
          '900': '#0e5b6b',
          '950': '#023d4a',
        },    
        'heliotrope': {
          '50': '#faf5ff',
          '100': '#f3e7ff',
          '200': '#e9d3ff',
          '300': '#d8b0ff',
          '400': '#c07eff',
          '500': '#a545ff',
          '600': '#942af3',
          '700': '#801ad6',
          '800': '#6d1aaf',
          '900': '#59178c',
          '950': '#3c0269',
        },           
      },
    },
  },
  plugins: [],
};