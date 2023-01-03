/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1d1e21",
        backupPrimary: "#161719",
        secondary: "#aaaaaa",
        backupSecondary: "#28292cb6",
        gray: "#c1c1c1",
        lightGray: "#6c717e",
        lightBlue: "#0dcaf0",
      },
    },
  },
  plugins: [],
};
