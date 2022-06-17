module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "900px",
      lg: "1200px",
      xl: "1440px",
    },
    colors: {
      "orange-red": "#F86624",
      "orange-red-100": "#F98652",
      "orange-red-500": "#F65207",
      white: "#fff",
      ash: "#D9D9D9",
      "ash-100": "#e0e0e0",
      "ash-500": "#aeaeae",
      green: "#52893D",
      "green-100": "#a3ce93",
      "green-500": "#527b43",
      black: "#000",
      "black-500": "#262626",
      pink: "#F6E8DE",
    },
    fontSize: {
      48: "3rem",
    },

    extend: {
      // Spacing: {
      //   1: "4px",
      // },
    },
  },
  plugins: [],
};
