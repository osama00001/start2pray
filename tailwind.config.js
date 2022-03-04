const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode : "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#29323c",
        secondary: "#6f91a7",
      },
      gridTemplateRows: {
        layout: "max-content 1fr max-content",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/newhero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
