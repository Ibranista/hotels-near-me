module.exports = {
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
    "./pages/**/*.js",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/*{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Irish: ["Irish Grover", "cursive"],
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/svg/mobile-mountain.svg')",
        "desktop-pattern": "url('/svg/desktop-mountain.svg')",
        "banner": "url('/HotelBanner.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
