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
        backupSecondary: "#28292c",
        red: "#DC2626",
      },
    },
  },
  plugins: [],
};
