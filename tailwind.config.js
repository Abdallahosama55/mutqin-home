/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "#692BEF",
        tertiary: "#5225CE",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        cle: "rgba(0, 26, 120, 0.15) , <alpha-value>)",
        box: "rgba(0, 27, 121, 1)  ",
        bggreenoptic: "rgba(12, 133, 17, 0.5)",
        frame9: "rgba(246, 44, 71, 0.78)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "350px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        frame3: "url('/src/assets/Frame3.png')",
      },
    },
  },
  plugins: [],
};
