module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      height: { "9/10": "90%" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
