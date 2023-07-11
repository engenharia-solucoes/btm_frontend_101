module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        
      },
      colors: {
        primary: '',
        secondary: '',
        tertiary: '',
        accent: {
          DEFAULT: '',
          hover: '',
        },
        paragraph: '',
      },
    },
  },
  plugins: [],
};