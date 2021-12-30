module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        purpleC: '#6e3fa3',
        greenC: "#00c65e",
        yellowC: "#bba600",
        redC: "#f93822"
      },
    },
  },
  variants: {},
  plugins: [],
}